# POST /users/register 🚀

## Description

Registers a new user. The endpoint validates the input, hashes the password, saves the user to the database, and returns a JWT token along with the created user (password is not returned).

## Endpoint

- **URL:** `/users/register`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

## Request body (JSON)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123"
}
```

Required fields and validation rules:

- `fullname.firstname` (string) — **required**, minimum **3** characters ✅
- `fullname.lastname` (string) — optional, minimum **3** characters ⚠️
- `email` (string) — **required**, must be a valid email ✅
- `password` (string) — **required**, minimum **6** characters ✅

> Note: Validation is performed with `express-validator` and validation errors are returned with a `400` status.

## Responses

### 201 Created ✅

Success. Returns a JWT token and the created user (password omitted).

Example:

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "64a1ea...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

#### Full HTTP response example (201 Created)

```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8
Content-Length: 245

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64a1ea...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

### 400 Bad Request ⚠️

Validation failed. Returns an `errors` array (format from `express-validator`).

Example:

```json
{
  "errors": [
    { "msg": "Invalid email address", "param": "email", "location": "body" },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

#### Full HTTP response example (400 Bad Request)

```
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8
Content-Length: 212

{
  "errors": [
    { "msg": "Invalid email address", "param": "email", "location": "body" },
    { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname", "location": "body" }
  ]
}
```

### 500 Internal Server Error ⚠️

Server error (e.g., DB error). Example response:

```json
{ "message": "Internal Server Error" }
```

#### Full HTTP response example (500 Internal Server Error)

```
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
Content-Length: 41

{ "message": "Internal Server Error" }
```

## Implementation notes 🔧

- Passwords are hashed before being saved.
- JWTs are signed using `process.env.JWT_SECRET` with a 1 hour expiry.
- The endpoint logs request and processing steps to the server console (useful during development).

## Example cURL

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john@example.com","password":"secret123"}'
```

---

If you want, I can add this to the project README or generate Postman example requests. 👍

---

# POST /users/login 🔑

## Description

Authenticates a user. The endpoint validates the input, verifies the user's credentials, and returns a JWT token and the user (password omitted) on success.

## Endpoint

- **URL:** `/users/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

## Request body (JSON)

Example:

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

Required fields and validation rules:

- `email` (string) — **required**, must be a valid email ✅
- `password` (string) — **required**, minimum **6** characters ✅

> Note: Validation is performed with `express-validator`. Validation errors are returned with a `400` status and an `errors` array.

## Responses

### 200 OK ✅

Success. Returns a `message`, a JWT `token`, and the authenticated `user` (password omitted).

Example:

```json
{
  "message": "Login successful",
  "token": "<jwt_token>",
  "user": {
    "_id": "64a1ea...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

#### Full HTTP response example (200 OK)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 245

{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64a1ea...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

### 400 Bad Request ⚠️

Validation failed. Returns an `errors` array (format from `express-validator`).

Example:

```json
{
  "errors": [
    { "msg": "Invalid email address", "param": "email", "location": "body" },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### 401 Unauthorized ⚠️

Invalid credentials (incorrect password). Example response:

```json
{ "message": "Invalid credentials" }
```

### 404 Not Found ⚠️

User with the provided email was not found. Example response:

```json
{ "message": "User not found" }
```

### 500 Internal Server Error ⚠️

Server error (e.g., DB error). Example response:

```json
{ "message": "Server error" }
```

## Implementation notes 🔧

- Passwords are compared using the model's `comparePassword` method (bcrypt) rather than re-hashing and comparing.
- JWTs are signed using `process.env.JWT_SECRET` with a 1-hour expiry (consistent with registration).
- Successful response includes `message`, `token`, and `user` (password omitted).
- Validation is handled with `express-validator` in the route and verified in the controller using `validationResult`.
- The controller logs useful information to the server console for debugging.

## Example cURL

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"secret123"}'
```

---

If you'd like, I can add Postman examples or extract these docs into a dedicated API docs file. 👍

---

# GET /users/profile 👤

## Description

Returns the authenticated user's profile. Requires a valid JWT in the `Authorization` header.

## Endpoint

- **URL:** `/users/profile`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

## Responses

### 200 OK ✅

Success. Returns `message` and the `user` object.

Example:

```json
{
  "message": "Profile fetched successfully",
  "user": {
    "_id": "64a1ea...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

### 401 Unauthorized ⚠️

Missing or invalid token. Example response:

```json
{ "message": "Not authorized" }
```

### 500 Internal Server Error ⚠️

Server error. Example response:

```json
{ "message": "Server error" }
```

## Implementation notes 🔧

- Endpoint uses `authUser` middleware which extracts and verifies the JWT and attaches the user to `req.user`.
- The `Authorization` header must be set to `Bearer <token>`.

## Example cURL

```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

---

If you'd like, I can also add this to the `Backend/docs` folder as a standalone file or create Postman examples. 👍

---

# POST /users/logout 🚪

## Description

Logs out the authenticated user. For JWT-based auth this is handled client-side by removing the token; the endpoint returns a confirmation message. Requires a valid JWT in the `Authorization` header.

## Endpoint

- **URL:** `/users/logout`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <token>`

## Responses

### 200 OK ✅

Success. Returns a confirmation message.

Example:

```json
{
  "message": "Logout successful"
}
```

### 401 Unauthorized ⚠️

Missing or invalid token. Example response:

```json
{ "message": "Unauthorized" }
```

### 500 Internal Server Error ⚠️

Server error. Example response:

```json
{ "message": "Server error" }
```

## Implementation notes 🔧

- Because JWTs are stateless, the server does not invalidate tokens — the client should delete stored tokens to complete logout.
- Endpoint is protected by `authUser` middleware which verifies the token.

## Example cURL

```bash
curl -X POST http://localhost:3000/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

---

If you'd like, I can also add this to the `Backend/docs` folder as a standalone file or create Postman examples. 👍

---

# POST /captains/register 🚘

## Description

Registers a new captain (driver). The endpoint validates the input, hashes the password, saves the captain to the database, and returns a JWT token along with the created captain (password is not returned).

## Endpoint

- **URL:** `/captains/register`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

## Request body (JSON)

Example:

```json
{
  "fullname": { "firstname": "Jane", "lastname": "Doe" },
  "email": "jane@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "red",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

Required fields and validation rules:

- `fullname.firstname` (string) — **required**, minimum **3** characters ✅
- `fullname.lastname` (string) — optional, minimum **3** characters ⚠️
- `email` (string) — **required**, must be a valid email ✅
- `password` (string) — **required**, minimum **6** characters ✅
- `vehicle.color` (string) — **required**, minimum **3** characters ✅
- `vehicle.plate` (string) — **required**, minimum **3** characters ✅
- `vehicle.capacity` (number) — **required**, minimum **1** ✅
- `vehicle.vehicleType` (string) — **required**, must be one of `car`, `motorcycle`, `auto` ✅

> Note: Validation is performed with `express-validator` and validation errors are returned with a `400` status.

## Responses

### 201 Created ✅

Success. Returns a JWT token and the created captain (password omitted).

Example:

```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "64b2ea...",
    "fullname": { "firstname": "Jane", "lastname": "Doe" },
    "email": "jane@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "status": "unavailable"
  }
}
```

### 400 Bad Request ⚠️

Validation failed or email already exists. Returns an `errors` array or a message.

Example (validation errors):

```json
{
  "errors": [
    {
      "msg": "Firstname required",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

Example (duplicate email):

```json
{ "message": "Email already exists" }
```

### 500 Internal Server Error ⚠️

Server error (e.g., DB error). Example response:

```json
{ "message": "Server error" }
```

## Implementation notes 🔧

- Passwords are hashed before being saved using `Captain.hashPassword`.
- JWTs are signed using `process.env.JWT_SECRET` with a 1-hour expiry and returned on successful registration.
- Validation is handled with `express-validator` in the route and verified in the controller using `validationResult`.

## Example cURL

```bash
curl -X POST http://localhost:3000/captains/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Jane","lastname":"Doe"},"email":"jane@example.com","password":"secret123","vehicle":{"color":"red","plate":"ABC-123","capacity":4,"vehicleType":"car"}}'
```

---

If you'd like, I can also extract these captain docs into a new `Backend/docs/captains-register.md` file or generate Postman examples. 👍

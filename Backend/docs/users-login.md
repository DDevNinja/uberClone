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

If you'd like, I can add this to the project README or generate Postman example requests. 👍

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

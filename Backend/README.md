
# Users API Documentation

## Endpoint: `/users/register`

This endpoint allows users to register by providing their details. It validates the input, hashes the password for security, and creates a new user in the database.

---

### **Method**: POST

---

### **Request Body** (JSON):
The following fields are required to register a user:

```json
{
  "fullname": {
    "firstname": "string, required, min 3 characters",
    "lastname": "string, optional, min 3 characters"
  },
  "email": "string, required, valid email format",
  "password": "string, required, min 6 characters"
}
```

---

### **Response**:

#### **Success Response**:
**Status Code**: `201 Created`

**Example**:
```json
{
  "token": "string (JWT authentication token)",
  "user": {
    "_id": "string (User's unique ID)",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

---

#### **Error Responses**:

1. **Validation Errors**:
   **Status Code**: `400 Bad Request`

   **Example**:
   ```json
   {
     "errors": [
       {
         "msg": "Invalid Email",
         "param": "email",
         "location": "body"
       }
     ]
   }
   ```

2. **Missing Required Fields**:
   **Status Code**: `400 Bad Request`

   **Example**:
   ```json
   {
     "error": "All fields are required"
   }
   ```

---

### **Validation Rules**:

- **`fullname.firstname`**:
  - Must be at least 3 characters long.
  - Cannot be empty.

- **`fullname.lastname`**:
  - Must be at least 3 characters long.
  - Optional.

- **`email`**:
  - Must be a valid email format.
  - Cannot be empty.
  - Must be unique.

- **`password`**:
  - Must be at least 6 characters long.
  - Cannot be empty.

---

### **Usage Example**:

#### Request:
```bash
POST /users/register HTTP/1.1
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "63bf54e72f1d3c1e88a528e6",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### **Notes**:

- Ensure the password is at least 6 characters long for security purposes.
- The `token` is valid for 1 hour and should be included in the `Authorization` header for protected routes.
- Provide a valid and unique email for successful registration.

--- 

### **Dependencies**:
- **bcrypt**: For hashing passwords.
- **jsonwebtoken**: For generating and managing tokens.
- **express-validator**: For validating user input.


# Backend API Documentation

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

## Endpoint: `/users/login`

This endpoint allows users to log in by validating their email and password. Upon successful authentication, it returns a JWT token and user details.

---

### **Method**: POST

---

### **Request Body** (JSON):
The following fields are required to log in:

```json
{
  "email": "string, required, valid email format",
  "password": "string, required, min 6 characters"
}
```

---

### **Response**:

#### **Success Response**:
**Status Code**: `200 OK`

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

2. **Invalid Credentials**:
   **Status Code**: `401 Unauthorized`

   **Example**:
   ```json
   {
     "message": "Invalid Email or password"
   }
   ```

---

### **Validation Rules**:

- **`email`**:
  - Must be a valid email format.
  - Cannot be empty.

- **`password`**:
  - Must be at least 6 characters long.
  - Cannot be empty.

---

### **Usage Example**:

#### Request:
```bash
POST /users/login HTTP/1.1
Content-Type: application/json

{
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

## Endpoint: `/users/logout`

This endpoint logs out an authenticated user by clearing the token and blacklisting it.

---

### **Method**: GET

---

### **Headers**:
- **Authorization**: `Bearer <token>` (or provide the token in a cookie named `token`).

---

### **Response**:

#### **Success Response**:
**Status Code**: `200 OK`

**Example**:
```json
{
  "message": "Logged Out"
}
```

---

## Endpoint: `/captain/register`

This endpoint allows captains to register by providing their details, including vehicle information. It validates the input, hashes the password, and creates a new captain in the database.

---

### **Method**: POST

---

### **Request Body** (JSON):
The following fields are required to register a captain:

```json
{
  "fullname": {
    "firstname": "string, required, min 3 characters",
    "lastname": "string, optional, min 3 characters"
  },
  "email": "string, required, valid email format",
  "password": "string, required, min 6 characters",
  "vehicle": {
    "color": "string, required, min 3 characters",
    "plate": "string, required, min 3 characters",
    "capacity": "number, required, min 1",
    "vehicleType": "string, required, enum ['car', 'motocycle', 'auto']"
  }
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
  "captain": {
    "_id": "string (Captain's unique ID)",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
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

- **`vehicle.color`**:
  - Must be at least 3 characters long.

- **`vehicle.plate`**:
  - Must be at least 3 characters long.

- **`vehicle.capacity`**:
  - Must be at least 1.

- **`vehicle.vehicleType`**:
  - Must be one of: `car`, `motocycle`, `auto`.

---

### **Usage Example**:

#### Request:
```bash
POST /captain/register HTTP/1.1
Content-Type: application/json

{
    "fullname":{
        "firstname":"Abhijeet",
        "lastname":"kumar"
    },
    "email":"abhijeet889@final.com",
    "password":"password108_test",
    "vehicle":{
        "color":"red",
        "plate":"BR 08N 5000",
        "capacity":"4",
        "vehicleType":"car"
    }
}
```

#### Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU0OTczMjBkNmZiM2RlODA5NTM3OTQiLCJpYXQiOjE3MzM1OTY5NzgsImV4cCI6MTczMzY4MzM3OH0.Oot7B7RL1v98chZx003xbTBdDiE4j4WsxvgS7IQmHpw",
    "captain": {
        "fullname": {
            "firstname": "Abhijeet",
            "lastname": "kumar"
        },
        "email": "abhijeet889@final.com",
        "password": "$2b$10$IGYTmj9FgjmqzbaZjkC7IeZlYmHSbDNl61tEEOPOpDBHpQrZ1WCfO",
        "status": "inactive",
        "vehicle": {
            "color": "red",
            "plate": "BR 08N 5000",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "675497320d6fb3de80953794",
        "__v": 0
    }
}
```



### **Dependencies**:
- **`blacklistToken.model.js`**: Handles token blacklisting with expiry set to 24 hours.


### **Notes**:

- Ensure the provided email and password match an existing user's credentials.
- The `token` is valid for 1 hour and should be included in the `Authorization` header for protected routes.


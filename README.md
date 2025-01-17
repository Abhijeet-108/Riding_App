# Ride App Documentation

This documentation provides a comprehensive guide for the frontend and backend development of a ride-sharing app using the MERN stack (MongoDB, Express.js, React.js, Node.js). Follow the steps below to set up, develop, and run the application.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or above)
- MongoDB (latest version)
- Git
- A code editor (e.g., VS Code)

## Project Structure

The project is divided into two main directories:

1. **Frontend**: Built using React.js to create a dynamic user interface.
2. **Backend**: Built using Node.js, Express.js, and MongoDB to handle server-side operations and database management.

### Folder Layout
```
project-root/
  |-- backend/
  |   |-- models/
  |   |-- routes/
  |   |-- controllers/
  |   |-- config/
  |   |-- server.js
  |
  |-- frontend/
  |   |-- src/
  |       |-- components/
  |       |-- pages/
  |       |-- App.js
  |       |-- index.js
  |   |-- public/
  |
  |-- README.md
  |-- package.json
```

## Backend Setup

### Step 1: Install Dependencies
Navigate to the `backend/` directory and install the required packages:
```bash
cd backend
npm install express mongoose dotenv cors body-parser
```

### Step 2: Create Environment Variables
Create a `.env` file in the `backend/` directory and add the following:
```
PORT=4000
DB_CONNECT=mongodb://0.0.0.0/uber-clone
JWT_SECRET=user-clone-secret
```

### Step 3: Start the Server
Run the following command to start the backend server:
```bash
npx nodemon
```
The server should now be running on `http://localhost:4000`.

## Frontend Setup

### Step 1: Install Dependencies
Navigate to the `frontend/` directory and install the required packages:
```bash
cd frontend
npm install react-router-dom axios
```

### Step 2: Start the Frontend
Run the following command to start the React development server:
```bash
npm run dev
```
The app should now be running on `http://localhost:3000`.

## API Endpoints

### User Routes
| Endpoint         | Method | Description             |
|------------------|--------|-------------------------|
| `/users/register`| POST   | Register a new user     |
| `/users/login`   | POST   | User login              |
| `/users/profile` | GET    | Fetch user profile      |

### Ride Routes
| Endpoint              | Method | Description                   |
|-----------------------|--------|-------------------------------|
| `captains/profile`    | GET    | Fetch Captain profile         |
| `/captains/register`  | POST   | Create a new ride             |

## Features

### Backend
- User Authentication with JWT
- CRUD operations for rides
- MongoDB database integration

### Frontend
- User registration and login forms
- Ride search and booking functionality
- Responsive design

## Development Tips

- Use `nodemon` for automatic server restarts during development.
- Use Redux or Context API for state management if the app grows.
- Test your API endpoints using Postman or similar tools.

## Deployment

### Backend
1. Use a cloud service like Heroku or AWS.
2. Configure the `MONGO_URI` and other environment variables in the deployment platform.

### Frontend
1. Build the React app using:
   ```bash
   npm run build
   ```




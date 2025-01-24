# phone-shop



---

# Project Name

## Description
A brief description of the project goes here. This project is built using React for the frontend and Node.js for the backend, with MongoDB as the database.

---

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install dependencies
#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

---

## Setup

### 1. Create an `.env` file in the `backend` directory
Add the following environment variables:
```
FRONTEND_URL = http://localhost:3000
MONGO_URI=mongodb://localhost:27017/<your-database-name>
JWT_SECRET=<your-secret-key>
```

### 2. Start MongoDB
Ensure MongoDB is running on your local machine.

---

## Running the Application

### Backend
To start the backend server, run:
```bash
npm run dev
```
The backend will run on `http://localhost:8080` by default.

### Frontend
To start the frontend, run:
```bash
npm start
```
The frontend will run on `http://localhost:3000` by default.

---






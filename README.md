# 🚀 User API Project

A complete RESTful API built using Node.js, Express, and MongoDB with JWT authentication and file upload functionality.

---

## 📌 Features

- 🔐 User Authentication (Register & Login)
- 🔑 JWT-based Authorization
- 👤 Get Logged-in User Profile (Protected Route)
- 👥 User Management (CRUD Operations)
- 📤 Upload Profile Image using Multer
- 🗄️ MongoDB Database Integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Multer
- bcryptjs

---

## 📁 Project Structure
```
user-api-project/
│
├── controllers/
│ ├── authController.js
│ └── userController.js
│
├── middleware/
│ ├── authMiddleware.js
│ └── uploadMiddleware.js
│
├── models/
│ └── User.js
│
├── routes/
│ ├── authRoutes.js
│ └── userRoutes.js
│
├── uploads/
│
├── server.js
├── package.json
└── .env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/khushi375/user-api-project.git
cd user-api-project

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run Server
npm run dev

```
🌐 Base URL
http://localhost:5000


```
```
📡 API Endpoints
🔐 Authentication APIs
Method	Endpoint	Description
```
1. POST	/api/auth/register	Register User
   
2. POST	/api/auth/login	Login User (returns JWT)

3. GET	/api/auth/me	Get Logged-in User (Protected)
```
👥 User Management APIs
Method	Endpoint	Description
```
4. GET	/api/users	Get All Users
   
5. GET	/api/users/:id	Get User by ID
   
6. PUT	/api/users/:id	Update User
   
7. DELETE	/api/users/:id	Delete User
```
📤 File Upload API
Method	Endpoint	Description
```
8. POST	/api/users/upload-profile	Upload Profile Image
```
🔑 Authentication
For protected routes, add header:
```
  Authorization: Bearer YOUR_TOKEN
```


👩‍💻 Author

Khushi Jain

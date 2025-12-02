# MERN Stack Project — Places Sharing App

A full-stack MERN application.  
This project allows users to authenticate, create places, upload images, and view locations.

🚀 Tech Stack

### **Frontend**
- React.js  
- React Router  
- Custom Hooks  
- Context API  
- CSS Modules  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Atlas)  
- Mongoose  
- REST API  
- Multer (image upload)  
- JWT Authentication  

---

## 📁 Project Structure
root-folder/

├── backend/ # Node + Express API

├── frontend/ # React App

└── README.md

---

## ⭐ Features

### **User Authentication**
- Signup & Login  
- JWT-based auth  
- Protected routes  

### **Places Management**
- Create a place  
- Edit a place  
- Delete a place  
- Upload image  
- View places by user  

### **Map Integration (Dummy Placeholder)**
- Mapbox / Google Maps alternative using placeholder div (no API keys required)

---

## 🔧 Installation & Setup

### **1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/mern-project.git
cd mern-project
```
### **2. Backend Setup**
```bash
cd backend
npm install
```
Create a .env file inside backend:
```
MONGODB_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret
PORT=5000
```
Run backend:
```
npm start
```

### **3. Frontend Setup**
```
cd ../frontend
npm install
npm start
```
### **🌐 Running the App**

Backend → http://localhost:5000

Frontend → http://localhost:3000

Both should run simultaneously


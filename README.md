# 🏥 ProHealth - Hospital Management System
## 🎥 Project Demo Video

<small>You can watch the demo of my project here:</small>  
🔗 <small>https://drive.google.com/file/d/15a-udnEeunDZc4AnFsWnh5CUp3Eop02A/view?usp=sharing</small>


## 📖 Overview

**ProHealth** is an advanced **Hospital Management System** developed using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack.  
It aims to simplify healthcare administration by digitizing hospital operations such as appointment booking, medical record management, and doctor-patient interactions.  

The platform provides a **secure, scalable, and intuitive environment** for managing hospital workflows efficiently and improving overall patient care.

---

## 🚀 Key Features

- **Secure User Authentication** – Role-based login for patients, doctors, and administrators using JWT.  
- **Smart Appointment Management** – Schedule, reschedule, or cancel appointments with ease.  
- **Patient Health Records** – Maintain detailed digital health records accessible anytime.    
- **Admin Control Panel** – Manage users, appointments, and analyze hospital data from one dashboard.  
- **Data Security & Privacy** – Built with MongoDB to ensure sensitive data remains encrypted and secure.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Tokens) |

---

## ⚙️ Getting Started

Follow the steps below to set up **ProHealth** on your local machine.

---

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

---

### 🧭 Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/mehakmehta6789/ProHealth.git
cd ProHealth
```

### 2. Install Dependencies

#### Backend:
```bash
cd Backend
npm install

```

#### Admin Panel:
```bash
cd admin
npm install

```

#### Frontend Panel:
```bash
cd frontend
npm install


```

### 3. Set Up Environment Variables

#### Inside the backend directory, create a .env file and add:
```bash
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=<your-admin-password>
JWT_SECRET=<your-jwt-secret>

```

### 4. Run the Application

#### Start the Server:
```bash
cd Backend
npm run dev

```

#### Start the Admin Panel:
```bash
cd admin
npm run dev

```

#### Start the Frontend Panel:
```bash
cd frontend
npm run dev

```

# 🩸 **Blood Donation Management System**

A full-stack **Blood Donation Management Website** built using **Node.js, Express, MySQL, and JWT Authentication**.
This system allows users to register, become donors, search donors by blood group, and create blood requests.


## 🚀 Features

1. User Registration with password hashing
2. User Login with JWT authentication
3. Add yourself as a blood donor (protected route)
4. View all available donors (public)
5. Search donors by blood group
6. Create blood request (public)
7. Relational database design with foreign keys
8. Proper error handling and middleware protection



## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Authentication:** JSON Web Token (JWT)
* **Security:** bcrypt
* **Environment Config:** dotenv


## 📂 Project Structure

Blood-Donation-Website/
 ├── backend/
 │    ├── routes/
 │    │    ├── authRoutes.js
 │    │    ├── donorRoutes.js
 │    │    └── requestRoutes.js
 │    ├── middleware/
 │    │    └── authMiddleware.js
 │    ├── db.js
 │    ├── server.js
 │    ├── setup.sql
 │    ├── .env            (not pushed to GitHub)
 │    └── .gitignore
 └── README.md


## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/Lobaina-Ehsan/blood-donation.git
cd blood-donation


### 2️⃣ Database Setup

Open MySQL and run:

mysql -u root -p < setup.sql

This will create:

* `users` table
* `donors` table
* `requests` table



### 3️⃣ Configure Environment Variables

Create a file inside `backend/` named `.env`

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=blood_donation
JWT_SECRET=supersecretkey
PORT=5000
```


### 4️⃣ Install Dependencies & Run Server

cd backend
npm install
node server.js

You should see:

MySQL Connected
Server running on port 5000



## 🔗 API Endpoints

| Method | Endpoint                            | Description                      |
| ------ | ----------------------------------- | -------------------------------- |
| POST   | `/api/auth/register`                | Register new user                |
| POST   | `/api/auth/login`                   | Login user                       |
| POST   | `/api/donors/add`                   | Add donor profile (JWT required) |
| GET    | `/api/donors`                       | View all donors                  |
| GET    | `/api/donors/search?blood_group=A+` | Search donors                    |
| POST   | `/api/requests`                     | Create blood request             |



## 🔐 Authentication Flow

* User logs in → receives JWT token
* Token must be sent in headers to add donor:


## 🎯 Purpose of the Project

This project demonstrates:

* REST API design
* JWT based authentication
* Relational database with foreign keys
* Middleware usage
* Secure password storage
* Clean project structure

Suitable for **academic project, viva, and portfolio**.


## 👨‍💻 Author

Name: Lobaina Ehsan
Email: lobaina401@gmail.com


## 📜 License

This project is for educational purposes.


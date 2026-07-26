# 🏡 WanderLust - Property Rental Platform

> **A full-stack Airbnb-inspired property rental platform built with Node.js, Express.js, MongoDB, and EJS.**

WanderLust is a modern property rental web application that enables users to discover, create, update, and manage rental listings. The platform features secure authentication, image uploads, interactive maps, reviews & ratings, and a responsive user interface, providing a seamless booking and property management experience.

---

## 🚀 Features

### 👤 User Authentication

* Secure User Registration & Login
* Passport.js Authentication
* Session Management
* Flash Messages

### 🏠 Property Management

* Create Property Listings
* View All Listings
* Update Existing Listings
* Delete Listings
* Upload Property Images

### 🔍 Search Functionality

Search listings by:

* Property Title
* Location
* Country
* Description

### ⭐ Reviews & Ratings

* Add Reviews
* Delete Reviews
* Rating System

### 🗺️ Maps Integration

* Interactive Maps using Mapbox
* Property Location Display

### ☁️ Cloud Storage

* Cloudinary Image Upload
* Secure Image Storage

### 🛡️ Security & Validation

* Route Protection
* Authorization Middleware
* Client-side Validation
* Server-side Validation (Joi)
* Error Handling

### 🏗️ Architecture

* MVC Architecture
* RESTful Routing
* Responsive Bootstrap UI

---

# 🛠️ Tech Stack

| Category              | Technologies                                    |
| --------------------- | ----------------------------------------------- |
| **Frontend**          | HTML5, CSS3, Bootstrap 5, EJS, JavaScript (ES6) |
| **Backend**           | Node.js, Express.js                             |
| **Database**          | MongoDB, Mongoose                               |
| **Authentication**    | Passport.js, Express Session, Connect Flash     |
| **Cloud Services**    | Cloudinary, Mapbox                              |
| **Development Tools** | Git, GitHub, VS Code                            |

---

# 📂 Project Structure

```text
WanderLust/
│
├── controllers/
├── models/
├── routes/
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── utils/
├── middleware.js
├── cloudConfig.js
├── schema.js
├── app.js
├── package.json
└── .env
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Krishnapal-Chouhan/WanderLust-Property-Rental-Platform-.git
```

## 2️⃣ Navigate to Project

```bash
cd WanderLust-Property-Rental-Platform-
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Configure Environment Variables

Create a `.env` file and add the following:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

MAPBOX_TOKEN=your_mapbox_token

ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret
```

## 5️⃣ Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

The application will run on:

```text
http://localhost:8080
```

---

# 📸 Project Screenshots

## 🏠 Home Page

<img width="1191" alt="Home Page" src="https://github.com/user-attachments/assets/b074dee0-032b-4d32-b7fb-ffb82fa65891" />

---

## 📄 Listing Details

<img width="1870" alt="Listing Details" src="https://github.com/user-attachments/assets/48c64787-fc89-4035-a0a6-02642b464290" />

---

## 🔍 Search Functionality

Search listings instantly by title, location, country, or description.

<img width="1163" alt="Search Feature" src="https://github.com/user-attachments/assets/3476eee7-0c48-4b7a-8f97-9b5bf0a60e4d" />

---

## ➕ Add Listing

<img width="1332" alt="Add Listing" src="https://github.com/user-attachments/assets/e6769250-5dc5-409c-ae2b-76487a33ba35" />

---

## ✏️ Edit Listing

<img width="1801" alt="Edit Listing" src="https://github.com/user-attachments/assets/590dabc8-1b81-4870-a26f-cfc15c516e8f" />

---

## ⭐ Review System

<img width="1910" alt="Reviews" src="https://github.com/user-attachments/assets/b4aac8a6-7a96-43f3-9716-99e8a398b6a2" />

---

## 🗺️ Map Integration

<img width="989" alt="Map Feature" src="https://github.com/user-attachments/assets/dc96f06d-0bf6-40b2-a0c8-dd1a3abfac48" />

---

## 🔐 Login Page

<img width="1900" alt="Login Page" src="https://github.com/user-attachments/assets/695602f0-95af-4765-adba-e41d56c841d4" />

---

## 📝 Signup Page

<img width="1904" alt="Signup Page" src="https://github.com/user-attachments/assets/034035ec-58b3-4b2c-b85d-eb687492fa87" />

---

## ✅ Client-side Validation

<img width="1813" alt="Client Validation" src="https://github.com/user-attachments/assets/31218af6-0ba9-49de-a278-fe80c5638f2e" />

---

## 🛡️ Server-side Validation

<img width="1837" alt="Server Validation" src="https://github.com/user-attachments/assets/6c5f5f2d-3f86-4bb5-9940-9f795325f115" />

---

## 📌 Footer

<img width="938" alt="Footer" src="https://github.com/user-attachments/assets/f69bef4a-891c-4df8-b767-45ca9c642f78" />

---

# 🎯 Key Learning Outcomes

* Full Stack Web Development using Node.js & Express.js
* Authentication & Authorization with Passport.js
* MongoDB Database Design & Relationships
* RESTful API Development
* MVC Architecture Implementation
* Cloudinary Image Upload & Management
* Interactive Maps using Mapbox
* Search using MongoDB Regular Expressions (`$regex`)
* Client-side & Server-side Validation
* Session Management & Flash Messages
* Responsive UI Design using Bootstrap

---

# 🚀 Future Enhancements

* ❤️ Wishlist Feature
* 📅 Booking System
* 💳 Online Payments (Stripe/Razorpay)
* 👤 User Dashboard
* 🏷️ Property Categories & Filters
* 🔔 Email Notifications
* 🌙 Dark Mode
* 📊 Admin Dashboard

---

# 👨‍💻 Author

**Krishnapal Chouhan**

* **GitHub:** https://github.com/Krishnapal-Chouhan
* **LinkedIn:** https://linkedin.com/in/krishnapalchouhan

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. Your support motivates future improvements and helps others discover the project.

---

# 📄 License

This project is developed for **learning, educational, and portfolio purposes**.

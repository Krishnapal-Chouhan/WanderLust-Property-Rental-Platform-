# WanderLust - Property Rental Platform

WanderLust is a full-stack Airbnb-inspired property rental platform that allows users to explore, create, update, and manage property listings. The application provides secure authentication, image uploads, interactive maps, and review management for a seamless booking experience.

## 🚀 Features

* User Authentication & Authorization
* Create, Read, Update, and Delete (CRUD) Listings
* Property Reviews and Ratings
* Secure Route Protection using Middleware
* Image Upload & Storage with Cloudinary
* Interactive Location Maps using Mapbox
* Session Management & Flash Messages
* RESTful Routing
* MVC Architecture
* Server-side Validation & Error Handling

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* Passport.js
* Express Session
* Connect Flash

### Third-Party Services

* Cloudinary
* Mapbox

### Development Tools

* Git
* GitHub
* VS Code

## 📂 Project Structure

```bash
WanderLust/
│
├── models/
├── routes/
├── views/
│   ├── layouts/
│   ├── listings/
│   └── includes/
├── public/
│   ├── css/
│   └── javascript/
├── utils/
├── app.js
├── schema.js
└── package.json
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Krishnapal-Chouhan/WanderLust-Property-Rental-Platform-.git
```

### Navigate to Project

```bash
cd WanderLust-Property-Rental-Platform-
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

MAPBOX_TOKEN=your_mapbox_token

ATLASDB_URL=your_mongodb_connection_string

SECRET=session_secret
```

### Run Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

## 🎯 Key Learning Outcomes

* Building scalable backend applications using Express.js
* Implementing Authentication & Authorization
* Designing RESTful APIs
* Working with MongoDB Relationships
* Integrating third-party APIs (Mapbox & Cloudinary)
* Applying MVC Architecture for maintainable code

## 📸 Screenshots

Add screenshots of:

* Home Page
<img width="887" height="968" alt="image" src="https://github.com/user-attachments/assets/335ed2b8-94ec-446b-94f8-2436a94119f9" />

* Listing Details Page
* <img width="902" height="966" alt="image" src="https://github.com/user-attachments/assets/01615565-6e06-4da0-8895-494901a9de38" />

* Add Listing Form
* <img width="911" height="963" alt="image" src="https://github.com/user-attachments/assets/fa9bddec-770c-4bb2-be9f-06a1cc183f44" />

* Edit Page
* <img width="914" height="962" alt="image" src="https://github.com/user-attachments/assets/83b767b3-e8b8-4e44-9f86-8a823984462b" />

*Review Feature
<img width="901" height="981" alt="image" src="https://github.com/user-attachments/assets/0c61649e-1d53-463f-a657-b8eb495b7942" />


## 👨‍💻 Author

Krishnapal Chouhan

* GitHub: https://github.com/Krishnapal-Chouhan
* LinkedIn: https://linkedin.com/in/krishnapalchouhan

## 📄 License

This project is developed for learning and educational purposes.

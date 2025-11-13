# HomeNest – Server (Backend)

## Live API Endpoint

https://homenest-server-nine.vercel.app/

## GitHub Repository

https://github.com/engsanjid/homeNest-server-side

## About This Server

This backend server powers the HomeNest Real Estate Platform, providing secure APIs for managing property listings.
The server handles:

Property creation

Updating and deleting listings

Fetching properties with filtering, sorting & search

JWT/authentication verification

MongoDB database operations

It is optimized for fast performance, secure requests, and scalable integration with the client-side app.

## Features

🏠 CRUD Operations for properties

🔍 Search, Sort & Filter (MongoDB-based queries)

🔐 JWT Authentication (optional setup)

🌐 CORS Enabled

⚡ Express.js REST API

📦 MongoDB + Mongoose

🛡️ Error handling & API response structure

## Tech Stack

Node.js

Express.js

MongoDB

Mongoose

CORS

Dotenv

## Folder Structure
```
homeNest-server-side/
│── config/
│   └── db.js
│── routes/
│   └── propertyRoutes.js
│── controllers/
│   └── propertyController.js
│── models/
│   └── Property.js
│── .env
│── index.js
│── package.json
│── README.md
```
## How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/engsanjid/homeNest-server-side.git

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Add your own credentials:

PORT=5000
MONGO_URI=your_mongodb_url_here

4️⃣ Start the server
npm start


Server will run on:

http://localhost:5000

## API Endpoints
➤ Get all properties
GET /properties

➤ Get single property by ID
GET /properties/:id

➤ Add new property
POST /properties

➤ Update property
PUT /properties/:id

➤ Delete property
DELETE /properties/:id

## Author

Name: Md Sanjid Islam
Email: mdsanjidi36@gmail.com
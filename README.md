# 🏨 Hotel Management API

A RESTful API built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose** for managing hotel data. This API allows users to create, retrieve, update, and delete hotel records stored in a MongoDB database.

---

### 🌐 Live APP

https://bi-1-3-hw-2-be.vercel.app/

---

## 🔗 Repository

### Backend Repository

https://github.com/Rajeev-2100/BI1.3_HW2_BE.git

---

## 🚀 Features

* Add a new hotel
* Get all hotels
* Get hotel details by name
* Get hotels by category
* Get hotels by rating
* Get hotel details by phone number
* Update hotel details by ID
* Delete hotel by ID
* MongoDB Atlas integration
* CORS enabled for frontend applications

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* cors

---

## 📂 Project Structure

```bash
├── db
│   └── db.connect.js
├── models
│   └── hotel.model.js
├── .env
├── index.js
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Rajeev-2100/BI1.3_HW2_BE.git
cd BI1.3_HW2_BE
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_connection_string
```

### 4. Run the Server

```bash
node index.js
```

Server runs on:

```bash
http://localhost:3000
```
 ---

## 📖 Hotel Schema

| Field                 | Type    |
| --------------------- | ------- |
| name                  | [String]  |
| category              | [String]   |
| location              | [String]   |
| rating                | Number  |
| reviews               | [String]   |
| website               | String  |
| phoneNumber           | String  |
| checkInTime           | String  |
| checkOutTime          | String  |
| amenities             | [String]   |
| priceRange            | String  |
| reservationsNeeded    | Boolean |
| isParkingAvailable    | Boolean |
| isWifiAvailable       | Boolean |
| isPoolAvailable       | Boolean |
| isSpaAvailable        | Boolean |
| isRestaurantAvailable | Boolean |
| photos                | [String]   |

---

## 📌 API Endpoints

### Create Hotel

**POST /hotels**

Creates a new hotel record.

### Get All Hotels

**GET /hotels**

Returns all hotels.

### Get Hotel By Name

**GET /hotels/:hotelName**

Example:

```http
GET /hotels/Taj Palace
```

### Get Hotels By Category

**GET /hotels/category/:hotelCategory**

Example:

```http
GET /hotels/category/Luxury
```

### Get Hotels By Rating

**GET /hotels/rating/:hotelRating**

Example:

```http
GET /hotels/rating/5
```

### Get Hotel By Phone Number

**GET /hotels/directory/:phoneNumber**

Example:

```http
GET /hotels/directory/9876543210
```

### Update Hotel

**PUT /hotels/:hotelId**

Updates hotel details by ID.

### Delete Hotel

**DELETE /hotels/:hotelId**

Deletes a hotel by ID.

---

## 🧪 Example Request

```json
{
  "name": "Grand Palace Hotel",
  "category": ["Luxury"],
  "location": ["Mumbai"],
  "rating": 4.8,
  "phoneNumber": "9876543210"
}
```

### Example Response

```json
{
  "message": "Hotel created successfully",
  "data": {
    "name": "Grand Palace Hotel"
  }
}
```

---

## 🔮 Future Improvements

* Pagination
* Sorting and filtering
* Search by location
* Authentication & Authorization
* Input validation using Joi
* Swagger API Documentation
* Unit and Integration Testing

---

## 👨‍💻 Author

**Rajeev Rawat**

Aspiring Full Stack Developer passionate about building scalable backend applications with Node.js, Express.js, MongoDB, and JavaScript.

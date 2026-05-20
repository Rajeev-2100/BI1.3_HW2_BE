# Hotel Management API

A RESTful Hotel Management API built using Node.js, Express.js, and MongoDB.  
This project allows users to create, read, update, and delete hotel information while managing hotel details such as amenities, ratings, location, pricing, contact information, and more.

---

## Features

### Create Hotel
- Add a new hotel to the database
- Store hotel details such as:
  - Hotel Name
  - Category
  - Location
  - Rating
  - Reviews
  - Website
  - Phone Number
  - Check-In / Check-Out Time
  - Amenities
  - Price Range
  - Parking Availability
  - WiFi Availability
  - Pool Availability
  - Spa Availability
  - Restaurant Availability
  - Photos

### Read Hotel Data
- Fetch all hotel details
- Fetch hotel details by:
  - Hotel Name
  - Rating
  - Phone Number

### Update Hotel
- Update hotel details using Hotel ID

### Delete Hotel
- Delete hotel details using Hotel ID

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Deployment

This API is deployed on Vercel.
[Live API URL](bi-1-3-hw-2-be.vercel.app)

---

## Project Structure

```bash

project/
├── db/
│   └── db.connect.js
├── models/
│   └── hotel.model.js
├── .gitignore
├── App.jsx
├── main
├── vercel.json
├── useFetch.js
├── index.js
├── package.json
└── package-lock.json

```

## Base URL

```bash

http://localhost:3000

```

## MongoDB Hotel Schema

```js
const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        enum: ['Budget', 'Mid-Range', 'Luxury', 'Boutique', 'Resort', 'Other'],
        required: true,
    },
    location: {
        type: [String],
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    reviews: {
        type: [String],
        default: []
    },
    website: String,
    phoneNumber: {
        type: String,
        required: true,
    },
    checkInTime: {
        type: String,
        required: true,
    },
    checkOutTime: {
        type: String,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    priceRange: {
        type: String,
        enum: ['$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)', 'Other'],
    },
    reservationsNeeded: {
        type: Boolean,
        default: false,
    },
    isParkingAvailable: {
        type: Boolean,
        default: false,
    },
    isWifiAvailable: {
        type: Boolean,
        default: false,
    },
    isPoolAvailable: {
        type: Boolean,
        default: false,
    },
    isSpaAvailable: {
        type: Boolean,
        default: false,
    },
    isRestaurantAvailable: {
        type: Boolean,
        default: false,
    },
    photos: {
        type: [String],
        default: []
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
```

---

## Database Connection

```js
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log('MongoDB Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
```

---

## Controller Functions

### createNewHotel()
- Creates and stores a new hotel in MongoDB

### readAllDetailOfHotel()
- Fetches all hotel records from the database

### readHotelByName()
- Fetches hotel details using hotel name

### newHotelByHotelName()
- Creates a new hotel using hotel name request

### readHotelByRating()
- Fetches hotels based on rating

### readHotelByPhoneNumber()
- Fetches hotel details using phone number

### updatedHotelDetailByHotelId()
- Updates hotel information using hotel ID

### deletedHotelByHotelId()
- Deletes hotel details using hotel ID

---

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | /hotels | Create New Hotel |
| GET | /hotels | Read All Hotels |
| GET | /hotels/name/:name | Read Hotel By Name |
| GET | /hotels/rating/:rating | Read Hotel By Rating |
| GET | /hotels/phone/:phoneNumber | Read Hotel By Phone Number |
| PUT | /hotels/:hotelId | Update Hotel By Hotel ID |
| DELETE | /hotels/:hotelId | Delete Hotel By Hotel ID |

---

## Quick Start

---

```bash
git clone https://github.com/Rajeev-2100/BI1.3_HW2_BE.git

cd hotel-management-api

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string
```

---

## Run Server

```bash
npm start
```

or

```bash
npm run dev
```

## Deployment

This API is deployed on Vercel.

[Live API URL](https://bi-1-3-hw-2-be.vercel.app)

---

## Example Hotel JSON

```json
{
  "name": "Taj Palace",
  "category": ["Luxury"],
  "location": ["Delhi"],
  "rating": 4.8,
  "reviews": ["Excellent Service"],
  "website": "https://tajhotels.com",
  "phoneNumber": "9876543210",
  "checkInTime": "12:00 PM",
  "checkOutTime": "11:00 AM"
  "amenities": ["WiFi", "Pool", "Spa"],
  "priceRange": "$$$$ (61+)",
  "reservationsNeeded": true,
  "isParkingAvailable": true,
  "isWifiAvailable": true,
  "isPoolAvailable": true,
  "isSpaAvailable": true,
  "isRestaurantAvailable": true,
  "photos": ["image1.jpg"]
}
```

## Example Response

```json
{
  "message": "Hotel created successfully",
  "data": {
    "name": "Taj Palace"
  }
}
```

---

## Contact

For bugs or feature requests, please contact:

📧 rajeevrawat210@gmail.com

---

⭐ If you enjoyed this project, don't forget to star the repository and share it.

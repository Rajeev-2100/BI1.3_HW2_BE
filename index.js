const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const Hotel = require("./models/hotel.model.js");

app.use(express.json())

initializeDatabase();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};


app.use(cors(corsOptions));

async function createHotel (newHotel){
    try{
        const hotel = new Hotel(newHotel)
        const saveHotel = await hotel.save()
        return saveHotel
    }catch(error){
        throw error
    }
}

app.post('/', async (req,res) => {
  try {
    const savedHotel = await createHotel(req.body)
    res.send(201).json({message: 'New Hotel added Successfully', hotel: savedHotel})
  } catch (error) {
    res.send(500).json({error: 'Failed to hotel Details'})
  }
})



async function readAllDetailOfHotel() {
  try {
    const hotel = await Hotel.find();
    return hotel;
  } catch (error) {
    throw error;
  }
}

app.get("/hotels", async (req, res) => {
  const hotels = await readAllDetailOfHotel();
  try {
    if (hotels) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "Hotels not found" });
    }
  } catch (error) {
    res.status(505).json({ error: "Failed fetched to Hotel" });
  }
});

async function readHotelByName(isHotelName) {
  try {
    const hotel = await Hotel.find({ name: isHotelName });
    return hotel;
  } catch (error) {
    throw error;
  }
}

app.get("/hotels/:hotelName", async (req, res) => {
  const hotel = await readHotelByName(req.params.hotelName);
  try {
    if (hotel.length != 0) {
      res.json(hotel);
      console.log(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed fetched Hotels" });
  }
});

async function newHotel1(categoryName) {
  try {
    const hotel = await Hotel.find({category: categoryName})
    return hotel
  } catch (error) {
    throw error
  }
}
 

app.get('/hotels/category/:hotelCategory',async (req,res) => {
  const hotel = await newHotel1(req.params.hotelCategory)
  
  try {
    if(hotel.length != 0){
      res.json(hotel)
    }else{
      res.status(404).json({error: 'Hotel category not found'})
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).json({error: 'Failed fetching to hotel'})
  }
})


async function readHotelByRating(readRating) {
  try {
    const hotel = await Hotel.find({ rating: Number(readRating) });
    return hotel;
  } catch (error) {
    throw error;
  }
}

app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotel = await readHotelByRating(req.params.hotelRating);

    if (hotel && hotel.length > 0) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel rating not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotel" });
  }
});



async function newHotel(isPhoneNumber) {
  try {
    const hotel = await Hotel.findOne({ phoneNumber: isPhoneNumber });
    return hotel;
  } catch (error) {
    throw error;
  }
}

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  const hotel = await newHotel(req.params.phoneNumber);
  try {
    if (hotel.length != 0) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel phoneNumber not found " });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetching Hotel" });
  }
});

async function deletedHotelById(hotelId) {
    try {
        const hotelDeleted = await Hotel.findByIdAndDelete(hotelId)
        return hotelDeleted
    } catch (error) {
        throw error
    }
}

app.delete('/hotels/:hotelId', async (req,res) => {
    try {
        const deletedHotel = await deletedHotelById(req.params.hotelId)
        res.status(201).json({message: 'Hotel detail deleted by Database', hotel: deletedHotel})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: 'Failed to Hotel Deleted'})
    }
})

async function updatedHotelDetailById(hotelId, dataToUpdated){
  try {
    const updatedId = await Hotel.findByIdAndUpdate(hotelId, dataToUpdated, {new: true})
    return updatedId
  } catch (error) {
    throw error
  }
}

app.post('/hotels/:hotelId',async (req,res) => {
  try {
    const updatedHotel = await updatedHotelDetailById(req.params.hotelId, req.body)
    if(updatedHotel){
      res.status(201).json({message: 'Updated Hotel Details Successfully'})
    }else{
      res.status(404).json({error: 'Failed Updated hotels'})
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: 'Failed Hotel Detail'})
  }
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on the port", PORT);
});

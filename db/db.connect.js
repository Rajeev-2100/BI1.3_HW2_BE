const mongoose = require('mongoose')
require('dotenv').config()

const mongoUri = process.env.MONGO_URL

const initializeDatabase = async () => {
  await mongoose
  .connect(mongoUri)
  .then(() => console.log('Connect to Database'))
  .catch(() => console.log('Error connecting to Database'))
}

module.exports = { initializeDatabase }


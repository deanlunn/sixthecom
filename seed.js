/* eslint-disable no-console */
const mongoose = require('mongoose')
const fs = require('fs')

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1/sixthclothing'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected successfully to the database')
})

// Define your schema and model
// Example for a collection named 'users'
const userSchema = new mongoose.Schema({
  // Define your schema according to your collection structure
})

const User = mongoose.model('User', userSchema)

// Function to seed data
function seedCollection(collectionName, data) {
  mongoose.connection.collections[collectionName].insertMany(data, function (err, r) {
    if (err) {
      console.error(`Error seeding data for ${collectionName}:`, err)
    } else {
      console.log(`Seeded ${r.insertedCount} records for ${collectionName}`)
    }
    mongoose.connection.close()
  })
}

// Read JSON file and seed data
fs.readFile('/path/to/your/exported.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  const documents = JSON.parse(data)
  seedCollection('users', documents) // Replace 'users' with your collection name
})

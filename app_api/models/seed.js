// Bring in the DB connection and the Trip Schema
const mongoose = require('./db');
const Trip = require('./travlr');

// Read in the JSON seed data
var fs = require('fs');
var Trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

// delete any existing recors, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(Trips);
};

// close the MongoDB connection and exit
seedDB().then(async () => {
    await mongoose.connection.close();
    process.exit(0);
});
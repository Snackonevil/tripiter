const db = require('../config/connection');
const { User, Trip, Highlight } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripData.json');
const highlightData = require('./highlightData.json');

async function seedUsers() {
  await User.insertMany(userData);
  console.log('Users seeded!');
}

async function seedTrips() {
  await Trip.insertMany(tripData);

  console.log('Trips seeded!');
}
async function seedHighlights() {
  const seedHighlights = await Highlight.insertMany(highlightData);
  console.log('Highlights seeded!');
}
db.on('error', err => console.log(err));
db.once('open', async () => {
  await User.deleteMany({});
  await Trip.deleteMany({});
  await Highlight.deleteMany({});

  await seedUsers();

  process.exit(0);
});

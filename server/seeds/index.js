const db = require('../config/connection');
const { Users, Trips, Highlights } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripData.json');
const highlightData = require('./highlightData.json');

db.once('open', async () => {
  await Users.deleteMany({});

  const seedUsers = await Users.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});

db.once('open', async () => {
  await Trips.deleteMany({});

  const seedTrips = await Trips.insertMany(tripData);

  console.log('Trips seeded!');
  process.exit(0);
});

db.once('open', async () => {
  await Highlights.deleteMany({});

  const seedHighlights = await Highlights.insertMany(highlightData);

  console.log('Highlights seeded!');
  process.exit(0);
});
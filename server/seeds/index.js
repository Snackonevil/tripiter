const db = require('../config/connection');
const { User, Trip, Highlight } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripData.json');
const highlightData = require('./highlightData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const seedUsers = await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});

db.once('open', async () => {
  await Trip.deleteMany({});

  const seedTrips = await Trip.insertMany(tripData);

  console.log('Trips seeded!');
  process.exit(0);
});

db.once('open', async () => {
  await Highlight.deleteMany({});

  const seedHighlights = await Highlight.insertMany(highlightData);

  console.log('Highlights seeded!');
  process.exit(0);
});

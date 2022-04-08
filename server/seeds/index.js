const db = require('../config/connection');
const { User, Trip, Highlight } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripData.json');
const highlightData = require('./highlightData.json');

async function seedTestUser() {
  await User.create({
    username: 'Test User',
    password: 'iamatestuser',
    first_name: 'Test',
    last_name: 'User',
    email: 'Test@test.com',
    trips: [],
  });
  console.log('Test user seeded!');
}

async function seedTrips() {
  for (const trip of tripData) {
    const newTrip = await Trip.create(trip);
    await User.findOneAndUpdate(
      { username: 'Test User' },
      { $push: { trips: newTrip._id } }
    );
  }
  console.log('Trips seeded!');
}

async function seedHighlights() {
  for (const highlight of highlightData) {
    const newHighlight = await Highlight.create(highlight);
    await Trip.findOneAndUpdate(
      { name: 'FUN FUN FRANCE' },
      { $push: { hightlights: newHighlight._id } }
    );
  }
  console.log('Highlights seeded!');
}

db.on('error', err => console.log(err));

db.once('open', async () => {
  await User.deleteMany({});
  await Trip.deleteMany({});
  await Highlight.deleteMany({});

  await seedTestUser();
  await seedTrips();
  await seedHighlights();

  process.exit(0);
});

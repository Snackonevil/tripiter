const db = require('../config/connection')
const { User, Trip, Highlight } = require('../models')

const userData = require('./userData.json')
const tripData = require('./tripData.json')
const highlightData = require('./highlightData.json')

async function seedTestUser() {
    await User.create({
        username: 'Kevin Lacson',
        password: '',
        first_name: 'Kevin',
        last_name: 'Lacson',
        email: 'lacsonky@gmail.com',
        trips: [],
        googleUser: true,
    })
    console.log('Test user seeded!')
}

// async function seedTrips(){
//     for (const trip of tripData) {
//     const user = await User.findOne(
//       { username: 'Test User' },
//     );
//     const newTrip = await Trip.create({ ...trip, userId: user._id});
//     await Trip.create(newTrip);
//   }

//   console.info('Trips Seeded');

// };
async function repopulateTripArray(ID, tripId) {
    await User.findOneAndUpdate({ _id: ID }, { $push: { trips: tripId } })
}

const christineTrips = ['62571418f370c2081b63ccf6', '6259f7031c5f2a7691617985']

async function reassignTripUserId(OLD, NEW) {
    await Trip.updateMany({ userId: OLD }, { $set: { userId: NEW } })
}

async function seedTrips() {
    for (const trip of tripData) {
        const user = await User.findOne({ username: 'Kevin Lacson' })
        const newTrip = await Trip.create({ ...trip, userId: user._id })
        await user.update({ $push: { trips: newTrip._id } })
    }
    console.log('Trips seeded!')
}

async function seedHighlights() {
    for (const highlight of highlightData) {
        const aTrip = await Trip.findOne({ name: highlight.tripName })
        const newHighlight = await Highlight.create({
            ...highlight,
            tripId: aTrip._id,
        })
        await aTrip.update({ $push: { highlights: newHighlight._id } })

        console.log(aTrip)
    }
    console.log('Highlights seeded!')
}

db.on('error', (err) => console.log(err))

db.once('open', async () => {
    await repopulateTripArray(
        '625a15a21c5f2a76916179a5',
        '62571418f370c2081b63ccf6'
    )
    await repopulateTripArray(
        '625a15a21c5f2a76916179a5',
        '6259f7031c5f2a7691617985'
    )
    // await User.deleteMany({})
    // await Trip.deleteMany({})
    // await Highlight.deleteMany({})

    // await seedTestUser()
    // await seedTrips()
    // await seedHighlights()

    process.exit(0)
})

// NEW christine id: 625a15a21c5f2a76916179a5
// OLD christine id: 6255ee8ad6947c4cf3deff66

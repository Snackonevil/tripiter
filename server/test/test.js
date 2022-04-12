const db = require('../config/connection')
const { Trip } = require('../models/')

db.once('open', async () => {
    const trips = await Trip.findById('6254df077104b12edc7204cf')

    console.log(trips)
    process.exit(0)
})

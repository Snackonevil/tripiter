const mongoose = require('mongoose')
const colors = require('colors')

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/trips_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log(
            `Connected to Mongo on host:${mongoose.connection.host}, port: ${mongoose.connection.port}`
                .cyan.underline
        )

        console.log(
            `Using '${mongoose.connection.name}' database`.cyan.underline
        )
    }
)

module.exports = mongoose.connection

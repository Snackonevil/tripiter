const { Schema, model } = require('mongoose')

const tripSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        img_url: {
            type: String,
            default: '/placeholder.png',
        },
        userId: {
            type: String,
        },
        highlights: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Highlight',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const Trip = model('Trip', tripSchema)
module.exports = Trip

const { Schema, model } = require('mongoose')

const highlightSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description:{
            type: String,
            default: '/placeholder.png'
        },
        location: {
            type: String,
            require: true,
        },
        description: {
          type: String,
          required: false,
        },
        img_url: {
            type: String,
            default: '/placeholder.png',
        },
        tripId: {
            type: String,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const Highlight = model('Highlight', highlightSchema)
module.exports = Highlight

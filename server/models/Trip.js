const { Schema, model } = require('mongoose');

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
);

const Trip = model('Trip', tripSchema);

module.exports = Trip;

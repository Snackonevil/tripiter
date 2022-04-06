const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
  trip: {
    // id: {
    //   type: Number,
    //   require: true,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    destination: {
      type: String,
      require: true,
    },
    description: {
      type: '' ,
    },
    highlights: {
      type: '' ,
    }
  }
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;
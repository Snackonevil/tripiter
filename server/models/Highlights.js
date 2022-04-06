const { Schema, model } = require('mongoose');

const highlightSchema = new Schema({
  highlight: {
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
    location: {
      type: String,
      require: true,
    },
    picture: {
      type:'link' ,
    },
  }
});

const Highlights = model('Highlights', tripSchema);

module.exports = Highlights;
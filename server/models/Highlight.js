const { Schema, model } = require('mongoose');

const highlightSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      require: true,
    },
    img_url: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = model('Highlight', highlightSchema);

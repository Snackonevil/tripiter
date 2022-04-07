const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  user: {
    // id: {
    //   type: Number,
    //   require: true,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        len: [8],
      }
    },
    first_name: {
      type: String,
      require: true
    },
    last_name: {
      type: String,
      require: false
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  }
});

const User = model('User', userSchema);

module.exports = User;
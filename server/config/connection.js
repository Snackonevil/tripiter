const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/trips_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to Mongo')
);

module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mogodb://127.0.0.1:27017/trips-db', 
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;
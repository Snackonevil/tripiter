const { Users, Trips, Highlights } = require('../models');

// Club.hasMany(Tag, {
//     foreignKey: "tag_id",
// });
// Tag.belongsTo(Club, {
//     foreignKey: "tag_id",
// });

// User.hasMany(Club, {
//     foreignKey: "club_id",
// });

// Club.hasOne(Book, {
//     foreignKey: "book_id",
// });

// Book.belongsTo(Club, {
//     foreignKey: "book_id",
// });

// Club.belongsToMany(User, { through: User_Club });
// User.belongsToMany(Club, { through: User_Club });

module.exports = { Users, Trips, Highlights };

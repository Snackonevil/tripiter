const { Users, Trips, Highlights } = require('../models');

db.(collection).insertOne({});
db.(collection).insertMany({});
db.(collection).find({},{});
db.(collection).findOne({});
db.(collection).find().sort({ title: 1}).limit(2)
db.(collection).deleteOne({})
db.(collection).deleteMany({})
db.(collection).updateOne({_id: ObjectId("")}, {$set: {parameter, parameter}})
db.(collection).updateMany({author: "Terry Pratchett"}, {$set: {author: "Terry Pratchet"}})
db.(collection).updateOne({_id: ObjectId("")}, {$pull: {genres: "fantasy"}}) //remove document from array
db.(collection).updateOne({_id: ObjectId("")}, {$push: {genres: "fantasy"}}) //add document to array

$gte, $gt, $lt, $lte, $or(variables), $in, $nin

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

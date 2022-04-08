const { User, Trip, Highlight } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('trips').populate({
        path: 'Trip',
        populate: 'highlights',
      });
    },
    trips: async () => {
      return await Trip.find({}).populate('highlights');
    },
    highlights: async () => {
      return await Highlight.find({});
    },
  },
};

module.exports = resolvers;

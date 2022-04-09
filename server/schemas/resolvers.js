const { User, Trip, Highlight } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('trips').populate({
        path:'trips',
        populate:'highlight'
      })
    },
    user: async (parent, { username }) => {
      return await User.find({ username }).populate('trips').populate({
        path:'trips',
        populate:'highlights'
      })
    },
    trips: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Trip.find(params).sort({ createdAt: -1 }).populate('highlights');
    },
    trip: async () => {
      return await Trip.findOne({ _id: Trip._id}).populate('highlights')
    },
    highlights: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Highlight.find(params).sort({ createdAt: -1 });
    },
    highlight: async () => {
      return await Highlight.findOne({ _id: Highlight._id })
    },
    me: async () => {
      if(context.user){
        return await User.findOne({ _id: context.user._id }).populate('trips').populate({
          path: 'trips',
          populate: 'highlight'
        })
      }
      throw new AuthenticationError('Please log in..')
    }
  },
      Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);

          return { token, user };
        },
    login: async (parent, { email }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

  //   addUser
  //   addTrip
  //   removeTrip
  //   addHighlight
  //   deleteHighlight
  }
}


module.exports = resolvers;

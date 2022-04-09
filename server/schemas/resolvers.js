const { User, Trip, Highlight } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const ModelNames = {
    Trip: 'trips',
    Highlight: 'highlights',
    User: 'users',
}
const resolvers = {
    Query: {
        users: async () => {
            return await User.find().populate(ModelNames.Trip).populate({
                path: ModelNames.Trip,
                populate: ModelNames.Highlight,
            })
        },
        userById: async (parent, { userId }) => {
            return await User.findOne({ _id: userId })
                .populate(ModelNames.Trip)
                .populate({
                    path: 'trips',
                    populate: 'highlights',
                })
        },
        user: async (parent, { username }) => {
            return await User.findOne({ username }).populate('trips').populate({
                path: 'trips',
                populate: 'highlights',
            })
        },
        trips: async (parent, { username }) => {
            const params = username ? { username } : {}
            const trips = await Trip.find(params)
                .populate('highlights')
                .sort({ createdAt: -1 })
            return trips
        },
        trip: async () => {
            return await Trip.findOne({ _id: Trip._id }).populate('highlights')
        },
        highlights: async (parent, { tripId }) => {
            const params = tripId ? { tripId } : {}
            return await Highlight.find(tripId).sort({ createdAt: -1 })
        },
        highlight: async () => {
            return await Highlight.findOne({ _id: Highlight._id })
        },
        me: async () => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id })
                    .populate('trips')
                    .populate({
                        path: 'trips',
                        populate: 'highlight',
                    })
            }
            throw new AuthenticationError('Please log in..')
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user)
            return { token, user }
        },
        addTrip: async (parent, { trip }) => {
            const { name, userId, destination, description, img_url } = trip
            const user = await User.findOne({ _id: userId })
            const newTrip = await Trip.create(trip)
            await user.update({ $push: { trips: newTrip._id } })
            return newTrip
        },
        removeTrip: async (parent, { tripId }) => {
            return Trip.findOneAndDelete({ _id: tripId });
        }

        //   removeTrip
        //   addHighlight
        //   deleteHighlight
    },
}

module.exports = resolvers

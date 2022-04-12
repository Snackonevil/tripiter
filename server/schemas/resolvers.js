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
            return await Trip.find().populate(ModelNames.Highlight)
        },
        trip: async (tripId) => {
            return await Trip.findOne({ tripId }).populate('highlights')
        },
        highlights: async (tripId) => {
            const params = tripId ? { tripId } : {}
            return await Highlight.find(tripId).sort({ createdAt: -1 })
        },
        highlight: async (highlightId) => {
            return await Highlight.findOne({ highlightId })
        },
        me: async (parents, args, context) => {
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
        addGoogleUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            if (!password) {
                throw new AuthenticationError(
                    `Incorrect Password ${correctPw.value} ${password}`
                )
            }

            const token = signToken(user)
            return { token, user }
        },
        loginGoogleUser: async (parent, { email }) => {
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
            return Trip.findOneAndDelete({ _id: tripId })
        },
        addHighlight: async (parent, { highlight }) => {
            const { name, location, tripId, img_url } = highlight
            const trip = await Trip.findOne({ _id: tripId })
            const newHighlight = await Highlight.create(highlight)
            await trip.update({ $push: { highlights: newHighlight._id } })
            return newHighlight
        },
        deleteHighlight: async (parent, { highlightId }) => {
            return Highlight.findOneAndDelete({ _id: highlightId })
        },
    },
}

module.exports = resolvers

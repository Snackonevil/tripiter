const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: function () {
            return !this.googleUser
        },
    },
    googleUser: {
        type: Boolean,
        default: false,
    },
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    picture: {
        type: String,
        default: '/placeholder.png',
    },
    trips: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trip',
        },
    ],
})

userSchema.pre('save', async function (next) {
    if (this.googleUser) {
        return
    }
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    }

    next()
})

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

module.exports = User

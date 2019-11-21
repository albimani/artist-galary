const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

let User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: (value) => {
            validator.isLength(value, {
                min: 3,
                max: 36
            })
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password: {
        type: String,
        required: true
    }
})

User.pre("save", preSave)

function preSave(next) {
    if (!this.isModified("password")) return next()
    this.password = bcrypt.hashSync(this.password, 10)
    next()
}

module.exports = mongoose.model('User', User)
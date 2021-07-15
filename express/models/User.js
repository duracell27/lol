const {Schema, model} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unicue: true},
    password: {type: String, required: true},
})

module.exports = model('User', schema)
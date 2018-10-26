const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Team = new Schema({
    name: String,
    motto: String,
    logo: String
})

module.exports = mongoose.model('Team', Team)
const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Stats = new Schema({
    points: Number,
    wins: Number,
    losses: Number,
    ties: Number,
    goalsFor: Number,
    goalsAgainst: Number
})

module.exports = mongoose.model('Stats', Stats)
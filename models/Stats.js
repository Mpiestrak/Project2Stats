const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Stats = new Schema({
    points: { type: Number, default: 0},
    wins: { type: Number, default: 0},
    losses: { type: Number, default: 0},
    ties: { type: Number, default: 0},
    goalsFor: { type: Number, default: 0},
    goalsAgainst: { type: Number, default: 0}
})

module.exports = mongoose.model('Stats', Stats)
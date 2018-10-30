const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const League = new Schema({
    name: String,
    bDate: String,
    eDate: String,
    teams: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    ]
})

module.exports = mongoose.model('League', League)
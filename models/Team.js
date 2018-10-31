const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Team = new Schema({
    name: String,
    motto: String,
    logo: String,
    stats:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Stats'
        }
    ]
})

module.exports = mongoose.model('Team', Team)
const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const teamController = {
    index: (req, res) => {
        Team.find({}).populate('stats')
            .then((team) => {
                res.render('league/index', {
                    team: team
                })
            })
    },
}
module.exports = teamController;
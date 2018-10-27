const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const teamController = {
    index: (req, res) => {
        const leagueId = req.params.leagueId
        League.findById(leagueId).populate(`team`)
            .then(league => {
                const team = league.team
                res.send(team)
            })
    },
}
module.exports = teamController;
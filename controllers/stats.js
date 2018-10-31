const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const statsController = {
    edit: (req, res) => {
        const leagueId = req.params.leagueId
        League.findById(leagueId).populate({path: 'teams', populate: {path: 'stats' }}).then((league) => {
            console.log(league)
            res.render('stats/edit', {league: league})
        })
    },

    update: (req, res) => {
            Team.findById(req.params.teamId).populate
                Stats.findByIdAndUpdate(req.params.statsId, req.body).then(({}) => {
                    
                    res.redirect(`/league/${leagueId}`)
                })
    },

}

module.exports = statsController;
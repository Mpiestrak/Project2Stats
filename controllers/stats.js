const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const statsController = {
    edit: (req, res) => {
        
    },
    update: (req, res) => {
            Team.findById(req.params.teamId).populate('stats').then((team) => {
                team.stats[0]
                res.redirect(`/league/${leagueId}`)
                // Stats.findByIdAndUpdate(req.params.statsId, req.body).then((updatedStats) => {
                //     res.redirect(`/league/${leagueId}`)
                // })
            })
    },

}

module.exports = statsController;

// League.findByIdAndUpdate(req.params.leagueId, req.body).then((updatedLeague) => {
//             res.redirect(`/league/${updatedLeague._id}`)

//             create: (req, res) => {
//                 const leagueId = req.params.leagueId
//                 League.findById(leagueId).then((league) => {
//                     Team.create(req.body).then((createdTeam) => {
//                         league.teams.push(createdTeam)
//                         league.save()
//                         res.redirect(`/league/${leagueId}`)
//                     })
//                 })
//             },
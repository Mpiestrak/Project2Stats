const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const statsController = {
    // edit: (req, res) => {
    //     const leagueId = req.params.leagueId
    //     League.findById(leagueId).then((league) => {
    //         const teamId = req.params.teamId
    //         Team.findById(teamId).then((team) => {
                
    //         })
    //         Stats.edit(req.body).then((newStats) => {
    //             league.teams.stats.push(newStats)
    //             league.save()
    //             res.redirect(`/league/${leagueId}`)
    //         })
    //     })
    // },

    edit: (req, res) => {
        const leagueId = req.params.leagueId
        League.findById(leagueId).then((league) => {
            Team.create(req.body).then((createdTeam) => {
                league.teams.push(createdTeam)
                league.save()
                res.redirect(`/league/${leagueId}`)
            })
        })
    },
}

module.exports = statsController;
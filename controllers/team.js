const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const teamController = {
    // index: (req, res) => {
    //     const teamId = req.query.teamId
    //     console.log(teamId)
    //     Team.findById(teamId).populate(`stats`)
    //         .then(team => {
    //             // const stats = team.stats
    //             res.render('team/index', {
    //                 team: team
    //             })
    //         })
    // },


    create: (req, res) => {
        const leagueId = req.params.leagueId
        League.findById(leagueId).then((league) => {
            Team.create(req.body).then((createdTeam) => {
                league.teams.push(createdTeam)
                league.save()
            }).then((team) => {
                Stats.create(req.body).then((createdStats) => {
                    teams.stats.push(createdStats)
                    teams.save()
                    res.redirect(`/league/${leagueId}`)
                })
            })
        })
    },

    // show: (req, res) => {
    //     const teamId = req.params.teamId
    //     // console.log(teamId)
    //     Team.findById(teamId).populate(`stats`)
    //         .then(team => {
    //             console.log(team)
    //             // console.log(team)
    //             // const stats = team.stats
    //             res.render(`/league/index`)
    //         })
    // }
}
module.exports = teamController;
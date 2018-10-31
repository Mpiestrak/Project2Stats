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
        // Team.find({}).populate('stats').then((stats) => {
        //     console.log(stats)
        //     res.render('stats/edit', {
        //         stats: stats
        //     })
        // })
    },
    update: (req, res) => {
            // Team.findById(req.params.teamId).populate('stats').then((team) => {
            //     Stats.update(req.body).then((leagueId) => {
            //         res.redirect(`/league/${leagueId}`)
            //     })
                // team.stats[0]
            Team.findById(req.params.teamId).populate
                Stats.findByIdAndUpdate(req.params.statsId, req.body).then(({}) => {
                    
                    res.redirect(`/league/${leagueId}`)
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
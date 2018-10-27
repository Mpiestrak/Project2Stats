const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const leagueController = {
    index: (req, res) => {
        League.find({}).populate('teams')
            .then((league) => {
                res.render('app/index', {
                    league: league
                })
            })
    },
    // new: (req, res) => {
    //     res.render(`league/new`, {
    //         league: league
    //     })
    // },
    // create: (req, res) => {
    //     League.create(req.body).then(() => {
    //         res.redirect(`/`)
    //     })
    // },
    show: (req, res) => {
            const leagueId = req.query.leagueId
            console.log(leagueId)
            League.findById(leagueId).populate(`teams`)
                .then(league => {
                    console.log(league)
                    const team = league.team
                    res.render('league/index', {
                        league: league
                    })
                })
        },
}


module.exports = leagueController
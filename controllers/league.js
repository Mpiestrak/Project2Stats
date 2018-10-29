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
    new: (req, res) => {
        res.render(`league/new`)
    },
    create: (req, res) => {
        League.create({
            name: req.body.name,
            bDate: req.body.bDate,
            eDate: req.body.eDate,
            numberOfTeams: req.body.numberOfTeams,
            teams: []
        }).then(league => {
            res.redirect(`/`)
        })
    },
    show: (req, res) => {
        const leagueId = req.params.leagueId
        // console.log(req.query)
        League.findById(leagueId).populate(`teams`)
            .then(league => {
                // const team = league.team
                res.render('league/index', {
                    league: league
                })
            })
    },
}


module.exports = leagueController;
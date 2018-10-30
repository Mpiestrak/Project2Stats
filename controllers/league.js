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
            teams: []
        }).then(league => {
            res.redirect(`/`)
        })
    },

    // populate stats after populating teams?
    show: (req, res) => {
        const leagueId = req.params.leagueId
        League.findById(leagueId).populate(`teams`)
            .then(league => {
                // const team = league.team
                res.render('league/index', {
                    league: league
                })
            })
    },
    update: (req, res) => {
        League.findByIdAndUpdate(req.params.leagueId, req.body).then((updatedLeague) => {
            res.redirect(`/league/${updatedLeague._id}`)
        })
    },
    delete: (req, res) => {
        League.findByIdAndDelete(req.params.leagueId, (err, league) =>
        {
            res.redirect('/')
        })
    }
}


module.exports = leagueController;
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
    create: (req, res) => {
        let league = new League(
            {
                name: req.body.name,
                bDate: req.body.bDate,
                eDate: req.body.eDate,
                numberOfTeams: req.body.numberOfTeams,
                teams: []
            }
        );
    
        league.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('League Created successfully')
        })
    },
    show: (req, res) => {
            const leagueId = req.query.leagueId
            console.log(req.query)
            League.findById(leagueId).populate(`teams`)
                .then(league => {
                    // const team = league.team
                    res.render('league/index', {
                        league: league
                    })
                })
        },
}


module.exports = leagueController
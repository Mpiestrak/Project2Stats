const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const leagueController = {
    index: (req, res) => {
        res.render('league/index', {

        })
    },
    // new: (req, res) => {
    //     res.render(`question/new`, {
    //         league: league
    //     })
    // },
    // create: (req, res) => {
    //     League.create(req.body).then(() => {
    //         res.redirect(`/`)
    //     })
    // },
    // show: (req, res) => {
    //     res.render('league', {league: league})
    // }
}


module.exports = leagueController
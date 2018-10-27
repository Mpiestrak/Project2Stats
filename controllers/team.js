const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const teamController = {
    index: (req, res) => {
        const teamId = req.query.teamId
        console.log(teamId)
        Team.findById(teamId).populate(`stats`)
            .then(team => {
                // const stats = team.stats
                res.render('team/index', {
                    team: team
                })
            })
    },
}
module.exports = teamController;

const League = require('../models/League')
const Stats = require('../models/Stats')
const Team = require('../models/Team')

const applicationController = {
    index: (req, res) => {
        res.render('app/index')
    }
}

module.exports = applicationController
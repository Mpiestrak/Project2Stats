const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/league')
const teamController = require('../controllers/team')
const statsController = require('../controllers/stats')
const applicationController = require('../controllers/application')


/* GET home page. */
router.get('/', leagueController.index)

// router.get('/league', leagueController.index),
// router.get('/league/new', leagueController.new)
// router.post('/league', leagueController.create)
// router.get('/league/:id', leagueController.show)

router.get('league/leagueId/team', teamController.index)
// router.get('/league/:id/team', teamController.show)
// router.post('/league/:id/team', teamController.create)

module.exports = router;

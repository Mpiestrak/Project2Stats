const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/league')
const teamController = require('../controllers/team')
const statsController = require('../controllers/stats')
const applicationController = require('../controllers/application')


/* GET home page. */
router.get('/', leagueController.index)

// router.get('/league', leagueController.show)
router.get('/league/new', leagueController.new)
router.post('/league', leagueController.create)
router.get('/league/:leagueId', leagueController.show)
// router.get('/', leagueController.new)

// router.get('/team', teamController.index)
router.post('/league/:leagueId/teams', teamController.create)

// router.get('/team/:id', teamController.show)
// router.get('/stats/:Id', statsController.index)


module.exports = router;

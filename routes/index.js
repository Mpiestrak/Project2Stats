const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/league')
const teamController = require('../controllers/team')
const statsController = require('../controllers/stats')
const applicationController = require('../controllers/application')


/* GET home page. */
router.get('/', leagueController.index)

router.post('/league', leagueController.create)
router.get('/league/:leagueId', leagueController.show)
router.put('/league/:leagueId', leagueController.update)
router.delete('/league/:leagueId', leagueController.delete)
// router.delete('/league/:leagueId', leagueController.delete)
router.get('/league/:leagueId', teamController.show)
router.post('/league/:leagueId/teams', teamController.create)
router.put('/league/:leagueId', statsController.update)

module.exports = router;

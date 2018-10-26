const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/league')
const teamController = require('../controllers/team')
const statsController = require('../controllers/stats')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/league/new', leagueController.new)
router.post('/league', leagueController.create)
router.get('/league/:id', leagueController.show)

// router.get('/league/:id/team/new', teamController.new)
// router.get('/league/:id/team', teamController.show)
// router.post('/league/:id/team', teamController.create)

module.exports = router;

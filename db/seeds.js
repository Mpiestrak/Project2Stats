const League = require('../models/League.js')
const Team = require('../models/Team.js')
const Stats = require('../models/Stats')
const mongoose = require('./connections')

const team1Stats = new Stats({
    points: 1,
    wins: 1,
    losses: 1,
    ties: 1,
    goalsFor: 1,
    goalsAgainst: 1
})

const team2Stats = new Stats({
    points: 2,
    wins: 2,
    losses: 2,
    ties: 2,
    goalsFor: 2,
    goalsAgainst: 2
})

const team3Stats = new Stats({
    points: 3,
    wins: 3,
    losses: 3,
    ties: 3,
    goalsFor: 3,
    goalsAgainst: 3
})

const team1 = new Team({
    name: 'First Team',
    motto: 'We are first',
    logo: 'logo1',
    stats: [team1Stats]
})

const team2 = new Team({
    name: 'Second Team',
    motto: 'We are second',
    logo: 'logo2',
    stats: [team2Stats ]
})

const team3 = new Team({
    name: 'Third Team',
    motto: 'We are third',
    logo: 'logo3',
    stats: [team3Stats]
})

const league1 = new League({
    name: 'First league',
    bDate: '1/1/2018',
    eDate: '2/2/2018',
    teams: [team1, team2]
})

const league2 = new League({
    name: 'Second League',
    bdate: '4/4/2018',
    eDate: '5/5/2018',
    teams: [team3]
})

League.remove({})
    .then(() => Team.remove({}))
    .then(() => Stats.remove({}))
    .then(() => Stats.insertMany([team1Stats, team2Stats, team3Stats]))
    .then(() => Team.insertMany([team1, team2, team3]))
    .then(() => league1.save())
    .then(() => league2.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())
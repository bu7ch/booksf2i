const router = require('express').Router()
const PlayerTennis = require('../models/playerModel')
const PlayerFootball = require('../models/playerFootball')
const PlayerRugby = require('../models/playerRugby')
router.get('/tennis', (req, res) =>{
  const newPlayer = new PlayerTennis({
    name: 'Beatrice',
    nationality: 'Française'
  })
 newPlayer.save()
  res.send(newPlayer)
})
router.get('/football', (req, res) =>{
  const player = new PlayerFootball({
    name: 'Billy',
    nationality: 'USA'
  })
  player.save()
  res.send(player)
})
router.get('/rugby', (req, res) =>{
  const player = new PlayerRugby({
    name: 'Klauss',
    nationality: 'Nouvelle-Zelande'
  })
  player.save()
  res.send(player)
})


module.exports = router
const PlayerFootball = require('../models/playerFootball')


const createFootball = (req, res) =>{
  const player = new PlayerFootball({
    name: 'Billy',
    nationality: 'USA'
  })
  player.save()
  res.send(player)
}
const updatePlayerF = async (req, res) => {
  const id = req.params.player_id
  const updateData = {
    name: req.body.name,
    nationality: req.body.nationality,
  };
  try {
   
    const player = await PlayerTennis.findOneAndUpdate(
      {_id: id},
      updateData
    );
    res.send({ msg: "Player updated!", player});
  } catch (err) {
    console.log({ msg: "erreur d'ajout" });
  }
};

module.exports = {createFootball, updatePlayerF}
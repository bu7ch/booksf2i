const PlayerTennis = require("../models/playerModel");

const createTennis = (req, res) => {
  const newPlayer = new PlayerTennis({
    name: "Beatrice",
    nationality: "Française",
  });
  newPlayer.save();
  res.send(newPlayer);
};

const updatePlayer = async (req, res) => {
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

module.exports = { createTennis, updatePlayer };

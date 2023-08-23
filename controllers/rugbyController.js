const PlayerRugby = require("../models/playerRugby");

const createRugby = (req, res) => {
  const player = new PlayerRugby({
    name: "Klauss",
    nationality: "Nouvelle-Zelande",
  });
  player.save();
  res.send(player);
};
const updatePlayerR = async (req, res) => {
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

module.exports = {createRugby, updatePlayerR};

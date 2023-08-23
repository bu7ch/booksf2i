const router = require("express").Router();
const {
  createTennis,
  updatePlayer,
  deletePlayer,
  allPlayers,
} = require("../controllers/tennisController");
const {
  createFootball,
  updatePlayerF,
  deletePlayerF,
} = require("../controllers/footballController");
const { createRugby, updatePlayerR, deletePlayerR } = require("../controllers/rugbyController");

router.get("/tennis", allPlayers);
router.post("/tennis", createTennis)
router.put("/tennis/:player_id", updatePlayer);
router.delete('/tennis/:player_id', deletePlayer)
router.get("/football", createFootball);
router.put("/football/:player_id", updatePlayerF);
router.delete('/football/:player_id', deletePlayerF)
router.get("/rugby", createRugby);
router.put("/rugby/:player_id", updatePlayerR);
router.delete('/rugby/:player_id', deletePlayerR)

module.exports = router;

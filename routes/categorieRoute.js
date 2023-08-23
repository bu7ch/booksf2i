const router = require("express").Router();
const {
  createTennis,
  updatePlayer,
} = require("../controllers/tennisController");
const {
  createFootball,
  updatePlayerF,
} = require("../controllers/footballController");
const { createRugby, updatePlayerR } = require("../controllers/rugbyController");

router.get("/tennis", createTennis);
router.put("/tennis/:player_id", updatePlayer);
router.get("/football", createFootball);
router.put("/football/:player_id", updatePlayerF);
router.get("/rugby", createRugby);
router.put("/rugby/:player_id", updatePlayerR);

module.exports = router;

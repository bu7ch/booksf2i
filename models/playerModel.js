const { mongoose, Schema } = require("mongoose");

const playerTennisSchema = new Schema({
  name: String,
  nationality: String
})

const PlayerTennis = mongoose.model("Player", playerTennisSchema)
module.exports = PlayerTennis

const { mongoose, Schema } = require("mongoose");

const playerFootballSchema = new Schema({
  name: String,
  nationality: String
})
mongoose.pluralize(null)
const PlayerFootball = mongoose.model("Football", playerFootballSchema)
module.exports = PlayerFootball
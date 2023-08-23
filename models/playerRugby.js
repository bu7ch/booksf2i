const { mongoose, Schema } = require("mongoose");

const playerRugbySchema = new Schema({
  name: String,
  nationality: String
})
mongoose.pluralize(null)
const PlayerRugby = mongoose.model("Rugby", playerRugbySchema)
module.exports = PlayerRugby
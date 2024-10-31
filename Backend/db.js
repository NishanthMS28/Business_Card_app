const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://NishanthMS28:<**password**>@webdev.vpvky.mongodb.net/cards"
);

const cardSchema = mongoose.Schema({
  name: String,
  description: String,
  interests: String,
  linkedin: String,
  twitter: String,
});

const card = mongoose.model("cards", cardSchema);

module.exports = { card };

const express = require("express");
const { createSchema, updateSchema, deleteSchema } = require("./types");
const { card } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/card", async (req, res) => {
  const { name, description, interests, linkedin, twitter } = req.body;

  const newCard = {
    name,
    description,
    interests,
    linkedin,
    twitter,
  };

  try {
    createSchema.parse(newCard);
    await card.create(newCard);

    res.json({
      msg: "Card created",
    });
  } catch (err) {
    res.status(404).json({
      msg: "Invalid inputs",
    });
  }
});

app.get("/cards", async (req, res) => {
  const cards = await card.find({});
  res.json({ cards });
});

app.put("/updateCard", async (req, res) => {
  const { id, name, description, interests, linkedin, twitter } = req.body;

  const updateData = { id };
  if (name) updateData.name = name;
  if (description) updateData.description = description;
  if (interests) updateData.interests = interests;
  if (linkedin) updateData.linkedin = linkedin;
  if (twitter) updateData.twitter = twitter;

  try {
    updateSchema.parse(updateData);
    await card.updateOne(
      {
        _id: id,
      },
      {
        $set: updateData,
      }
    );

    res.json({
      msg: "Card updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      msg: "Invalid inputs",
    });
  }
});

app.delete("/deleteCard", async (req, res) => {
  const id = req.body.id;
  const deleteCard = { id };

  try {
    deleteSchema.parse(deleteCard);
    await card.deleteOne({ _id: id });

    res.status(200).json({
      msg: "Card deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      msg: "Invalid inputs",
    });
  }
});

app.listen(3000);

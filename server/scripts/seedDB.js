const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Puzzle collection and inserts the puzzles below

mongoose.connect(
    process.env.MONGODB
);

const puzzleSeed = [
  {
    title: "Safe",
    description: "Enter a 4 digit code to crack the safe and win the game.",
    winCondition: '1219',
    isSolved: false
  },
  {
    title: "Bookshelf",
    description: "Solve the riddle then select the books that correspond to the answer.",
    winCondition: "day and night",
    isSolved: false
  },
  {
    title: "Painting",
    description: "Complete the puzzle to put the painting back together",
    winCondition: "solved puzzle",
    isSolved: false
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const express = require("express");
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 4000;

const userSchema = require("./users");

const User = mongoose.model("Users", userSchema);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/bank");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// 1) génère les datas (10 utilisateurs, nom + amount) avec cette requête: http://localhost:4000/generate_datas
app.get("/generate_datas", async (req, res) => {
  console.log("ici");
  await User.remove({});

  for (let index = 0; index < 10; index++) {
    let newUser = new User({
      name: faker.name.firstName(),
      amount: getRandomInt(2000),
    });
    await newUser.save();
  }

  res.send("Hello World!");
});

// 2) Voir les datas avec cette requête: http://localhost:4000/generate_datas
app.get("/all_datas", async (req, res) => {
  const users = await User.find();
  console.log("users", users);
  console.log(
    "sum",
    users.reduce((acc, currentValue) => acc + currentValue.amount, 0)
  );
  res.send("Hello World!");
});

// 3) Aggrège les datas
app.get("/sum", async (req, res) => {
  const sum = await User.aggregate([
    { $group: { _id: null, totalAmount: { $sum: "$amount" } } },
  ]);
  console.log("sum", sum);
  res.send("Sum is " + sum[0].totalAmount);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

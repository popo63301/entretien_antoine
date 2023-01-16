const express = require("express");
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 4000;

const userSchema = require("./users");

const User = mongoose.model("Users", userSchema);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/bank");
//   .then((e) => console.log("yes", e));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/", async (req, res) => {
  let newUser = new User({ name: "sofiane" });
  await newUser.save();

  res.send("Hello World!");
});

app.get("/generate_datas", async (req, res) => {
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

app.get("/all_datas", async (req, res) => {
  const users = await User.find();
  console.log("users", users);
  console.log(
    "sum",
    users.reduce((acc, currentValue) => acc + currentValue.amount, 0)
  );
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

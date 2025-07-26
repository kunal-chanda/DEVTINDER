const express = require("express");

const exp = express();

// const { adminAuth } = require("./middleware/auth");

const { connectDB } = require("./DBCon");
const User = require("./models/user");

exp.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Kunall",
    lastName: "Chanda",
    email: "kunalrcciit@gmail.com",
    password: 12345678,
    gender: "Male",
    age: 40,
  });

  try {
    await user.save();
    res.send("User Added Successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user data.!!" + err.message);
  }
});

connectDB()
  .then(() => {
    console.info("Database connection established...");
    exp.listen(7777, () => {
      console.log("Server is success fully liosten port 7777");
    });
  })
  .catch((err) => {
    console.error("Database connection not established..");
  });

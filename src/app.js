const express = require("express");

const exp = express();

exp.get("/user", (req, res) => {
  res.send("This is a get call for User");
});

exp.post("/user", (req, res) => {
  res.send("This is post call for User");
});

exp.use("/hello", (req, res) => {
  res.send("Hello, hello");
});

exp.use("/test", (req, res) => {
  res.send("Hello Testing.....");
});

exp.use("/", (req, res) => {
  res.send("Response from Server port:7777");
});

exp.listen(7777, () => {
  console.log("Server is success fully liosten port 7777");
});

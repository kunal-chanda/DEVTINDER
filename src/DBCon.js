const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kunalrcciit:JgX59OPATjB34JPH@cluster0.h1dhjzt.mongodb.net/DevTinder"
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = { connectDB };

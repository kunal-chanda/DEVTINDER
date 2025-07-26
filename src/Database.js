const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string
const uri =
  "mongodb+srv://kunalrcciit:JgX59OPATjB34JPH@cluster0.h1dhjzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("HelloWorld");
    const test = database.collection("Test");

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { location: "Delhi" };
    const loc = await test.findOne(query);

    console.log(loc);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

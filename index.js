import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("HomeNestDB");
   

    // Main root
    app.get("/", (req, res) => {
      res.send("HomeNest server is running...");
    });

    

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error(error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(` HomeNest server running on port: ${port}`);
});

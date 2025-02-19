const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// CoffeeMaster
// xbuIn6TlblAyESvi


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://CoffeeMaster:xbuIn6TlblAyESvi@cluster0.2fp5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Coffee Store server is Running.')
})

app.listen(port, (req, res) => {
    console.log(`Coffee Store server running this port on : ${port}`);
})
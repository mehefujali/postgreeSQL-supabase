const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Pool } = require("pg"); 

dotenv.config();
const app = express();

// Middleware----------------------------
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, 
});

app.get("/", (req, res) => {
  res.send({ status: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "supermarket",
    user: process.env.DB_USER || "", 
    password: process.env.DB_PASS || process.env.DB_PASSWORD || "",
	port : process.env.DB_PORT || "5432" ,
  });
  const db = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback);
    },
  };
  const port = process.env.PORT || 8800;

app.get("/", (req, res)=>{
    res.json("hello this is the backend")
})

app.get("/items", (req, res)=>{
    const q = "SELECT * FROM items";
    db.query(q, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
        res.json(data.rows);
      });
    });

app.listen(port, ()=>{
    console.log("connected to backend!")
})
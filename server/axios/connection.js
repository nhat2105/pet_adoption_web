const { Client }= require("pg");

require("dotenv").config();

const db = new Client ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect((err) => {
    if (err) {
      console.error("Could not connect to database:", err);
      return;
    }
    console.log("Connected to the database.");
});

module.exports = db;
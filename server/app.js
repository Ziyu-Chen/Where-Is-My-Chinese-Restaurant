const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");
const app = express();
const cors = require("cors");
app.use(cors());
//const _ = require("lodash");

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.get("/api/states", async (req, res) => {
  try {
    const states = await db("states").select();
    res.json(states);
  } catch (err) {
    console.error("Error loading states!", err);
    res.sendStatus(500);
  }
});

app.get("/api/cities", async (req, res) => {
  try {
    const cities = await db("cities").select();
    res.json(cities);
  } catch (err) {
    console.error("Error loading cities!", err);
    res.sendStatus(500);
  }
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await db("restaurants").select();
    res.json(restaurants);
  } catch (err) {
    console.error("Error loading restaurants!", err);
    res.sendStatus(500);
  }
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;

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

app.get("/api/restaurants/:string", async (req, res) => {
  try {
    const { string } = req.params;
    console.log(string);
    const filters = parser(string);
    let state = null;
    let city = null;
    if (filters.stateId)
      state = await db("states")
        .select("name")
        .where({ id: filters.stateId });
    if (filters.cityId)
      city = await db("cities")
        .select("name")
        .where({ id: filters.cityId });
    const restaurants = await db("restaurants")
      .select()
      .where(builder => {
        if (state !== null) builder.where({ state: state[0].name });
        if (city !== null) builder.where({ city: city[0].name });
        if (filters.takeOut) builder.where({ has_take_out: true });
        if (filters.parking) builder.where({ has_parking_space: true });
        if (filters.romantic) builder.where({ romantic: true });
        if (filters.intimate) builder.where({ intimate: true });
        if (filters.classy) builder.where({ classy: true });
        if (filters.trendy) builder.where({ trendy: true });
        if (filters.upscale) builder.where({ upscale: true });
        if (filters.casual) builder.where({ casual: true });
      });
    console.log(restaurants);
    res.json(restaurants);
  } catch (err) {
    console.error("Error loading restaurants!", err);
    res.sendStatus(500);
  }
});

const parser = string => {
  const filters = {};
  string.split(":").forEach(param => {
    if (param[0] === "S") filters.stateId = Number(param.slice(1));
    if (param[0] === "C") filters.cityId = Number(param.slice(1));
    if (param === "T") filters.takeOut = true;
    if (param === "P") filters.parking = true;
    if (param[0] === "A") {
      if (param[1] === "1") filters.romantic = true;
      if (param[1] === "2") filters.intimate = true;
      if (param[1] === "3") filters.classy = true;
      if (param[1] === "4") filters.trendy = true;
      if (param[1] === "5") filters.upscale = true;
      if (param[1] === "6") filters.casual = true;
    }
  });
  return filters;
};

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;

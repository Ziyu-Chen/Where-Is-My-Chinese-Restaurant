const fs = require("fs");
const db = require("../server/knex.js");

const insertData = async () => {
  await deleteCities();
  await deleteStates();
  await deleteRestaurants();
  await insertRestaurants();
  await insertStates();
  await insertCities();
};

async function deleteStates() {
  try {
    await db("states").delete();
  } catch (e) {
    console.error("Error: ", e);
  }
}

async function insertStates() {
  try {
    const states = JSON.parse(fs.readFileSync("./data/states.json"));
    for (const state of states) {
      const id = state.id;
      const name = state.name;
      await db("states").insert({
        id,
        name
      });
    }
  } catch (e) {
    console.error("Error inserting states", e);
  }
}

async function deleteCities() {
  try {
    await db("cities").delete();
  } catch (e) {
    console.error("Error: ", e);
  }
}

async function insertCities() {
  try {
    const cities = JSON.parse(fs.readFileSync("./data/cities.json"));
    for (const city of cities) {
      const id = city.id;
      const name = city.name;
      const state_id = city.state_id;
      await db("cities").insert({
        id,
        name,
        state_id
      });
    }
  } catch (e) {
    console.error("Error inserting cities", e);
  }
}

async function deleteRestaurants() {
  try {
    await db("restaurants").delete();
  } catch (e) {
    console.error("Error: ", e);
  }
}

async function insertRestaurants() {
  try {
    const restaurants = JSON.parse(fs.readFileSync("./data/restaurants.json"));
    for (const restaurant of restaurants) {
      const name = restaurant.name;
      const address = restaurant.address;
      const city = restaurant.city;
      const state = restaurant.state;
      const postal_code = restaurant.postal_code;
      const latitude = restaurant.latitude;
      const longitude = restaurant.longitude;
      const stars = restaurant.stars;
      const noise_level = restaurant.noise_level;
      const price_range = restaurant.price_range;
      const has_take_out = restaurant.has_take_out === "True" ? true : false;
      const has_parking_space = restaurant.has_parking_space;
      const reservation_needed =
        restaurant.reservation_needed === "True" ? true : false;
      const romantic = restaurant.romantic === 1 ? true : false;
      const intimate = restaurant.intimate === 1 ? true : false;
      const classy = restaurant.classy === 1 ? true : false;
      const trendy = restaurant.trendy === 1 ? true : false;
      const upscale = restaurant.upscale === 1 ? true : false;
      const casual = restaurant.casual === 1 ? true : false;
      const categories = restaurant.categories;
      const photo_id = restaurant.photo_id;
      const business_id = restaurant.id;
      await db("restaurants").insert({
        name,
        address,
        city,
        state,
        postal_code,
        latitude,
        longitude,
        stars,
        noise_level,
        price_range,
        has_take_out,
        has_parking_space,
        reservation_needed,
        romantic,
        intimate,
        classy,
        trendy,
        upscale,
        casual,
        categories,
        photo_id,
        business_id
      });
    }
  } catch (e) {
    console.error("Error inserting restaurants", e);
  }
}

module.exports = insertData;

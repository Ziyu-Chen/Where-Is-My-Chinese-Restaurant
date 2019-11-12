import axios from "axios";

const setStates = states => ({
  type: "SET_STATES",
  states
});

const setCities = cities => ({
  type: "SET_CITIES",
  cities
});

const setRestaurants = restaurants => ({
  type: "SET_RESTAURANTS",
  restaurants
});

const apologize = err => ({ type: "SORRY", err });

export const getAllRestaurants = async dispatch => {
  try {
    const { data: restaurants } = await axios.get(
      "http://localhost:9000/api/restaurants"
    );
    console.log(restaurants);
    return dispatch(setRestaurants(restaurants));
  } catch (err) {
    return dispatch(apologize(err));
  }
};

export const getAllStates = async dispatch => {
  try {
    const { data: states } = await axios.get(
      "http://localhost:9000/api/states"
    );
    return dispatch(setStates(states));
  } catch (err) {
    return dispatch(apologize(err));
  }
};

export const getAllCities = async dispatch => {
  try {
    const { data: cities } = await axios.get(
      "http://localhost:9000/api/cities"
    );
    return dispatch(setCities(cities));
  } catch (err) {
    return dispatch(apologize(err));
  }
};

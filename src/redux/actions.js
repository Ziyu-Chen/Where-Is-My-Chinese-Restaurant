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

export const selectState = stateId => ({
  type: "SELECT_STATE",
  stateId
});

export const selectCity = cityId => ({
  type: "SELECT_CITY",
  cityId
});

export const clickTakeOut = () => ({
  type: "CLICK_TAKEOUT"
});

export const clickParking = () => ({
  type: "CLICK_PARKING"
});

export const clickAmbience = id => ({
  type: "CLICK_AMBIENCE",
  id: Number(id)
});

const apologize = err => ({ type: "SORRY", err });

export const getAllRestaurants = async dispatch => {
  try {
    const { data: restaurants } = await axios.get("/api/restaurants");
    return dispatch(setRestaurants(restaurants));
  } catch (err) {
    return dispatch(apologize(err));
  }
};

export const getSomeRestaurants = string => {
  return async dispatch => {
    try {
      console.log(string);
      const { data: restaurants } = await axios.get(
        `/api/restaurants/${string}`
      );
      return dispatch(setRestaurants(restaurants));
    } catch (err) {
      return dispatch(apologize(err));
    }
  };
};

export const getAllStates = async dispatch => {
  try {
    const { data: states } = await axios.get("/api/states");
    return dispatch(setStates(states));
  } catch (err) {
    return dispatch(apologize(err));
  }
};

export const getAllCities = async dispatch => {
  try {
    const { data: cities } = await axios.get("/api/cities");
    return dispatch(setCities(cities));
  } catch (err) {
    return dispatch(apologize(err));
  }
};

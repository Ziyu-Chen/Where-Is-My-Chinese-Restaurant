import * as thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const initialState = {
  states: [],
  cities: [],
  restaurants: []
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_STATES": {
      return {
        states: action.states,
        cities: state.cities,
        restaurants: state.restaurants
      };
    }
    case "SET_CITIES": {
      return {
        states: state.states,
        cities: action.cities,
        restaurants: state.restaurants
      };
    }
    case "SET_RESTAURANTS": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: action.restaurants
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(thunk.default));

export default store;

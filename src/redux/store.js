import * as thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const initialState = {
  states: [],
  cities: [],
  restaurants: [],
  selectedCity: null,
  selectedState: null
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_STATES": {
      return {
        states: action.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity
      };
    }
    case "SET_CITIES": {
      return {
        states: state.states,
        cities: action.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity
      };
    }
    case "SET_RESTAURANTS": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: action.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity
      };
    }
    case "SELECT_STATE": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: action.stateId,
        selectedCity: state.selectedCity
      };
    }
    case "SELECT_CITY": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: action.cityId
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(thunk.default));

export default store;

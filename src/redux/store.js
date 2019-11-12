import * as thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const initialState = {
  states: [],
  cities: [],
  restaurants: [],
  selectedState: null,
  selectedCity: null,
  selectedTakeOut: false,
  selectedParking: false,
  selectedAmbiences: [false, false, false, false, false, false]
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
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "SET_CITIES": {
      return {
        states: state.states,
        cities: action.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "SET_RESTAURANTS": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: action.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "SELECT_STATE": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: action.stateId,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "SELECT_CITY": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: action.cityId,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "CLICK_TAKEOUT": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: !state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "CLICK_PARKING": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: !state.selectedParking,
        selectedAmbiences: state.selectedAmbiences
      };
    }
    case "CLICK_AMBIENCE": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: [
          ...state.selectedAmbiences.slice(0, action.id - 1),
          !state.selectedAmbiences[action.id - 1],
          ...state.selectedAmbiences.slice(action.id)
        ]
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(thunk.default));

export default store;

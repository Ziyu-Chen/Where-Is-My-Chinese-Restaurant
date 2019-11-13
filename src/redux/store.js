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
  selectedAmbiences: [false, false, false, false, false, false],
  starMin: 3,
  starMax: 5,
  priceMin: 1,
  priceMax: 4
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
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
        ],
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
      };
    }
    case "CHANGE_STAR_MIN": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences,
        starMin: action.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
      };
    }
    case "CHANGE_STAR_MAX": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: action.starMax,
        priceMin: state.priceMin,
        priceMax: state.priceMax
      };
    }
    case "CHANGE_PRICE_MIN": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: action.priceMin,
        priceMax: state.priceMax
      };
    }
    case "CHANGE_PRICE_MAX": {
      return {
        states: state.states,
        cities: state.cities,
        restaurants: state.restaurants,
        selectedState: state.selectedState,
        selectedCity: state.selectedCity,
        selectedTakeOut: state.selectedTakeOut,
        selectedParking: state.selectedParking,
        selectedAmbiences: state.selectedAmbiences,
        starMin: state.starMin,
        starMax: state.starMax,
        priceMin: state.priceMin,
        priceMax: action.priceMax
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(thunk.default));

export default store;

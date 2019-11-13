import React from "react";
import Locations from "./filters/Locations.jsx";
import Services from "./filters/Services.jsx";
import Ambiences from "./filters/Ambiences.jsx";
import { getSomeRestaurants } from "../redux/actions";
import { connect } from "react-redux";
import "./Filters.css";

const Filters = props => {
  return (
    <div id="filters">
      <Locations />
      <Services />
      <Ambiences />
      <button
        type="button"
        onClick={() => {
          const params = [];
          if (props.selectedState !== null)
            params.push("S" + String(props.selectedState));
          if (props.selectedCity !== null)
            params.push("C" + String(props.selectedCity));
          if (props.selectedTakeOut) params.push("T");
          if (props.selectedParking) params.push("P");
          for (let i = 0; i < props.selectedAmbiences.length; i++) {
            if (props.selectedAmbiences[i]) params.push(`A${i + 1}`);
          }
          params.push("X" + String(props.starMin) + String(props.starMax));
          params.push("P" + String(props.priceMin) + String(props.priceMax));
          console.log(params);
          return props.getSomeRestaurants(params.join(":"));
        }}
      >
        SEARCH
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
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
};

const mapDispatchToProps = dispatch => {
  return {
    getSomeRestaurants: params => dispatch(getSomeRestaurants(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

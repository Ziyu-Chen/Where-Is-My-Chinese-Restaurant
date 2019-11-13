import React from "react";
import Locations from "./filters/Locations.jsx";
import Services from "./filters/Services.jsx";
import Ambiences from "./filters/Ambiences";
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
          console.log(props.selectedAmbiences);
          for (let i = 0; i < props.selectedAmbiences.length; i++) {
            if (props.selectedAmbiences[i]) params.push(`A${i + 1}`);
          }
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
    selectedAmbiences: state.selectedAmbiences
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

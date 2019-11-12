import React from "react";
import Locations from "./filters/Locations.jsx";
import { getSomeRestaurants } from "../redux/actions";
import { connect } from "react-redux";

const Filters = props => {
  return (
    <div id="filters">
      <Locations />
      <button
        type="button"
        onClick={() => {
          const params = [];
          if (props.selectedState !== null)
            params.push("S" + String(props.selectedState));
          if (props.selectedCity !== null)
            params.push("C" + String(props.selectedCity));
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
    selectedCity: state.selectedCity
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

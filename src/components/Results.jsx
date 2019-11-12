import React from "react";
import { connect } from "react-redux";

const Results = props => (
  <div id="results">
    {props.restaurants.map((restaurant, index) => (
      <div className="restaurant">
        <div className="name">{restaurant.name}</div>
        <div className="address">{restaurant.address}</div>
        <div className="city">{restaurant.city}</div>
        <div className="state">{restaurant.state}</div>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps)(Results);

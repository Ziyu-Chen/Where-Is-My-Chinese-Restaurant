import React from "react";
import { connect } from "react-redux";
import { clickTakeOut, clickParking } from "../../redux/actions";
import "./Services.css";

const Services = props => {
  return (
    <div id="services">
      <form>
        <div className="takeout">
          <label for="takeout">Has Take-Out Menu</label>
          <input
            type="checkbox"
            value="1"
            name="takeout"
            onChange={props.clickTakeOut}
          />
        </div>
        <div className="takeout">
          <label for="takeout">Provides Parking Spaces</label>
          <input
            type="checkbox"
            value="2"
            name="parking"
            onChange={props.clickParking}
          />
        </div>
        <br />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clickTakeOut: () => dispatch(clickTakeOut()),
    clickParking: () => dispatch(clickParking())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Services);

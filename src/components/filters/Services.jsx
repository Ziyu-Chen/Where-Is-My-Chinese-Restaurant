import React from "react";
import { connect } from "react-redux";
import { clickTakeOut, clickParking } from "../../redux/actions";
import "./Services.css";

const Services = props => {
  return (
    <div id="services">
      <form>
        <input type="checkbox" value="1" onChange={props.clickTakeOut} /> Has
        Take-Out Menu
        <br />
        <input type="checkbox" value="2" onChange={props.clickParking} /> Provides Parking Spaces
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

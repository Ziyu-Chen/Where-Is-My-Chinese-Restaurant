import React from "react";
import { connect } from "react-redux";
import { clickTakeOut, clickParking } from "../../redux/actions";

const Services = props => {
  return (
    <div id="services">
      <form>
        <input type="checkbox" value="1" onChange={props.clickTakeOut} /> HAS
        TAKE OUT
        <br />
        <input type="checkbox" value="2" onChange={props.clickParking} /> HAS
        PARKING SPACE
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

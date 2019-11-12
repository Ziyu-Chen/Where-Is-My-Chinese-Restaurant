import React from "react";
import { connect } from "react-redux";
import { clickAmbience } from "../../redux/actions";

const Ambiences = props => {
  return (
    <div id="ambiences">
      <form>
        <input
          type="checkbox"
          value="1"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        ROMANTIC
        <br />
        <input
          type="checkbox"
          value="2"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        INTIMATE
        <br />
        <input
          type="checkbox"
          value="3"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        CLASSY
        <br />
        <input
          type="checkbox"
          value="4"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        TRENDY
        <br />
        <input
          type="checkbox"
          value="5"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        UPSCALE
        <br />
        <input
          type="checkbox"
          value="6"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        CASUAL
        <br />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clickAmbience: id => {
      console.log(id);
      dispatch(clickAmbience(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Ambiences);

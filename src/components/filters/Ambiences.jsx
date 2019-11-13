import React from "react";
import { connect } from "react-redux";
import { clickAmbience } from "../../redux/actions";
import "./Ambiences.css";

const Ambiences = props => {
  return (
    <div id="ambiences">
      <form>
        <input
          type="checkbox"
          value="1"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        Romantic
        <br />
        <input
          type="checkbox"
          value="2"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        Intimate
        <br />
        <input
          type="checkbox"
          value="3"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        Classy
        <br />
        <input
          type="checkbox"
          value="4"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        Trendy
        <br />
        <input
          type="checkbox"
          value="5"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        Upscale
        <br />
        <input
          type="checkbox"
          value="6"
          onChange={e => props.clickAmbience(e.target.value)}
        />{" "}
        Casual
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

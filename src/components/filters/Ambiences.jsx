import React from "react";
import { connect } from "react-redux";
import { clickAmbience } from "../../redux/actions";
import "./Ambiences.css";

const Ambiences = props => {
  return (
    <div id="ambiences">
      <form>
        <div className="ambience-selector">
          <label for="romantic">Romantic</label>
          <input
            type="checkbox"
            value="1"
            name="romantic"
            onChange={e => props.clickAmbience(e.target.value)}
          />
        </div>
        <div className="ambience-selector">
          <label for="intimate">Intimate</label>
          <input
            type="checkbox"
            value="2"
            name="intimate"
            onChange={e => props.clickAmbience(e.target.value)}
          />
        </div>
        <div className="ambience-selector">
          <label for="classy">Classy</label>
          <input
            type="checkbox"
            value="3"
            name="classy"
            onChange={e => props.clickAmbience(e.target.value)}
          />
        </div>
        <div className="ambience-selector">
          <label for="trendy">Trendy</label>
          <input
            type="checkbox"
            value="4"
            name="trendy"
            onChange={e => props.clickAmbience(e.target.value)}
          />
        </div>
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

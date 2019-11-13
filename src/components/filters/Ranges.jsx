import React from "react";
import { connect } from "react-redux";
import {
  changeStarMin,
  changeStarMax,
  changePriceMin,
  changePriceMax
} from "../../redux/actions";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

const Ranges = props => {
  return (
    <div id="ranges">
      <div id="star">
        <InputRange
          step={1}
          maxValue={5}
          minValue={3}
          value={{ min: props.starMin, max: props.starMax }}
          onChange={value => {
            console.log(value);
            props.changeStarMin(value.min);
            props.changeStarMax(value.max);
          }}
        />
      </div>
      <div id="price">
        <InputRange
          step={1}
          maxValue={4}
          minValue={1}
          value={{ min: props.priceMin, max: props.priceMax }}
          onChange={value => {
            console.log(value);
            props.changePriceMin(value.min);
            props.changePriceMax(value.max);
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    starMin: state.starMin,
    starMax: state.starMax,
    priceMin: state.priceMin,
    priceMax: state.priceMax
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStarMin: starMin => dispatch(changeStarMin(starMin)),
    changeStarMax: starMax => dispatch(changeStarMax(starMax)),
    changePriceMin: priceMin => dispatch(changePriceMin(priceMin)),
    changePriceMax: priceMax => dispatch(changePriceMax(priceMax))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ranges);

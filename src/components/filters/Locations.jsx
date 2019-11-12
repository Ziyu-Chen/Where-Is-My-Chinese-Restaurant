import React from "react";
import { connect } from "react-redux";
import { selectState, selectCity } from "../../redux/actions";

const Locations = props => {
  return (
    <div id="locations">
      <div id="states">
        <select
          className="state-options"
          onChange={e => props.selectState(e.target.value)}
        >
          <option selected value="X">
            -- STATE --
          </option>
          {props.states.map(state => (
            <option value={state.id}>{state.name}</option>
          ))}
        </select>
      </div>
      <div id="cities">
        <select
          className="city-options"
          onChange={e => props.selectCity(e.target.value)}
        >
          <option selected value="X">
            -- CITY --
          </option>
          {props.selectedState === null
            ? props.cities.map(city => (
                <option value={city.id}>{city.name}</option>
              ))
            : props.cities
                .filter(city => {
                  return Number(city.state_id) === Number(props.selectedState);
                })
                .map(city => <option value={city.id}>{city.name}</option>)}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    states: state.states,
    cities: state.cities,
    selectedState: state.selectedState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectState: stateId => {
      return dispatch(selectState(stateId));
    },
    selectCity: cityId => dispatch(selectCity(cityId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);

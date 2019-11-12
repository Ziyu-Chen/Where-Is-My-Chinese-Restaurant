import React, { Component } from "react";
import "./App.css";
import LeafletMap from "./components/LeafletMap.jsx";
import Filters from "./components/Filters.jsx";
import Results from "./components/Results.jsx";
import { getAllStates, getAllCities, getAllRestaurants } from "./redux/actions";
import { connect } from "react-redux";

class App extends Component {
  async componentDidMount() {
    console.log("Component created!");
    await this.props.getAllStates();
    await this.props.getAllCities();
    await this.props.getAllRestaurants();
  }
  render() {
    return (
      <div id="app">
        <LeafletMap />
        <Filters />
        <Results />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getAllStates: () => dispatch(getAllStates),
    getAllCities: () => dispatch(getAllCities),
    getAllRestaurants: () => dispatch(getAllRestaurants)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

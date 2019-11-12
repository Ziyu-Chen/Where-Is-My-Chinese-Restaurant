import React, { Component } from "react";
import "./App.css";
import LeafletMap from "./components/LeafletMap.jsx";
import Results from "./components/Results.jsx";
import { getAllRestaurants } from "./redux/actions";
import { connect } from "react-redux";

class App extends Component {
  async componentDidMount() {
    console.log("Component created!");
    this.props.getAllRestaurants();
    console.log(this.props.restaurants);
  }
  render() {
    return (
      <div id="app">
        <LeafletMap />
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
    getAllRestaurants: () => dispatch(getAllRestaurants)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

import { connect } from "react-redux";
import icon from "./icon";

import "leaflet/dist/leaflet.css";
import "./LeafletMap.css";

const position = [45, -100];
const LeafletMap = props => (
  <Map center={position} zoom={4}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    {props.positions.map((position, index) => (
      <Marker position={position} icon={icon} key={index}></Marker>
    ))}
  </Map>
);

const mapStateToProps = state => {
  return {
    positions: state.restaurants.map(restaurant => [
      restaurant.latitude,
      restaurant.longitude
    ])
  };
};

export default connect(mapStateToProps)(LeafletMap);

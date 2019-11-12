import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

import { connect } from "react-redux";

import "leaflet/dist/leaflet.css";
import "./LeafletMap.css";

const position = [31.2304, 121.4737];
const LeafletMap = () => (
  <Map center={position} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        <span>
          A pretty CSS3 popup. <br /> Easily customizable.
        </span>
      </Popup>
    </Marker>
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

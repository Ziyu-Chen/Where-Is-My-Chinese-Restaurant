import L from "leaflet";

const icon = new L.Icon({
  iconUrl: require("../assets/marker.png"),
  iconRetinaUrl: require("../assets/marker.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon"
});

export default icon;

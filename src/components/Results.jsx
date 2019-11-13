import React from "react";
import { connect } from "react-redux";
import "./Results.css";

const Results = props => (
  <div id="results">
    <div id="number-of-results">
      {"WE FOUND " + props.restaurants.length + " RESTAURANT(S)"}
    </div>
    {props.restaurants.map((restaurant, index) => (
      <div className="restaurant">
        <div className="label">Name: </div>
        <div className="name">{restaurant.name}</div>
        <div className="label">Address: </div>
        <div className="address">
          {restaurant.address +
            ", " +
            restaurant.city +
            ", " +
            restaurant.state}
        </div>
        <div className="label">Price Range</div>
        <div className="price">{restaurant.price_range}</div>
        <div className="label">Stars: </div>
        <div className="stars">{restaurant.stars}</div>
        <div className="label">Noise Level: </div>
        <div className="noise">
          {restaurant.noise_level[0].toUpperCase() +
            restaurant.noise_level.slice(1)}
        </div>
        <div className="ambiences">
          <div className="label">Ambience: </div>
          {restaurant.romantic ? (
            <div className="romantic">Romantic</div>
          ) : (
            <div></div>
          )}
          {restaurant.intimate ? (
            <div className="intimate">Intimate</div>
          ) : (
            <div></div>
          )}
          {restaurant.classy ? (
            <div className="classy">Classy</div>
          ) : (
            <div></div>
          )}
          {restaurant.trendy ? (
            <div className="trendy">Trendy</div>
          ) : (
            <div></div>
          )}
          {restaurant.upscale ? (
            <div className="upscale">Upscale</div>
          ) : (
            <div></div>
          )}
          {restaurant.casual ? (
            <div className="casual">Casual</div>
          ) : (
            <div></div>
          )}
        </div>
        {restaurant.has_take_out ? (
          <div className="takeout">Has Take-Out Menu</div>
        ) : (
          <div className="takeout">Doesn't Have Take-Out Menu</div>
        )}
        {restaurant.has_parking_space ? (
          <div className="parking">Provides Parking Spaces</div>
        ) : (
          <div className="parking">Doesn't Provide Parking Spaces</div>
        )}
        {restaurant.reservation_needed ? (
          <div className="reservation">Needs Reservation</div>
        ) : (
          <div className="reservation">Doesn't Need Reservation</div>
        )}
        {restaurant.photo_id ? (
          <img
            className="restaurant-img"
            src={`https://s3-media1.fl.yelpcdn.com/bphoto/${restaurant.photo_id}/o.jpg`}
          />
        ) : (
          <div></div>
        )}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps)(Results);

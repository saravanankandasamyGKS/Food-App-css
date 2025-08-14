import React from "react";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resData }) => {
  //const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")}</p>
      <p className="res-rating">⭐ {avgRating}</p>
      <h4 className="res-price">{costForTwo}</h4>
      <h4 className="res-time">{sla?.slaString}</h4>
    </div>
  );
}; 
//Higher order components

//input-RestaurentCard =>RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-wrapper">
        <span className="promoted-label">Promoted</span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;

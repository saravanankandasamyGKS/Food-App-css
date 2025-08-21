import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9226449&lng=77.6174197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();

      setListOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("Failed to fetch restaurant data:", error || "Unknown error");
      alert("INSTALL ACCESS CONTROLL ALLOW ORIGIN EXTENSION IN CROME BROWSER TO VIEW RESTAURANTS");
    } finally {
      console.log("Fetch attempt finished.");
    }
  };
  if (onlineStatus === false) {
    return (
      <div className="center-container">
        <div className="center-content">
          <h1>You are Offline</h1>
        </div>
      </div>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const listOfRestaurant1 = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestaurant(listOfRestaurant1);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant2 = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredRestaurant2);
          }}
        >
          Top Rated restaurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            {restaurant.info.availability ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

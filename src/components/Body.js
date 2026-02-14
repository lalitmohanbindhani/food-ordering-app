import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    console.log(listOfRestaurants);
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100  rounded-lg hover:bg-green-200"
            onClick={() => {
              const filtereRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filtereRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.6,
              );
              setListOfRestaurants(filteredList);
            }}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

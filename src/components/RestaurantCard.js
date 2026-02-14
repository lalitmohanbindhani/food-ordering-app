import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData.info;

  return (
    <div className="m-4 p-4 w-[220px] bg-gray-100 hover:bg-gray-200 shadow-lg">
      <img
        className="w-[100%] h-33 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;

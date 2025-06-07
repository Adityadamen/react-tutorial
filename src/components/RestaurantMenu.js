import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { Menu_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import resList from "../utils/mockData";

const RestaurantMenu = () => {

    const {resID}= useParams();
    // const resInfo = useRestaurantMenu(resID);
    console.log("meow")
    console.log(resList)

    if (resList==null) return (<Shimmer/>);
    const {name,cuisines,costForTwoMessage}= resList?.info;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h2> Menu</h2>
        <ul>
            
        </ul>
      
    </div>
  )
}

export default RestaurantMenu

import React, { useState } from 'react'
import { useEffect } from 'react';
import { Menu_API } from "../utils/constants";

const useRestaurantMenu = (resID) => {
    /// fetch data

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async() =>{
        const data = await fetch(Menu_API+resID);
        const json = await data.json();
        setResInfo(json.data);

    }

  return resInfo;
}

export default useRestaurantMenu;

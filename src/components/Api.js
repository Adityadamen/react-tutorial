import React, { useEffect, useState } from "react";
import RestaurantTable from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";

const Api = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <Shimmer />;
  }

  return <RestaurantTable data={data} />;
};

export default Api;
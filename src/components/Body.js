import RestaurantTable from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfStocks, setListOfStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Check online status
  const onlineStatus = useOnlineStatus();

  // Load mock data on component mount
  useEffect(() => {
    setListOfStocks(resList);
    setFilteredStocks(resList);
  }, []);

  // Handle offline status
  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-red-500 font-bold text-xl">
        Looks like you are disconnected!!!
      </h1>
    );
  }

  // Show shimmer while data is loading
  if (listOfStocks.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="border p-2 rounded w-1/2"
          placeholder="Search by Symbol Name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
          onClick={() => {
            const filtered = listOfStocks.filter((stock) =>
              stock.SYMBOL_NAME.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredStocks(filtered);
          }}
        >
          Search
        </button>
      </div>

      {/* Stock Table */}
      <RestaurantTable data={filteredStocks} />
    </div>
  );
};

export default Body;
import React, { useState } from "react";

const RestaurantTable = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [dropdowns, setDropdowns] = useState({
    SYMBOL_NAME: false,
    TRADE_DATE: false,
    OPEN_PRICE: false,
    HIGH_PRICE: false,
    LOW_PRICE: false,
    CLOSE_PRICE: false,
    VOLUME_DATA: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (column) => {
    setDropdowns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  // Handle filter selection
  const handleFilterSelection = (column, value) => {
    const newFilteredData = data.filter((row) => row[column] === value);
    setFilteredData(newFilteredData);

    // Close the dropdown
    setDropdowns((prev) => ({
      ...prev,
      [column]: false,
    }));
  };

  // Get unique values for a column
  const getUniqueValues = (column) => {
    return [...new Set(data.map((row) => row[column]))];
  };

  return (
    <div className="m-4 p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          {/* Column Filters */}
          <tr className="bg-gray-100">
            {["SYMBOL_NAME", "TRADE_DATE", "OPEN_PRICE", "HIGH_PRICE", "LOW_PRICE", "CLOSE_PRICE", "VOLUME_DATA"].map(
              (column) => (
                <th key={column} className="border border-gray-300 px-4 py-2 relative">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => toggleDropdown(column)}
                  >
                    Filter
                  </button>
                  {dropdowns[column] && (
                    <div className="absolute bg-white border border-gray-300 mt-2 max-h-40 overflow-y-auto z-10">
                      {getUniqueValues(column).map((value, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleFilterSelection(column, value)}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  )}
                </th>
              )
            )}
          </tr>
          {/* Column Headers */}
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Symbol Name</th>
            <th className="border border-gray-300 px-4 py-2">Trade Date</th>
            <th className="border border-gray-300 px-4 py-2">Open Price</th>
            <th className="border border-gray-300 px-4 py-2">High Price</th>
            <th className="border border-gray-300 px-4 py-2">Low Price</th>
            <th className="border border-gray-300 px-4 py-2">Close Price</th>
            <th className="border border-gray-300 px-4 py-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{row.SYMBOL_NAME}</td>
              <td className="border border-gray-300 px-4 py-2">{row.TRADE_DATE}</td>
              <td className="border border-gray-300 px-4 py-2">₹{row.OPEN_PRICE}</td>
              <td className="border border-gray-300 px-4 py-2">₹{row.HIGH_PRICE}</td>
              <td className="border border-gray-300 px-4 py-2">₹{row.LOW_PRICE}</td>
              <td className="border border-gray-300 px-4 py-2">₹{row.CLOSE_PRICE}</td>
              <td className="border border-gray-300 px-4 py-2">{row.VOLUME_DATA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantTable;
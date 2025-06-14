import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="border p-2 rounded w-1/2"
          placeholder="Search by Symbol Name..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded ml-2">Search</button>
      </div>

      {/* API Buttons */}
      <div className="mb-4 flex space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate("/api1")}
        >
          API 1
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate("/api2")}
        >
          API 2
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate("/api3")}
        >
          API 3
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate("/api4")}
        >
          API 4
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate("/api5")}
        >
          API 5
        </button>
      </div>
    </div>
  );
};

export default Body;
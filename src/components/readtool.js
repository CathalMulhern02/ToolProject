import { useState, useEffect } from "react"; // Manage component state and lifecycle
import axios from "axios"; // HTTP client for API calls
import Tools from "./tools"; // Component to render the list of tools

function ReadTool() {
  // State management
  const [data, setData] = useState([]); // Full dataset from the API
  const [filteredData, setFilteredData] = useState([]); // Filtered dataset based on search
  const [searchQuery, setSearchQuery] = useState(""); // Search query entered by the user

  // Function to fetch tools data from the API
  const Reload = () => {
    axios.get("http://localhost:4000/api/tools")
      .then((response) => {
        setData(response.data); // Store the full dataset
        setFilteredData(response.data); // Initialize filteredData to show all tools
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  // Load data when the component is mounted
  useEffect(() => {
    Reload();
  }, []);

  // Filter tools based on the search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Case-insensitive matching
    setSearchQuery(query); // Update searchQuery state
    const filtered = data.filter((tool) =>
      tool.name.toLowerCase().includes(query) || 
      tool.state.toLowerCase().includes(query) || 
      tool.price.toString().includes(query) // Filter by name, state, or price
    );
    setFilteredData(filtered); // Update filtered data
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
        Tools in the Van
      </h2>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search tools by name, state, or price"
          value={searchQuery}
          onChange={handleSearch} // Filter data on input change
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>

      {/* Display Filtered Tools */}
      <Tools myTools={filteredData} ReloadData={Reload} />
    </div>
  );
}

export default ReadTool;

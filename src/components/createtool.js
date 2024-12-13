import React, { useState } from "react"; // React for component, useState for state management
import axios from "axios"; // Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // useNavigate for navigation after form submission

const CreateTool = () => {
  // State hooks to manage input field values
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate(); // Navigation function to redirect users

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newTool = { name, state, price, image }; // Create a new tool object
    console.log(newTool); // Log the tool object for debugging

    // Send a POST request to the server to add the new tool
    axios.post('http://localhost:4000/api/tools', newTool)
      .then((res) => {
        console.log(res.data); // Log the server response
        navigate('/readtool'); // Redirect to the "View Tools" page
      })
      .catch((err) => console.error(err)); // Log errors if the request fails
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Tool</h2>
      
      {/* Form to create a new tool */}
      <form 
        onSubmit={handleSubmit} 
        className="p-4 shadow rounded" 
        style={{ backgroundColor: "#f8f9fa" }}
      >
        {/* Tool Name Field */}
        <div className="form-group mb-3">
          <label className="form-label">Tool Name:</label>
          <input 
            type="text"
            className="form-control"
            value={name} // Bind input value to state
            onChange={(e) => setName(e.target.value)} // Update state on input change
            placeholder="Enter tool name"
            required
          />
        </div>

        {/* Tool State Dropdown */}
        <div className="form-group mb-3">
          <label className="form-label">Tool State:</label>
          <select 
            className="form-control"
            value={state} // Bind selected value to state
            onChange={(e) => setState(e.target.value)} // Update state on selection change
            required
          >
            <option value="">Select tool state</option>
            <option value="In use">In use</option>
            <option value="Broken">Broken</option>
            <option value="In van">In van</option>
          </select>
        </div>

        {/* Tool Price Field */}
        <div className="form-group mb-3">
          <label className="form-label">Tool Price:</label>
          <input 
            type="number"
            className="form-control"
            value={price} // Bind input value to state
            onChange={(e) => setPrice(e.target.value)} // Update state on input change
            min="0" // Ensure non-negative values
            placeholder="Enter price"
            required
          />
        </div>

        {/* Tool Image URL Field */}
        <div className="form-group mb-4">
          <label className="form-label">Tool Image URL:</label>
          <input 
            type="text"
            className="form-control"
            value={image} // Bind input value to state
            onChange={(e) => setImage(e.target.value)} // Update state on input change
            placeholder="Enter image URL"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Add Tool
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTool;

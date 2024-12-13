import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTool = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTool = { name, state, price, image };
    console.log(newTool);

    axios.post('http://localhost:4000/api/tools', newTool)
      .then((res) => {
        console.log(res.data);
        navigate('/readtool');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Tool</h2>
      <form 
        onSubmit={handleSubmit} 
        className="p-4 shadow rounded" 
        style={{ backgroundColor: "#f8f9fa" }}
      >
        {/* Tool Name */}
        <div className="form-group mb-3">
          <label className="form-label">Tool Name:</label>
          <input 
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter tool name"
            required
          />
        </div>

        {/* Tool State */}
        <div className="form-group mb-3">
          <label className="form-label">Tool State:</label>
          <select 
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select tool state</option>
            <option value="In use">In use</option>
            <option value="Broken">Broken</option>
            <option value="In van">In van</option>
          </select>
        </div>

        {/* Tool Price */}
        <div className="form-group mb-3">
          <label className="form-label">Tool Price:</label>
          <input 
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Tool Image URL */}
        <div className="form-group mb-4">
          <label className="form-label">Tool Image URL:</label>
          <input 
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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

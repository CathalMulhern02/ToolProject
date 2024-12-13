import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditTool() {
  let { id } = useParams();

  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/tool/' + id)
      .then((response) => {
        setName(response.data.name);
        setState(response.data.state);
        setPrice(response.data.price);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTool = { id, name, state, price, image };

    axios.put('http://localhost:4000/api/tool/' + id, updatedTool)
      .then((res) => {
        console.log(res.data);
        navigate('/readtool');
      });
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Tool</h2>
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
            Update Tool
          </button>
        </div>
      </form>
    </div>
  );
}

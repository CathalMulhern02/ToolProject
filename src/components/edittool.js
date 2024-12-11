import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditTool(props) {
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
        setImage(response.data.image);
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTool = { id, name, state, price, image};

    axios.put('http://localhost:4000/api/tool/' + id, newTool)
      .then((res) => {
        console.log(res.data);
        navigate('/readtool');
      });
  }

  return (
    <div>
        <h3>Hello from create component!</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add Tool Name: </label>
                <input type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Tool State: </label>
                <input type="text"
                    className="form-control"
                    value={state}
                    onChange={(e) => { setState(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Tool Price: </label>
                <input type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }}
                />


            </div>
            <div className="form-group">
                <label>Add Tool image: </label>
                <input type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => { setImage(e.target.value) }}
                />
            </div>
            <div>
                <input type="submit" value="Edit Tool"></input>
            </div>
        </form>
    </div>
);
}

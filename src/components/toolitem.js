import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

const ToolItem = (props) => {
  const handleDelete = (e) => {
    e.preventDefault(); 
    axios.delete('http://localhost:4000/api/tool/' + props.mytool._id)
        .then(() => {
            props.Reload();
        })
        .catch((error) => {
            console.error("Error deleting tool:", error);
        });
  };

  useEffect(() => {
    console.log("Tool Item:", props.mytool);
  }, [props.mytool]);

  return (
    <Card 
      style={{ 
        margin: "10px", 
        height: "450px", 
        background: "linear-gradient(to bottom, #e0e0e0, #bdbdbd)", 
        border: "1px solid #ccc" 
      }} 
      className="tool-card"
    >
      <Card.Header style={{ fontWeight: "bold" }}>{props.mytool.name}</Card.Header>
      <Card.Body>
        <img 
          src={props.mytool.image} 
          alt={props.mytool.name} 
          style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain", marginBottom: "10px" }}
        />
        <p style={{ fontSize: "1.1em", fontWeight: "bold" }}>
          Price: ${props.mytool.price}
        </p>
        <footer>{props.mytool.state}</footer>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link 
            className="btn btn-primary btn-sm" 
            to={"/edittool/" + props.mytool._id} 
            style={{ width: "45%" }}
          >
            Update
          </Link>
          <Button 
            className="btn btn-danger btn-sm" 
            onClick={handleDelete} 
            style={{ width: "45%" }}
          >
            Delete
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ToolItem;

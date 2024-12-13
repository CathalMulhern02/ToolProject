import { useEffect } from "react"; // Handle side effects
import Card from 'react-bootstrap/Card'; // Bootstrap card for layout
import Button from 'react-bootstrap/Button'; // Bootstrap button
import { Link } from "react-router-dom"; // Link for navigation
import axios from "axios"; // Axios for HTTP requests

const ToolItem = (props) => {
  // Handle deletion of the tool
  const handleDelete = (e) => {
    e.preventDefault(); 
    axios.delete('http://localhost:4000/api/tool/' + props.mytool._id) // Delete tool by ID
        .then(() => {
            props.Reload(); // Reload tools after deletion
        })
        .catch((error) => {
            console.error("Error deleting tool:", error);
        });
  };

  // Log tool data when it changes
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
      {/* Tool Name in Card Header */}
      <Card.Header style={{ fontWeight: "bold" }}>{props.mytool.name}</Card.Header>
      
      <Card.Body>
        {/* Tool Image */}
        <img 
          src={props.mytool.image} 
          alt={props.mytool.name} 
          style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain", marginBottom: "10px" }}
        />
        
        {/* Tool Price */}
        <p style={{ fontSize: "1.1em", fontWeight: "bold" }}>
          Price: ${props.mytool.price}
        </p>
        
        {/* Tool State */}
        <footer>{props.mytool.state}</footer>
      </Card.Body>
      
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Update Tool Button */}
          <Link 
            className="btn btn-primary btn-sm" 
            to={"/edittool/" + props.mytool._id} 
            style={{ width: "45%" }}
          >
            Update
          </Link>
          {/* Delete Tool Button */}
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

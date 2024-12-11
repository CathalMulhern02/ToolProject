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
    <div>
      <Card>
        <Card.Header>{props.mytool.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mytool.image} alt={props.mytool.name} />
            <footer>{props.mytool.state}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/edittool/" + props.mytool._id}>Update</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default ToolItem;

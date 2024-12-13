import { Link } from 'react-router-dom'; // Link for navigation between routes
import vanImage from './images/van.jpg'; // Import the image for the home page

const Home = () => {
  return (
    <div className="container text-center mt-5">
      {/* Page Title */}
      <h1 className="mb-4" style={{ fontWeight: "bold", color: "#333" }}>
        Welcome to Van Tool Organizer
      </h1>

      {/* Van Image with Overlay Buttons */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Display Van Image */}
        <img
          src={vanImage}
          alt="Van with tools"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
        {/* Buttons Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* Navigation to Add Tool */}
          <Link to="/createtool" className="btn btn-primary btn-lg">
            Add Tool (To Van)
          </Link>
          {/* Navigation to View Tools */}
          <Link to="/readtool" className="btn btn-secondary btn-lg">
            View Tools (In Van)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

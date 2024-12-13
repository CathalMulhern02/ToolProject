import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import the logo from the src/images directory
import logo from './images/logo.png';

const NavigationBar = () => {
  return (
    <Navbar 
      expand="lg" 
      style={{ 
        background: "linear-gradient(to bottom, #d3d3d3, #ffffff)", 
        borderBottom: "2px solid #ccc" 
      }} 
    >
      <Container>
        {/* Van Logo and Brand Name */}
        <Navbar.Brand href="/" style={{ fontWeight: "bold", fontSize: "1.5em", color: "#333" }}>
          <img 
            src={logo} // Imported logo
            alt="Van Logo" 
            style={{ width: '40px', marginRight: '10px' }}
          />
          Van Tool Organizer
        </Navbar.Brand>
        
        {/* Navigation Links */}
        <Nav className="ms-auto">
          <Nav.Link href="/createtool" style={{ fontSize: "1.2em", color: "#555", marginRight: "15px" }}>
            Add to VAN
          </Nav.Link>
          <Nav.Link href="/readtool" style={{ fontSize: "1.2em", color: "#555" }}>
            View Tools in VAN
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

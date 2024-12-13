import ToolItem from "./toolitem"; // Component to render individual tools
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap grid system

const Tools = (props) => {
    return (
        <Container>
            {/* Row for displaying tools */}
            <Row>
                {/* Map over tools and display each tool in a column */}
                {props.myTools.map((tool) => (
                    <Col md={4} key={tool._id}> {/* Display three tools per row */}
                        <ToolItem mytool={tool} Reload={props.ReloadData} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tools;

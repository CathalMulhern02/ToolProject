import ToolItem from "./toolitem";
import { Container, Row, Col } from "react-bootstrap";

const Tools = (props) => {
    return (
        <Container>
            <Row>
                {props.myTools.map((tool) => (
                    <Col md={4} key={tool._id}>
                        <ToolItem mytool={tool} Reload={props.ReloadData} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tools;

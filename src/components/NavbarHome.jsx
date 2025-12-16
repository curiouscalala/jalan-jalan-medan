import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavbarHome() {
    const navigate = useNavigate();

    const navToProfile = () => {
        navigate("/profile")
    }

    const navToHome = () => {
        navigate("*")
    }

    return (
        <Row>
            <Col sm={10}
                style={{ position: "sticky", top: 0 }}
            >
                <Button
                    style={{
                        margin: "light rounded-pill my-10",
                        backgroundColor: "transparent",
                        outline: "none",
                    }}
                    onClick={navToHome}
                    variant="outline-none">
                    <i
                        className="bi bi-globe-central-south-asia-fill"
                        style={{
                            color: "pink",
                            fontSize: "45px"
                        }}
                    ></i>
                </Button>
            </Col>
            <Col>
                <Button
                    className="top-right-element"
                    variant="outline-secondary"
                    onClick={navToProfile}
                    style={{ margin: "10px" }}>
                    <i className="bi bi-person"></i>
                    Profile</Button>
            </Col>
        </Row>
    )
}
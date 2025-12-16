import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TopBarProfile() {
    const navigate = useNavigate();

    const navToPreviousBooking = () => {
        navigate("/previousBooking");
    }

    const navToFutureBooking = () => {
        navigate('/futureBooking');
    }

    const navToTermsAndCondition = () => {
        navigate('/termsAndCondition')
    }

    const navToHome = () => {
        navigate("*")
    }

    return (
        //name
        <Row>
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
            <Col sm={4}>
                <Button
                    style={{
                        margin: "10px",
                        border: "none",
                        marginRight: "10px",
                        padding: "20px",
                        paddingLeft: "100px",
                        paddingRight: "100px",
                        fontSize: "15px",
                    }}
                    onClick={navToPreviousBooking}>
                    Previous Booking
                </Button>
            </Col>
            <Col sm={4}>
                <Button
                    style={{
                        margin: "10px",
                        border: "none",
                        marginRight: "10px",
                        padding: "20px",
                        paddingLeft: "100px",
                        paddingRight: "100px",
                        fontSize: "15px"
                    }}
                    onClick={navToFutureBooking}>
                    Future Booking
                </Button>
            </Col>
            <Col sm={4}>
                <Button
                    style={{
                        margin: "10px",
                        border: "none",
                        marginRight: "10px",
                        padding: "20px",
                        paddingLeft: "100px",
                        paddingRight: "100px",
                        fontSize: "15px"
                    }}
                    onClick={navToTermsAndCondition}>
                    Terms and Condition
                </Button>
            </Col>
        </Row >
    )
}
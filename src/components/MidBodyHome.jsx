import { Col, Image, Row } from "react-bootstrap";
import airport from "../assets/images/airport.png"
import mosque from "../assets/images/mosque.png"

export default function MidBodyHome() {

    return (
        <Row>
            <Col sm={4}>
                <Image
                    src={airport}
                    style={{
                        marginTop: "70px",
                        marginLeft: "15px",
                        width: "370px",
                        height: "250px"
                    }} />
            </Col>
            <Col sm={4}>
                <Image
                    src={mosque}
                    style={{
                        marginTop: "70px",
                        marginLeft: "0px",
                        width: "370px",
                        height: "250px"
                    }} />
            </Col>
        </Row>
    )
}
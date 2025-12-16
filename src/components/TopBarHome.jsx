import { useState } from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import NavbarHome from "./NavbarHome";

export default function TopBarHome() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [pax, setPax] = useState("");

    return (
        <Row>
            <NavbarHome />
            <h1 
            style={{ 
                fontWeight: "bold", 
                marginTop: "10px",
                marginLeft: "15px",
                color: "dodgerblue", 
                fontFamily: "sans-serif" }}>
                Jalan-Jalan Medan
            </h1>

            <Col sm={2} style={{ marginTop: "15px" }}>
                <Form.Group style={{ marginLeft: "15px" }}>
                    <Form.Label>From</Form.Label>
                    <br />
                    <Form.Control
                        label="From"
                        type="text"
                        placeholder="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </Form.Group>
            </Col>

            <Col sm={2} style={{ marginTop: "15px" }}>
                <Form.Label>To</Form.Label>
                <br />
                <Form.Control
                    type="text"
                    placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
            </Col>

            <Col sm={2} style={{ marginTop: "15px" }}>
                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <br />
                    <Form.Control
                        type="date"
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Form.Group>
            </Col>

            <Col sm={2} style={{ marginTop: "15px" }}>
                <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <br />
                    <Form.Control
                        type="date"
                        placeholder="End Date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Form.Group>
            </Col>

            <Col sm={2} style={{ marginTop: "15px" }}>
                <Form.Group>
                    <Form.Label>Pax</Form.Label>
                    <br />
                    <Form.Control
                        type="number"
                        placeholder="Pax"
                        value={pax}
                        min={0}
                        onChange={(e) => setPax(e.target.value)}
                    />
                </Form.Group>
            </Col>
        </Row>

    )
}
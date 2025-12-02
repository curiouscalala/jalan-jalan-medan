import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";


export default function Topbar() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [pax, setPax] = useState("");

    return (
        <Row
            sm={2}
            className="d-flex lex-row justify-content-start align-items-center bg-light vh-100 px-4 gap-3"
            style={{ position: "sticky", top: 0 }}
        >
            <Form>
                <Form.Control
                    className="mx-3"
                    type="text"
                    placeholder="From"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <Form.Control
                    className="mx-3"
                    type="text"
                    placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
                <Form.Control
                    className="mx-3"
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <Form.Control
                    className="mx-3"
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <Form.Control
                    className="mx-3"
                    type="number"
                    placeholder="Pax"
                    value={pax}
                    min={0}
                    onChange={(e) => setPax(e.target.value)}
                />
            </Form>
        </Row>

    )
}
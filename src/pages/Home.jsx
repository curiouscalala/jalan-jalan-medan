import { Row } from "react-bootstrap"
import TopBarHome from "../components/TopBarHome"
import MidBodyHome from "../components/MidBodyHome"

export default function Home() {
    return (
        <Row>
            <TopBarHome />
            <MidBodyHome />
        </Row>
    )
}
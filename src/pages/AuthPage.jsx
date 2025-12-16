import { Col, Row, Image, Button, Modal, Form } from "react-bootstrap";
import logoSquare from "../assets/images/logoSquare.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.png";
import { AuthContext } from "../components/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

export default function AuthPage() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");
    const auth = getAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [modalShow, setModalShow] = useState(null);
    const handleShowSignup = () => setModalShow("Signup");
    const handleShowLogin = () => setModalShow("Login");

    useEffect(() => {
        if (currentUser) navigate("*");
    }, [currentUser, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError("");

        try {
            await signInWithEmailAndPassword(
                auth,
                username,
                password
            );
        } catch (error) {
            console.log("Firebase error code:", error.code);
            console.log("Firebase error message:", error.message);

            const errorCode = error.code;
            let errorMessage = "Something went wrong. Please try again later.";

            switch (errorCode) {
                case "auth/invalid-credential":
                    errorMessage = "Incorrect email or password.";
                    break;
                case "auth/network-request-failed":
                    errorMessage = "Network error, please check your connection.";
                    break;
            }

            setLoginError(errorMessage);
        }
    };

    const handleClose = () => setModalShow(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                username,
                password
            );
            console.log(res.user);
        } catch (error) {
            console.error(error);
        }
    }

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Row>
            <Col sm={6}>
                <Image
                    src={logoSquare}
                    fluid
                    style={{ width: "600px", height: "740px" }} />
            </Col>

            <Col sm={6} className="p-4">
                <Button
                    style={{
                        margin: "light rounded-pill my-10",
                        backgroundColor: "transparent",
                        outline: "none",
                    }}
                    variant="outline-none">
                    <i
                        className="bi bi-globe-central-south-asia-fill"
                        style={{
                            color: "pink",
                            fontSize: "45px"
                        }}
                    ></i>
                </Button>
                <p className style={{ fontSize: 64 }}>Jalan-Jalan Medan</p>
                <h2 className="my-3" style={{ fontSize: 31 }}>Join us!</h2>

                <Col sm={5} className="d-grid gap-2">
                    <Button className="rounded-pill" variant="outline-dark" onClick={handleGoogleLogin}>
                        <i className="bi bi-google"></i> Sign up with Google
                    </Button>
                    <Button className="rounded-pill" variant="outline-dark">
                        <i className="bi bi-apple"></i> Sign up with Apple
                    </Button>
                    <Button className="rounded-pill" variant="outline-dark">
                        <i className="bi bi-facebook"></i> Sign up with Facebook
                    </Button>
                    <p style={{ textAlign: "center" }}>or</p>
                    <Button className="rounded-pill" onClick={handleShowSignup}>Create an account</Button>
                    <p style={{ fontSize: "12px" }}>
                        By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use.
                    </p>
                    <p className="mt-2" style={{ fontWeight: "bold" }}>
                        Already have an account?
                    </p>
                    <Button
                        className="rounded-pill"
                        variant="outline-primary"
                        onClick={handleShowLogin}
                    >
                        Sign In
                    </Button>
                </Col>

                <Modal
                    show={modalShow !== null}
                    onHide={handleClose}
                    animation={false}
                    centered
                >
                    <Modal.Body>
                        <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                            {modalShow === "Signup" ? "Create your account" : "Login to your account"}
                        </h2>
                        <Form onSubmit={modalShow === "Signup" ? handleSignup : handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Enter password"
                                />
                            </Form.Group>

                            {loginError && (
                                <p style={{ fontSize: "12px" }}>{loginError}</p>
                            )}

                            <p style={{ fontSize: "12px" }}>
                                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                            </p>
                            <Button className="rounded-pill" type="submit">
                                {modalShow === "Signup" ? "Signup" : "Login"}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>


    )
}

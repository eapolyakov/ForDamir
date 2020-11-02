import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";

export default function NavBar(){
    return  <Navbar bg="dark" variant="primary" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/reg">Регистрация</Nav.Link>
                <Nav.Link href="/auth">Вход</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>


}
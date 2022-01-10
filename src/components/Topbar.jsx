import Button       from 'react-bootstrap/Button';
import Container    from 'react-bootstrap/Container';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import Nav          from 'react-bootstrap/Nav';
import Navbar     from 'react-bootstrap/Navbar';
import NavDropdown  from 'react-bootstrap/NavDropdown';


export default function Topbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">Lo que te pinte</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
            </Nav>
        { /*
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
            </Form>
        */ }
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
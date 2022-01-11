import Container    from 'react-bootstrap/Container';
import Navbar     from 'react-bootstrap/Navbar';


export default function Topbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">
                <img src="/images/logo.png" alt="Lo que te pinte logo" style={{width: '100px'}}/>
            </Navbar.Brand>
        </Container>
        </Navbar>
    );
}

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(){
    return(
      <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Services</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>)
 
};
export default Navigation;
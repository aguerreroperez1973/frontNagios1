import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
  return (        
    <Container>
      <Navbar className="navbar bg-primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="/home"> Monitoreo de Sitios </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    )
}

export default NavbarComponent
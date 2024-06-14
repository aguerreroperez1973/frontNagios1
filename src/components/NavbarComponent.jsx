import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (  
    <>      
          <Container>
            <Navbar className="navbar bg-primary" data-bs-theme="dark" >
              <Container>
                <Navbar.Brand href="/dist" > Monitoreo de Sitios </Navbar.Brand>
                <Navbar.Brand href="http:///192.168.0.12/nagios">
                <img
                  src="./../../public/sblogo.png"
                  width="100"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              </Container>
            </Navbar>
          </Container>
      </>
    )
}

export default NavbarComponent
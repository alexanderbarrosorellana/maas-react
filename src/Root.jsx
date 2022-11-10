import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Outlet, Link } from 'react-router-dom'

function RootNavbar () {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand>Monitoring as a Service</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='availability' style={{ textDecoration: 'none' }}>Disponibilidad</Link>
              <Link to='confirmed' style={{ marginLeft: '10%', textDecoration: 'none' }}>Confirmados</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default RootNavbar

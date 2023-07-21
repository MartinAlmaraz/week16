// import {useContext} from 'react';
// import { ThemeContext } from './ThemeContext';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


export default function HomePage() {
    // const [ , setTheme] = useContext(ThemeContext) 
    
    return (
        <Navbar bg='dark' data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Online Store</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                    <Nav.Link as={NavLink} to="/products/create/new">Products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
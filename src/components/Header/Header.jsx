
import React from 'react'; 
import { Container, Navbar } from 'react-bootstrap'; 
import { Link, useLocation } from 'react-router-dom'; 
 
const Header = () => { 
   const location =  useLocation();
   console.log(location);
    return ( 
        <Navbar> 
            <Container> 
                <Link to='/'> 
                    <Navbar.Brand className={location.pathname === '/' ? "btn btn-success" : "btn btn-light"}>Home</Navbar.Brand> 
                </Link> 
                <Link to='/add'> 
                    <Navbar.Brand className={location.pathname === '/add' ? "btn btn-success" : "btn btn-light"}>Add form</Navbar.Brand> 
                </Link> 
                <Link to='/edit'> 
                    <Navbar.Brand className={location.pathname === '/edit' ? "btn btn-success" : "btn btn-light"}>Eidt</Navbar.Brand> 
                </Link>  
                <Navbar.Toggle /> 
                <Navbar.Collapse className="justify-content-end"> 
                    <Navbar.Text> 
                        Signed in as: <a href="#login">Mark Otto</a> 
                    </Navbar.Text> 
                </Navbar.Collapse> 
            </Container> 
        </Navbar> 
    ); 
}; 
 
export default Header;
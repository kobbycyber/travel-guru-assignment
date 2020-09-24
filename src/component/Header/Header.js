import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
// import background '../../images/background.png'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div  >
            <Navbar variant="Info fixed top">
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search your Destination" className="ml-sm-4" />
                </Form>
                <Nav className="ml-auto">
                    <Link className="px-5" to="/news">News</Link>
                    <Link className="px-5" to="/Destination">Destination</Link>
                    <Link className="px-5" to="/Login">Login</Link>
                    <Link className="px-5" to="/contact">Contact</Link>
                </Nav>
                <Button variant="warning" onClick={() => setLoggedInUser({})}>Sign Out</Button>
            </Navbar>
            <div className="title-container">
                <h1>Travel Guru</h1>
            </div>
        </div>
    );
};

export default Header;
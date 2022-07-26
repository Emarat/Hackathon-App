import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/icons/logo.svg';

const Header = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="87"
                            height="38.11"
                            className="d-inline-block align-top"
                            alt="DPhi logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
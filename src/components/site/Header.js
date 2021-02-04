import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// import Footer from "./Footer";

const Header = () => {
    return(
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">React Library</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/Joylynn/yourrepoforthisapp">
                            Github 
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;
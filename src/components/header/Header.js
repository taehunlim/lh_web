import React, {Fragment, useState} from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import ScrollspyNav from "./scrollSpy";

import logo from "../../assets/images/logo.jpg";

const Header = () => {

    const [navItems, setNavItems] = useState([
        { id: 1 , idnm : "coloroflife", navheading: "COLOR of Life" },
        { id: 2 , idnm : "ihoflife", navheading: "IH of Life" },
        { id: 3 , idnm : "ihnews", navheading: "IH News" },
        { id: 3 , idnm : "service", navheading: "SERVICE" },
    ]);

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggle = () => {

    }


    const TargetId = (data) => {
        data.map((item) => {
            return(
                item.idnm
            )
        })
    }

    return (
        <Fragment>
            <Navbar expand="lg" fixed="top" className="navigation sticky">
                <Container>
                    <NavbarBrand className="navbar-logo " href="/">
                        <img src={logo} alt="" height="19" className="logo logo-light"/>
                    </NavbarBrand>

                    <NavbarToggler className="p-0" onClick={toggle}>
                        <i className="fa fa-fw fa-bars"></i>
                    </NavbarToggler>

                    <Collapse id="topnav-menu-content" isOpen={() => setIsOpenMenu(true)} navbar>
                        {/*<ScrollspyNav*/}
                        {/*    scrollTargetIds={TargetId}*/}
                        {/*    scrollDuration="300"*/}
                        {/*    headerBackground="true"*/}
                        {/*    activeNavClass="active"*/}
                        {/*    className="navbar-collapse"*/}
                        {/*/>*/}
                        <Nav className="ml-auto navbar-nav" id="topnav-menu">
                            {navItems.map((item, key) => (
                                <NavItem key={key} className={item.navheading === "coloroflife" ? "active" : ""}>
                                    <NavLink href={"#" + item.idnm}>{item.navheading}</NavLink>
                                </NavItem>
                            ))}

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;

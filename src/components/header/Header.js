import React, {Fragment, useEffect, useState} from 'react';
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

    const [scroll, setScroll] = useState();
    const [headerTop, setHeaderTop] = useState();
    const [headerHeight, setHeaderHeight] = useState();

    const [navItems, setNavItems] = useState([
        { id: 1 , idnm : "coloroflife", navheading: "COLOR of Life" },
        { id: 2 , idnm : "ihoflife", navheading: "IH of Life" },
        { id: 3 , idnm : "ihnews", navheading: "IH News" },
        { id: 3 , idnm : "service", navheading: "SERVICE" },
    ]);

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const TargetId = (data) => {
        data.map((item) => {
            return(
                item.idnm
            )
        })
    }

    useEffect(() => {
        const header = document.querySelector("nav");
        setHeaderTop(header.offsetTop)
        setHeaderHeight(header.offsetHeight);
        window.addEventListener("scroll", handleScroll)
        scroll > headerTop
        ? (document.body.style.paddingTop = `${headerHeight}px`)
        : (document.body.style.padding = 0);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [headerTop, headerHeight, scroll])

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    return (
        <Fragment>
            <Navbar expand="lg" fixed="top" className={`navigation sticky ${
                scroll > headerTop ? "nav-sticky" : ""
            }`}>
                <Container>
                    <NavbarBrand className="navbar-logo " href="/">
                        <img src={logo} alt="" height="19" className="logo logo-light"/>
                        <img src={logo} alt="" height="19" className="logo logo-dark"/>
                    </NavbarBrand>

                    <NavbarToggler className="p-0" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <i className="fa fa-fw fa-bars"></i>
                    </NavbarToggler>

                    <Collapse id="topnav-menu-content" isOpen={isOpenMenu} navbar>
                        {/*<ScrollspyNav*/}
                        {/*    scrollTargetIds={TargetId}*/}
                        {/*    scrollDuration="300"*/}
                        {/*    headerBackground="true"*/}
                        {/*    activeNavClass="active"*/}
                        {/*    className="navbar-collapse"*/}
                        {/*/>*/}
                        <Nav className="ml-auto navbar-nav" id="topnav-menu">
                            {navItems.map((item, key) => (
                                <NavItem key={key} className={item.navheading === "COLOR of Life" ? "active" : ""}>
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

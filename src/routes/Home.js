import React, {Fragment, useState} from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
import {Link} from "react-router-dom";
import ScrollspyNav from "../components/scrollSpy";
import FooterLink from '../components/footer-link';

import logo from '../assets/images/logo.jpg';
import avatar1 from'../assets/images/users/avatar-1.jpg'
import avatar2 from'../assets/images/users/avatar-2.jpg'
import avatar3 from'../assets/images/users/avatar-3.jpg'
import avatar5 from'../assets/images/users/avatar-5.jpg'
import avatar8 from'../assets/images/users/avatar-8.jpg'

const Home = () => {

    const [navItems, setNavItems] = useState([
        { id: 1 , idnm : "coloroflife", navheading: "COLOR of Life" },
        { id: 2 , idnm : "ihoflife", navheading: "IH of Life" },
        { id: 3 , idnm : "ihnews", navheading: "IH News" },
        { id: 3 , idnm : "service", navheading: "SERVICE" },
    ]);

    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)

    const [candidates, setCandidates] = useState( [
        { imgUrl : avatar2, name : "Mark Hurley", designation : "CEO & Lead",
            socials : [
                { id : 1, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                { id : 2, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                { id : 3, icon : "mdi mdi-google", title : "Google", url : "#" },
            ]
        },
        { imgUrl : avatar3, name : "Calvin Smith", designation : "Blockchain developer",
            socials : [
                { id : 4, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                { id : 5, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                { id : 6, icon : "mdi mdi-google", title : "Google", url : "#" },
            ]
        },
        { imgUrl : avatar8, name : "Vickie Sample", designation : "Designer",
            socials : [
                { id : 7, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                { id : 8, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                { id : 9, icon : "mdi mdi-google", title : "Google", url : "#" },
            ]
        },
        { imgUrl : avatar5, name : "Vickie Sample", designation : "Designer",
            socials : [
                { id : 10, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                { id : 11, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                { id : 12,icon : "mdi mdi-google", title : "Google", url : "#" },
            ]
        },
        { imgUrl : avatar1, name : "Alma Farley", designation : "App developer",
            socials : [
                { id : 13, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                { id : 14, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                { id : 15, icon : "mdi mdi-google", title : "Google", url : "#" },
            ]
        },
    ])

    const [footerLinks, setFooterLinks] = useState([
        {
            title : "Company",
            links : [
                { title : "About Us", link : "#" },
                { title : "Features", link : "#" },
                { title : "Team", link : "#" },
                { title : "News", link : "#" },
                { title : "FAQs", link : "#" },
            ]
        },
        {
            title : "Resources",
            links : [
                { title : "Whitepaper", link : "#" },
                { title : "Token sales", link : "#" },
                { title : "Privacy Policy", link : "#" },
                { title : "Terms & Conditions", link : "#" },
            ]
        },
        {
            title: "Links",
            links: [
                {title: "Tokens", link: "#"},
                {title: "Roadmap", link: "#"},
                {title: "FAQs", link: "#"},
            ]
        }
    ])

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

            {/*Header*/}
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
                            {/*    // scrollTargetIds={TargetId(navItems)}*/}
                            {/*    // scrollDuration="300"*/}
                            {/*    headerBackground="true"*/}
                            {/*    activeNavClass="active"*/}
                            {/*    className="navbar-collapse"*/}
                            {/*>*/}
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

            <Fragment>
                <section className="section hero-section bg-ico-hero" id="home">
                    <div className="bg-overlay bg-primary"></div>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="5">
                                <div className="text-white-50">
                                    <h1 className="text-white font-weight-semibold mb-3 hero-title">여행은 취향대로, 삼척에서 즐기는 여름의 모든 </h1>
                                    <p className="font-size-14">가슴까지 뻥 뚫리는 푸른 바다에서 흰 파도가 발끝으로 밀려와 부서진다. 강원도 하면 여름, 여름 하면 바다. 그중 삼척은 여름을 더 즐겁게 하는 스노클링부터, 해상 케이블, 캠핑까지 취향별로 즐길 수 있는 선택지가 넘쳐난다.</p>

                                    <div className="button-items mt-4">
                                        <Link to="#" className="btn btn-success mr-1">자세히 보기</Link>
                                    </div>
                                </div>
                            </Col>

                        </Row>

                    </Container>

                </section>
            </Fragment>

            {/*Silde Card*/}
            <Fragment>
                <section className="section" id="#coloroflife">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <h4>COLOR of Life </h4>
                                </div>
                            </Col>
                        </Row>


                        <Col lg="12">
                            <div className="hori-timeline">
                                <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">

                                    {step1 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <Card>
                                                        <CardImg top className="img-fluid" src={avatar1} alt="Skote" />
                                                        <CardBody>
                                                            <CardTitle className="mt-0">Card title</CardTitle>
                                                            <CardText>This is a wider card with supporting text below as a
                                                                natural lead-in to additional content. This content is a little bit
                                                                longer.</CardText>
                                                            <CardText>
                                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                            </CardText>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={4}>
                                                    <Card>
                                                        <CardImg top className="img-fluid" src={avatar3} alt="Skote" />
                                                        <CardBody>
                                                            <CardTitle className="mt-0">Card title</CardTitle>
                                                            <CardText>This is a wider card with supporting text below as a
                                                                natural lead-in to additional content. This content is a little bit
                                                                longer.</CardText>
                                                            <CardText>
                                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                            </CardText>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={4}>
                                                    <Card>
                                                        <CardImg top className="img-fluid" src={avatar8} alt="Skote" />
                                                        <CardBody>
                                                            <CardTitle className="mt-0">Card title</CardTitle>
                                                            <CardText>This is a wider card with supporting text below as a
                                                                natural lead-in to additional content. This content is a little bit
                                                                longer.</CardText>
                                                            <CardText>
                                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                            </CardText>
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                            </Row>
                                        </> : null}

                                    {step2 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar8} alt="" className="rounded" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5>Vickie Sample</h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar5} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Alma Farley</h5>
                                                                    <p className="text-muted mb-0">App developer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar1} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Amy Hood </h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Col>

                                            </Row>
                                        </> : null}

                                    <div className="owl-nav" style={{ textAlign : "center" }}>
                                        <button type="button" onClick={() => {  setStep1({ step1 : true, step2 : false }) } }  className="border-0" disabled={ step1 } ><i className="mdi mdi-chevron-left"></i></button>
                                        <button type="button" onClick={() => {  setStep2({ step1 : false, step2 : true }) } } className="border-0" disabled={ step2 } ><i className="mdi mdi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Container>

                </section>
            </Fragment>
            <Fragment>
                <section className="section" id="#ihoflife">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <h4>IH of Life</h4>
                                </div>
                            </Col>
                        </Row>


                        <Col lg="12">
                            <div className="hori-timeline">
                                <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">

                                    {step1 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle className="mt-0">Card title</CardTitle>
                                                            <CardSubtitle className="font-14 text-muted">Support card subtitle</CardSubtitle>
                                                        </CardBody>
                                                        <CardImg className="img-fluid" src={avatar5} alt="Skote" />
                                                        <CardBody>
                                                            <CardText>Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</CardText>
                                                            <Link to="#" className="card-link">Card link</Link>
                                                            <Link to="#" className="card-link">Another link</Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={4}>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle className="mt-0">Card title</CardTitle>
                                                            <CardSubtitle className="font-14 text-muted">Support card subtitle</CardSubtitle>
                                                        </CardBody>
                                                        <CardImg className="img-fluid" src={avatar5} alt="Skote" />
                                                        <CardBody>
                                                            <CardText>Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</CardText>
                                                            <Link to="#" className="card-link">Card link</Link>
                                                            <Link to="#" className="card-link">Another link</Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md={4}>
                                                    <Card>
                                                        <CardBody>
                                                            <CardTitle className="mt-0">Card title</CardTitle>
                                                            <CardSubtitle className="font-14 text-muted">Support card subtitle</CardSubtitle>
                                                        </CardBody>
                                                        <CardImg className="img-fluid" src={avatar5} alt="Skote" />
                                                        <CardBody>
                                                            <CardText>Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</CardText>
                                                            <Link to="#" className="card-link">Card link</Link>
                                                            <Link to="#" className="card-link">Another link</Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                            </Row>
                                        </> : null}

                                    {step2 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar8} alt="" className="rounded" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5>Vickie Sample</h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar5} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Alma Farley</h5>
                                                                    <p className="text-muted mb-0">App developer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar1} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Amy Hood </h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Col>

                                            </Row>
                                        </> : null}

                                    <div className="owl-nav" style={{ textAlign : "center" }}>
                                        <button type="button" onClick={() => {  setStep1({ step1 : true, step2 : false }) } }  className="border-0" disabled={ step1 } ><i className="mdi mdi-chevron-left"></i></button>
                                        <button type="button" onClick={() => {  setStep2({ step1 : false, step2 : true }) } } className="border-0" disabled={ step2 } ><i className="mdi mdi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Container>

                </section>
            </Fragment>
            <Fragment>
                <section className="section" id="#ihnews">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <h4>IH News</h4>
                                </div>
                            </Col>
                        </Row>


                        <Col lg="12">
                            <div className="hori-timeline">
                                <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">

                                    {step1 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar2} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Mark Hurley</h5>
                                                                    <p className="text-muted mb-0">CEO & Lead</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar3} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Calvin Smith</h5>
                                                                    <p className="text-muted mb-0">Blockchain developer</p>
                                                                </div>
                                                            </div>

                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar8} alt="" className="rounded" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5>Vickie Sample</h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </> : null}

                                    {step2 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar8} alt="" className="rounded" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5>Vickie Sample</h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar5} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Alma Farley</h5>
                                                                    <p className="text-muted mb-0">App developer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar1} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Amy Hood </h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Col>

                                            </Row>
                                        </> : null}

                                    <div className="owl-nav" style={{ textAlign : "center" }}>
                                        <button type="button" onClick={() => {  setStep1({ step1 : true, step2 : false }) } }  className="border-0" disabled={ step1 } ><i className="mdi mdi-chevron-left"></i></button>
                                        <button type="button" onClick={() => {  setStep2({ step1 : false, step2 : true }) } } className="border-0" disabled={ step2 } ><i className="mdi mdi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Container>

                </section>
            </Fragment>
            <Fragment>
                <section className="section" id="#service">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <h4>SERVICE</h4>
                                </div>
                            </Col>
                        </Row>


                        <Col lg="12">
                            <div className="hori-timeline">
                                <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">

                                    {step1 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar2} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Mark Hurley</h5>
                                                                    <p className="text-muted mb-0">CEO & Lead</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar3} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Calvin Smith</h5>
                                                                    <p className="text-muted mb-0">Blockchain developer</p>
                                                                </div>
                                                            </div>

                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar8} alt="" className="rounded" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5>Vickie Sample</h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </> : null}

                                    {step2 ?
                                        <>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar8} alt="" className="rounded" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5>Vickie Sample</h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar5} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Alma Farley</h5>
                                                                    <p className="text-muted mb-0">App developer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="item">
                                                        <div className="card text-center team-box">
                                                            <div className="card-body">
                                                                <div>
                                                                    <img src={avatar1} alt="" className="rounded" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5>Amy Hood </h5>
                                                                    <p className="text-muted mb-0">Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-top">
                                                                <div className="d-flex mb-0 team-social-links">
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Facebook">
                                                                            <i className="mdi mdi-facebook"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Linkedin">
                                                                            <i className="mdi mdi-linkedin"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <Link to="#" data-toggle="tooltip" title="Google">
                                                                            <i className="mdi mdi-google"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Col>

                                            </Row>
                                        </> : null}

                                    <div className="owl-nav" style={{ textAlign : "center" }}>
                                        <button type="button" onClick={() => {  setStep1({ step1 : true, step2 : false }) } }  className="border-0" disabled={ step1 } ><i className="mdi mdi-chevron-left"></i></button>
                                        <button type="button" onClick={() => {  setStep2({ step1 : false, step2 : true }) } } className="border-0" disabled={ step2 } ><i className="mdi mdi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Container>

                </section>
            </Fragment>

            {/*Footer*/}
            <Fragment>
                <footer className="landing-footer">
                    <Container>
                        <FooterLink/>
                    </Container>
                </footer>
            </Fragment>
        </Fragment>
    );
};

export default Home;

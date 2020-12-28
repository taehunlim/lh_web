import React, {Fragment} from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import {Link} from "react-router-dom";

import { FaFacebookF, FaInstagram, FaBloggerB, FaTwitter } from "react-icons/fa";




const Service = () => {

    return (
        <Fragment>
            <section className="section" id="service">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>Service</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{textAlignLast: "center", fontSize: "100px"}}>

                        <Col xl="3" sm="4">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <FaFacebookF/>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3" sm="4">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <FaInstagram/>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3" sm="4">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <FaBloggerB/>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3" sm="4">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <FaTwitter/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
};

export default Service;

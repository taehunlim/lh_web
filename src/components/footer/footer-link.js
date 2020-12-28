import React, {Fragment} from 'react';
import { Row, Col } from "reactstrap";
import {Link} from'react-router-dom'
import logo from "../../assets/images/logo.jpg";
import { FaFacebookF, FaFilePdf, FaBloggerB, FaTwitter } from "react-icons/fa";


const FooterLink = () => {
    return (
        <Fragment>
            <Row>
                <Col lg="6">
                    <div className="mb-4">
                        <img src={logo} alt="" height="40"/>
                    </div>
                    <p>경기도 고양시일산동구 일산로 100(백석 1동 1232번지), 우편번호 10444</p>
                    <p>대표전화 : 031-900-0114, 팩스 : 031-900-0049</p>
                    <p className="mb-2">Copyright © National Health Insurance. </p>
                    <p>Service Ilsan Hospital All Right Reserved</p>
                </Col>
                <Col lg="6">
                    <div className="mb-4 mb-lg-0 d-flex justify-content-end font-size-24 footer-icon">
                        <Link to="/">
                            <FaBloggerB/>
                        </Link>
                        <Link to="/">
                            <FaFacebookF/>
                        </Link>
                        <Link to="/">
                            <FaTwitter/>
                        </Link>
                        <Link to="/">
                            <FaFilePdf/>
                        </Link>
                    </div>
                </Col>

            </Row>
        </Fragment>
    );
};

export default FooterLink;

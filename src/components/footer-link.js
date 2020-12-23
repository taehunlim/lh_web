import React, {Fragment} from 'react';
import { Row, Col } from "reactstrap";
import logo from "../assets/images/logo.jpg";

const FooterLink = () => {
    return (
        <Fragment>
            <Row>
                <Col lg="6">
                    <div className="mb-4">
                        <img src={logo} alt="" height="20"/>
                    </div>


                    <p>경기도 고양시일산동구 일산로 100(백석 1동 1232번지), 우편번호 10444</p>
                    <p>대표전화 : 031-900-0114, 팩스 : 031-900-0049</p>
                    <p className="mb-2">Copyright © National Health Insurance. </p>
                    <p>Service Ilsan Hospital All Right Reserved</p>
                </Col>

            </Row>
        </Fragment>
    );
};

export default FooterLink;

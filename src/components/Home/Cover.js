import React, {Fragment} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";

const Cover = () => {
    return (
        <Fragment>
            <section className="section hero-section bg-ico-hero" id="cover">
                <div className=""></div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="5">
                            <div className="">
                                <h1 className="font-weight-semibold mb-3 hero-title">여행은 취향대로, 삼척에서 즐기는 여름의 모든 </h1>
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
    );
};

export default Cover;

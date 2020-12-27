import React, {Fragment, useState} from 'react';
import classnames from 'classnames'
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import {Link} from "react-router-dom";

import img1 from "../../assets/images/example/mainSlide1.jpg";
import img2 from "../../assets/images/example/mainSlide2.jpg";
import img3 from "../../assets/images/example/mainSlide3.jpg";


const Cover = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const items = [
        {
            src: img1,
            altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            caption: '희망을 이야기하는 YELLOW',
        },
        {
            src: img2,
            altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            caption: '변함없는 신뢰로 맞이한 생명의탄생'
        },
        {
            src: img3,
            altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            caption: '외래팀'
        }
    ];

    return (
        <Fragment>
            <section id="cover">
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <ol className="carousel-indicators">
                        {items.map((item, index) => {
                            return (
                                <li
                                    data-target="#carousel-thumb"
                                    key={index}
                                    onClick={() => goToIndex(index)}
                                    className={classnames({ active: activeIndex === index })}
                                >
                                    <img className="img-fluid d-block" src={item.src}/>
                                </li>
                            );
                        })}
                    </ol>

                    {items && items.map((item) => {
                        return (
                            <CarouselItem>
                                <div
                                    style={{
                                        paddingTop: "400px",
                                        paddingBottom: "500px",
                                        backgroundImage:`url(${item.src})`,
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <Container>
                                        <Row className="align-items-center">
                                            <Col lg={5}>
                                                <div className="text-white-50">
                                                    <h1 className="font-weight-semibold mb-3 hero-title">{item.caption} </h1>
                                                    <div className="button-items mt-4">
                                                        <Link to="#" className="btn btn-success mr-1">자세히 보기</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </CarouselItem>
                        )
                    })}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </section>
        </Fragment>

        // <Fragment>
        //     <section className="section hero-section bg-ico-hero" id="cover">
        //         <div className=""></div>
        //         <Container>
        //             <Row className="align-items-center">
        //                 <Col lg="5">
        //                     <div className="">
        //                         <h1 className="font-weight-semibold mb-3 hero-title">여행은 취향대로, 삼척에서 즐기는 여름의 모든 </h1>
        //                         <p className="font-size-14">가슴까지 뻥 뚫리는 푸른 바다에서 흰 파도가 발끝으로 밀려와 부서진다. 강원도 하면 여름, 여름 하면 바다. 그중 삼척은 여름을 더 즐겁게 하는 스노클링부터, 해상 케이블, 캠핑까지 취향별로 즐길 수 있는 선택지가 넘쳐난다.</p>
        //
        //                         <div className="button-items mt-4">
        //                             <Link to="#" className="btn btn-success mr-1">자세히 보기</Link>
        //                         </div>
        //                     </div>
        //                 </Col>
        //
        //             </Row>
        //
        //         </Container>
        //
        //     </section>
        // </Fragment>
    );
};

export default Cover;

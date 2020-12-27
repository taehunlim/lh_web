import React, {useState} from 'react';
import classnames from 'classnames'
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import {Link} from "react-router-dom";
import img1 from "../../assets/images/example/mainSlide1.jpg";
import img2 from "../../assets/images/example/mainSlide2.jpg";
import img3 from "../../assets/images/example/mainSlide3.jpg";


const SlideMain = () => {

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
        <div>
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
                {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>*/}
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
                                {/*<div style={{maxHeight: "900px", maxWidth: "1800px"}}>*/}
                                {/*    <img className="img-fluid" src={item.src}/>*/}
                                {/*</div>*/}
                        </CarouselItem>
                    )
                })}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
};

export default SlideMain;

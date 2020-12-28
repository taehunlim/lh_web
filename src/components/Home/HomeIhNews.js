import React, {Fragment, useState} from 'react';
import {
    Container,
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
import SwiperCore, {Controller, Scrollbar, Navigation, Pagination } from 'swiper'
import {SwiperSlide, Swiper} from 'swiper/react'
import {trimText} from '../../utils'

import image1 from '../../assets/images/example/news/bcontThumb3_1.jpg'
import image2 from '../../assets/images/example/news/bcontThumb3_2.jpg'
import image3 from '../../assets/images/example/news/bcontThumb3_3.jpg'
import image4 from '../../assets/images/example/news/bcontThumb3_4.jpg'
import image5 from "../../assets/images/example/color5.jpg";

SwiperCore.use([Navigation, Pagination, Controller, Scrollbar])


const HomeIhNews = () => {

    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)

    const items = [
        {
            src: image1,
            title: "IH NEWS",
            caption: "개원 20주년 온라인 기념식 개최 외"
        },
        {
            src: image2,
            title: "IH TODAY",
            caption: "방송 / 신문 / 포상 / 결혼 / 출산"
        },
        {
            src: image3,
            title: "LETTER",
            caption: "2020 AUTUMN 독자 퀴즈, 독자 의견, 사랑의 사회사업 후원 안내"
        },
        {
            src: image4,
            title: "진료시간표",
            caption: "※ 진료일정은 병원사정에 의해 변경될 수 있습니다."
        },
    ]

    return (
        <Fragment>
            <section className="section" id="ihnews">
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
                                <Swiper
                                    scrollbar={{ draggable: true }}
                                    slidesPerView={3}
                                    spaceBetween={24}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        320: {
                                            slidesPerView: 1
                                        }
                                    }}
                                >
                                    {items && items.map((item) => {
                                        return (
                                            <SwiperSlide>
                                                <Row>
                                                    <Col md={12}>
                                                        <Card className="card-hover">
                                                            <Link className="card-hover__image" to="/">
                                                                <CardImg top className="img-fluid" src={item.src} alt="Skote" />
                                                                <CardBody>
                                                                    <CardTitle className="mt-0">{item.title}</CardTitle>
                                                                    <CardText>
                                                                        {trimText(item.caption, 80)}
                                                                    </CardText>
                                                                </CardBody>
                                                            </Link>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
        </Fragment>

        // <Fragment>
        //     <section className="section" id="ihnews">
        //         <Container>
        //             <Row>
        //                 <Col lg="12">
        //                     <div className="text-center mb-5">
        //                         <h4>IH News</h4>
        //                     </div>
        //                 </Col>
        //             </Row>
        //
        //
        //             <Col lg="12">
        //                 <div className="hori-timeline">
        //                     <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">
        //
        //                         {step1 ?
        //                             <>
        //                                 <Row>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardImg top className="img-fluid" src={image1} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">IH NEWS</CardTitle>
        //                                                     <CardText>
        //                                                         개원 20주년 온라인 기념식 개최 외
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardImg top className="img-fluid" src={image2} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">IH TODAY</CardTitle>
        //                                                     <CardText>
        //                                                         방송 / 신문 / 포상 / 결혼 / 출산
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardImg top className="img-fluid" src={image3} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">LETTER</CardTitle>
        //                                                     <CardText>
        //                                                         2020 AUTUMN 독자 퀴즈, 독자 의견, 사랑의 사회사업 후원 안내
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //
        //                                 </Row>
        //                             </> : null}
        //
        //                         {step2 ?
        //                             <>
        //                                 <Row>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardImg top className="img-fluid" src={image2} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">LETTER</CardTitle>
        //                                                     <CardText>
        //                                                         2020 AUTUMN 독자 퀴즈, 독자 의견, 사랑의 사회사업 후원 안내
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardImg top className="img-fluid" src={image3} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">LETTER</CardTitle>
        //                                                     <CardText>
        //                                                         2020 AUTUMN 독자 퀴즈, 독자 의견, 사랑의 사회사업 후원 안내
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardImg top className="img-fluid" src={image4} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">진료시간표</CardTitle>
        //                                                     <CardText>
        //                                                         ※ 진료일정은 병원사정에 의해 변경될 수 있습니다.
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //
        //                                 </Row>
        //                             </> : null}
        //
        //                         <div className="owl-nav" style={{ textAlign : "center" }}>
        //                             <button
        //                                 type="button"
        //                                 className="border-0"
        //                                 onClick={() => {
        //                                     setStep1(true)
        //                                     setStep2(false)
        //                                 }}
        //                                 disabled={ step1 }
        //                             >
        //                                 <i className="mdi mdi-chevron-left"></i>
        //                             </button>
        //                             <button
        //                                 type="button"
        //                                 className="border-0"
        //                                 onClick={() => {
        //                                     setStep1(false)
        //                                     setStep2(true)
        //                                 }}
        //                                 disabled={ step2 }
        //                             >
        //                                 <i className="mdi mdi-chevron-right"></i>
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //
        //             </Col>
        //
        //         </Container>
        //
        //     </section>
        // </Fragment>
    );
};

export default HomeIhNews;

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
import {Link} from 'react-router-dom';
import SwiperCore, {Controller, Scrollbar, Navigation, Pagination } from 'swiper'
import {SwiperSlide, Swiper} from 'swiper/react'
import {trimText} from '../../utils'

import image1 from'../../assets/images/example/IhofLife/bcontThumb2_1.jpg'
import image2 from'../../assets/images/example/IhofLife/bcontThumb2_2.jpg'
import image3 from'../../assets/images/example/IhofLife/bcontThumb2_3.jpg'
import image4 from'../../assets/images/example/IhofLife/bcontThumb2_4.jpg'
import image5 from'../../assets/images/example/IhofLife/bcontThumb2_5.jpg'
import image6 from'../../assets/images/example/IhofLife/bcontThumb2_6.jpg'
import image7 from'../../assets/images/example/IhofLife/bcontThumb2_7.jpg'
import image8 from'../../assets/images/example/IhofLife/bcontThumb2_8.jpg'
import image9 from'../../assets/images/example/IhofLife/bcontThumb2_9.jpg'
import image10 from'../../assets/images/example/IhofLife/bcontThumb2_10.jpg'
import image11 from'../../assets/images/example/IhofLife/bcontThumb2_11.jpg'
import image12 from'../../assets/images/example/IhofLife/bcontThumb2_12.jpg'
import image13 from'../../assets/images/example/IhofLife/bcontThumb2_13.jpg'

SwiperCore.use([Navigation, Pagination, Controller, Scrollbar])

const IhOfLife = () => {

    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)

    const items = [
        {
            src: image1,
            head: "IH 20th",
            title: "의료서비스 혁신 기반으로 스마트병원 시대를 꿈꾸다",
            caption: ""
        },
        {
            src: image2,
            head: "함꼐 걷기",
            title: "변함없는 신뢰로 맞이한 생명의 탄생",
            caption: ""
        },
        {
            src: image3,
            head: "오후의 티타임",
            title: "외래팀",
            caption: ""
        },
        {
            src: image4,
            head: "IH POWER",
            title: "특수사업팀 김민경 & 연구 전문의 안찬식",
            caption: ""
        },
        {
            src: image5,
            head: "논문 다이제스",
            title: "트포괄수가제 도입 이후",
            caption: ""
        },
        {
            src: image6,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image7,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image8,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image9,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image10,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image11,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image12,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            src: image13,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        }
    ]

    return (
        <Fragment>
            <section className="section" id="ihoflife">
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
                                                                <CardBody>
                                                                    <CardTitle className="mt-0">{item.head}</CardTitle>
                                                                </CardBody>
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
        //     <section className="section" id="ihoflife">
        //         <Container>
        //             <Row>
        //                 <Col lg="12">
        //                     <div className="text-center mb-5">
        //                         <h4>IH of Life</h4>
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
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">IH 20th</CardTitle>
        //                                                 </CardBody>
        //                                                 <CardImg className="img-fluid" src={image1} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">의료서비스 혁신 기반으로 스마트병원 시대를 꿈꾸다</CardTitle>
        //                                                     <CardText>
        //                                                         포스트 코로나 시대를 맞이한 우리는 새로운 일상에 대한 적응과 대비가 필요하다.
        //                                                         날로 발전하는 정보통신기술(이하 ICT) 발전으로 의료분야에 ICT 적용을 통한 스마트 의료가 가능해진 시대,
        //                                                         5G, IoT 디지털기술의 도입은 비대면으로 환자의 안전을 강화할 수 있게 되었고,
        //                                                         입원환자 실시간 모니터링은 물론 진단 및 치료의 질을 한층 높일 수 있게 되었다.
        //                                                         감염병 확산으로 인해 비대면 진료 및 치료 환경이 중요시되고 있는 지금, 일산병원 역시 새로운 도전과 발전을 위해 분주히 움직이고 있다.
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">함께 걷기</CardTitle>
        //                                                 </CardBody>
        //                                                 <CardImg className="img-fluid" src={image2} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">변함없는 신뢰로 맞이한 생명의탄생</CardTitle>
        //                                                     <CardText>
        //                                                         저출산이 국가적인 과제로 떠오른 시대다. 그러나 여전히 생명의 탄생을 간절하게 기다리는 이들이 많다.
        //                                                         박희정 씨 역시 오랜 기다림 끝에 사랑스러운 두 아이를 만났다. 아이들의 건강한 모습을 지켜보며 이제야 웃음 짓지만,
        //                                                         출산에 이르기까지 과정은 쉽지 않았다. 하지만 김의혁 교수의 전문적인 조언과 대처 덕분에 건강하게 출산을 마칠 수 있었다.
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">오후의 티타임</CardTitle>
        //                                                 </CardBody>
        //                                                 <CardImg className="img-fluid" src={image3} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">환자의 가장 가까이에서 환자를 위해 움직이다</CardTitle>
        //                                                     <CardText>
        //                                                         외래팀은 외래진료서비스에 관한 전반적인 업무를 담당한다.
        //                                                         외래 진료는 병원을 찾은 환자에게 해답과 방향을 제시하는 것이기에 꼭 필요한 일이다.
        //                                                         외래팀은 언제나 환자의 가장 가까이에서, 그들의 목소리에 귀를 기울인다.
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
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">IH POWER</CardTitle>
        //                                                 </CardBody>
        //                                                 <CardImg className="img-fluid" src={image4} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">특수사업팀 김민경 & 연구 전문의 안찬식</CardTitle>
        //                                                     <CardText>
        //                                                         고인분과 유가족을 생각하며 초심을 잃지 않고 진심을 다해 최선을 다하겠습니다. &
        //                                                         빅데이터와 임상을 융합한 다양한 연구활동으로 국민건강증진을 위해 최선의 노력을 다하겠습니다.
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">논문 다이제스트</CardTitle>
        //                                                 </CardBody>
        //                                                 <CardImg className="img-fluid" src={image5} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">포괄수가제 도입 이후 상급종합병원 산부인과 영역의 변화</CardTitle>
        //                                                     <CardText>
        //                                                         포괄수가제란?
        //                                                         포괄수가제(Diagnosis-related group, DRG)란 의사가 진단하는 환자의 진단명에 따라
        //                                                         입원환자의 진료비를 보상하는 제도로서 입원기간 동안 제공된 검사비, 수술비, 약제비 등 의료서비스의 종류나
        //                                                         양에 관계없이 어떤 질병의 진료를 위해 입원했었는가에 따라 미리 책정된 일정액의 진료비를 보상하는 제도이다.
        //                                                     </CardText>
        //                                                 </CardBody>
        //                                             </Link>
        //                                         </Card>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         <Card className="card-hover">
        //                                             <Link className="card-hover__image" to="/">
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">의료진 해외연수 후기</CardTitle>
        //                                                 </CardBody>
        //                                                 <CardImg className="img-fluid" src={image6} alt="Skote" />
        //                                                 <CardBody>
        //                                                     <CardTitle className="mt-0">빅데이터 연구를 위해 뉴사우스웨일스 주립대학으로 가다</CardTitle>
        //                                                     <CardText>
        //                                                         저는 평소 관심 있던 빅데이터를 연구하기 위해 지난 1년간 뉴사우스웨일스 주립대학 의대 빅데이터 연구센터로 해외연수를 다녀왔습니다.
        //                                                         이곳에서 저는 암 역학을 연구하는 팀에서 유방암 코호트 연구에 참여해,
        //                                                         관심 있던 빅데이터를 통한 심도 있는 연구는 물론 뜻깊은 시간을 보낼 수 있었습니다.
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

export default IhOfLife;

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
import avatar1 from "../../assets/images/users/avatar-1.jpg";

import avatar8 from "../../assets/images/users/avatar-8.jpg";
import {Link} from "react-router-dom";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

const IhOfLife = () => {

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
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle className="mt-0">Card title</CardTitle>
                                                        <CardSubtitle className="font-14 text-muted">Support card subtitle</CardSubtitle>
                                                    </CardBody>
                                                    <CardImg className="img-fluid" src={avatar8} alt="Skote" />
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
                                                    <CardImg className="img-fluid" src={avatar1} alt="Skote" />
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

                                <div className="owl-nav" style={{ textAlign : "center" }}>
                                    <button
                                        type="button"
                                        className="border-0"
                                        onClick={() => {
                                            setStep1(true)
                                            setStep2(false)
                                        }}
                                        disabled={ step1 }
                                    >
                                        <i className="mdi mdi-chevron-left"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="border-0"
                                        onClick={() => {
                                            setStep1(false)
                                            setStep2(true)
                                        }}
                                        disabled={ step2 }
                                    >
                                        <i className="mdi mdi-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </Col>

                </Container>

            </section>
        </Fragment>
    );
};

export default IhOfLife;

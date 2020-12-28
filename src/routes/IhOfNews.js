import React, {Fragment} from 'react';
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

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import img3 from "../assets/images/example/sub/COL/sub01_04_01.jpg";

const IhOfNews = ({match}) => {

    const items = [
        {
            id: "1",
            src: img3,
            head: "4",
            title: "1",
            subtitle: "1",
            caption: [
                {
                    title: "1",
                    text: "1"
                }
            ],
        }
    ]

    const item = items.find((p) => p.id === match.params.id)

    return (
        <Fragment>
            <Fragment>
                <section>
                    <Container>
                        <Card className="color-of-life">
                            <CardBody className="color-of-life__header">
                                <div>
                                    <CardTitle>
                                        COLOR of Life
                                        YELLOW
                                    </CardTitle>
                                    <CardTitle>
                                        {item.head}
                                    </CardTitle>
                                </div>
                            </CardBody>

                            <CardImg top className="img-fluid" src={item.src} alt="Skote" />

                            <CardBody className="color-of-life__body">
                                <CardTitle className="color-of-life__body__title">
                                    {item.title}
                                </CardTitle>
                                <CardSubtitle className="color-of-life__body__subtitle">
                                    {item.subtitle}
                                </CardSubtitle>
                            </CardBody>

                            {item.caption && item.caption.map((cap) => (
                                <CardBody className="color-of-life__body">
                                    <CardSubtitle className="color-of-life__body__subtitle">
                                        {cap.title}
                                    </CardSubtitle>
                                    <CardText className="color-of-life__body__text">
                                        {cap.text}
                                    </CardText>
                                </CardBody>
                            ))}

                            {/*<CardBody className="color-of-life__body">*/}
                            {/*    <CardSubtitle className="color-of-life__body__subtitle">*/}
                            {/*        {item.caption}*/}
                            {/*    </CardSubtitle>*/}
                            {/*    <CardText className="color-of-life__body__text">*/}
                            {/*        {item.text}*/}
                            {/*    </CardText>*/}
                            {/*</CardBody>*/}
                        </Card>
                    </Container>
                </section>
            </Fragment>

            <Footer/>
        </Fragment>
    );
};

export default IhOfNews;

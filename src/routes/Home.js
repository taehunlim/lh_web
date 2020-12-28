import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/Home/Cover";
import HomeColorOfLife from "../components/Home/HomeColorOfLife";
import HomeIhOfLife from "../components/Home/HomeIhOfLife";
import HomeIhNews from "../components/Home/HomeIhNews";
import Service from "../components/Home/Service";

const Home = () => {
    return (
        <Fragment>
            {/*<div style={{backgroundColor: "#e49600"}}>*/}
            <div style={{backgroundColor: "#ededed"}}>

                <Header/>

                <Cover/>

                <HomeColorOfLife/>

                <HomeIhOfLife/>

                <HomeIhNews/>

                <Service/>

                <Footer/>
            </div>
        </Fragment>
    );
};

export default Home;

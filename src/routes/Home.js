import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/Home/Cover";
import ColorOfLife from "../components/Home/ColorOfLife";
import IhOfLife from "../components/Home/IhOfLife";
import IhNews from "../components/Home/IhNews";
import Service from "../components/Home/Service";


const Home = () => {
    return (
        <Fragment>
            <div style={{backgroundColor: "light-grey"}}>

                <Header/>

                <Cover/>

                <ColorOfLife/>

                <IhOfLife/>

                <IhNews/>

                <Service/>

                <Footer/>
            </div>
        </Fragment>
    );
};

export default Home;

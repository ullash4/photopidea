import React from 'react';
import Content from './Content/Content';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Content></Content>
        </div>
    );
};

export default Home;
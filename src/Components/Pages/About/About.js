import React from 'react';

const About = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex justify-content-evenly align-items-center gap-3'>
                <div>
                    <h1>Something about me</h1>
                    <p>Hello there, This is Mark William. A pasionate photographer. My bigest ahicvemnet is to work with Commercial Clients include ColorPlus,Linen Club, Levis, Nike, Saffola, Flipkart, Myntra, Biba, Prestige Man Store, Jabong, Peter England, Tata Sky, Wildcraft, Being Human, among others. And my next target is to work with Grazia, Vogue,Harpers Bazaar, GQ, Man's World,Verve, Femina, Filmfare, People Magazine, Marie Claire</p>
                    <p>For contact Email at : programmer@gmail.com</p>
                </div>
                <div>
                <img className='rounded-3 shadow-sm' src="https://i.ibb.co/W6CRQLD/Untitled-design-7.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
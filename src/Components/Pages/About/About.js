import React from 'react';

const About = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex justify-content-evenly align-items-center gap-3'>
                <div>
                    <h1>Something about me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit inventore nihil ab qui quis quas, hic nam optio repellendus quae voluptate natus iusto fugiat vel ut quia a, minima fuga aperiam dolor, placeat beatae excepturi aliquid. Accusamus amet odio maxime? Vitae beatae, unde cum ea sequi odio nulla ad optio.</p>
                </div>
                <div>
                <img className='rounded-3 shadow-sm' src="https://i.ibb.co/vLnRnD2/Untitled-design-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
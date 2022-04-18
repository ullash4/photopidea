import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className='container my-5'>
            <div className='row g-5'>
                <div className='col-12 col-md-5'>
                    <img className='img-fluid rounded-3' src="https://media.giphy.com/media/4Z9h0KfuviJS6r3KK7/giphy.gif" alt="" />
                </div>
                <div className='col-12 col-md-7'>
                    <h1 className='text-center'>This is some text</h1>
                    <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolorem sunt aliquam rem. Quisquam optio similique quam voluptas reiciendis eaque mollitia odit deserunt temporibus, veritatis deleniti, sed dignissimos adipisci? Molestias.</p>
                    <Link to='/blogs'>
                    <button className='btn btn-dark'>Read more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Content;
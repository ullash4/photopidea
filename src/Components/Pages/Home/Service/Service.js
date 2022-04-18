import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({services}) => {
    const {name, price, picture, description} = services;
    return (
        <div className='col-md-6 col-lg-4'>
            <div className='p-3 rounded-3 shadow-lg'>
            <img className='img-fluid rounded-3' src={picture} alt="" />
            <h1>{name}</h1>
            <h5>Price : {price}</h5>
            <p className='text-start'>{description.slice(0, 200)}</p>
            <Link to='/checkout'>
            <button className='btn btn-dark'>Book Now</button>
            </Link>
            
            </div>
        </div>
    );
};

export default Service;
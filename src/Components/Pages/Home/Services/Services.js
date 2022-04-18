import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    return (
        <div className='container my-5'>
            <h1 className='text-center mb-3'>My services</h1>
            <div className='row g-4'>
            {
                data.map(service=><Service key={service.id} services={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
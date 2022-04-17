import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='container mb-5'>
            <h1 className='text-center my-5'>Some Reviews of Mine</h1>
            <div className='row g-5'>
            {
                reviews.map(rev=><Review key={rev.id} rev={rev}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;
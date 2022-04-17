import React from "react";

const Review = ({ rev }) => {
  const { picture, name, company, review } = rev;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="p-3 shadow-lg rounded-3">
        <div className="d-flex justify-content-evenly align-items-center mb-3">

          <img
            weight={100}
            height={100}
            className="rounded-circle"
            src={picture}
            alt=""
          />
          <div>
          <p>{name}</p>
          <h5>From : {company}</h5>
          </div>

        </div>
        <p>{review.slice(0, 180)}</p>
      </div>
    </div>
  );
};

export default Review;

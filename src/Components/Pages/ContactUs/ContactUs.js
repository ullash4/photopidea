import React from "react";
import GetInTouch from "./GetInTouch";

function ContactUs() {
  return (
    <div className="">
      <div className="container my-5 d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3">
        <div>
          <h1>Have a project in your mind</h1>
          <p>
            Reach out to us We can make something awsome together
          </p>
          
        </div>
        <div>
        <img className='img-fluid rounded-3' src="https://i.ibb.co/yptZMv7/Untitled-design-9.png" alt="" />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}

export default ContactUs;

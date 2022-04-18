import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Ks1YLTR/Untitled-design-1.png"
            alt="first slide"
          />
          <Carousel.Caption>
            <h3>My album shoot</h3>
            <p>Now I recently join to shoot album</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/XDZkfdq/carousel-3.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Event Photography</h3>
            <p>I do event photography various events, capturing the atmosphere and personalities of each occasion</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/M7Fj3tP/fggggggggggggg.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Restaurant and food photography</h3>
            <p>
            Capturing the atmospheres, cuisines, drinks, kitchens, interior & exterior settings as well as guests enjoying their experience.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;

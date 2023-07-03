import React from "react";
import "../../styles/testimonials.css";
import IMG from "../../assets/tokito.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//  Hacer un array de objetos Data para hacer map en testimonials

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="img"></img>
          </div>
          <h5 className="client_name">Muichiro tokito</h5>
          <small className="client_review">
            l orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="img"></img>
          </div>
          <h5 className="client_name">Muichiro tokito</h5>
          <small className="client_review">
            l orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="img"></img>
          </div>
          <h5 className="client_name">Muichiro tokito</h5>
          <small className="client_review">
            l orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="img"></img>
          </div>
          <h5 className="client_name">Muichiro tokito</h5>
          <small className="client_review">
            l orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum
            orem ipsum orem ipsum orem ipsum
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

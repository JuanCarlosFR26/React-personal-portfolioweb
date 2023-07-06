import React from "react";
import "../../styles/testimonials.css";
import IMG from "../../assets/tokito.jpg";
import AVATAR1 from '../../assets/testimonial1.jpg'
import AVATAR2 from '../../assets/testimonial2.jpg'
import AVATAR3 from '../../assets/testimonial4.jpg'

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
            <img src={AVATAR1} alt="img"></img>
          </div>
          <h5 className="client_name">Óscar Jesús Soria Ruíz</h5>
          <small className="client_review">
          ¡Recomendado 100%! Es muy cercano, profesional, sincero, domina los conocimientos que imparte y además es humilde.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR2} alt="img"></img>
          </div>
          <h5 className="client_name">Juan José</h5>
          <small className="client_review">
          Tiene packs interesantes para aprender de forma económica. Te acompaña todo el tiempo necesario para que aprendas bien y te anima a realizar tus propio proyectos con su ayuda. Recomendado sin duda. Gracias.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR3} alt="img"></img>
          </div>
          <h5 className="client_name">Nicolás</h5>
          <small className="client_review">
          Un profundo conocimientos técnicos, una gran forma de dar sus clases y explicaciones, ejemplos muy sencillos, muy fácil aprender con él. Al margen, de lo cercano que te hace sentir. 100 % recomendable sin lugar a dudas.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

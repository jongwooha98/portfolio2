import placeholder from '../assets/images/birthday-reminder.png';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import '../sass/portfolio.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper portfolio__container container"
        >
          {/* Project 1 */}
          <SwiperSlide className="portfolio__content grid">
            <img src={placeholder} alt="" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Project 1</h3>
              <p className="portfolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </SwiperSlide>
          {/* Project 2 */}
          <SwiperSlide className="portfolio__content grid">
            <img src={placeholder} alt="" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Project 2</h3>
              <p className="portfolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </SwiperSlide>
          {/* Project 3 */}
          <SwiperSlide className="portfolio__content grid">
            <img src={placeholder} alt="" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Project 3</h3>
              <p className="portfolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;

import React from 'react';
import placeholder from '../assets/images/birthday-reminder.png';

import { HashLink as Link } from 'react-router-hash-link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../sass/_portfolio.scss';
// import Projects JSON
import projectsData from './projects/projectsData.js';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

let latestProjects = projectsData.slice(projectsData.length - 3);
let latestProject1 = latestProjects[2];
let latestProject2 = latestProjects[1];
let latestProject3 = latestProjects[0];

function Project({ latestProject }) {
  return (
    <>
      <img src={latestProject.image} alt="" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">{latestProject.title}</h3>
        <span className="portfolio__category">{latestProject.category}</span>
        <p className="portfolio__description">{latestProject.description}</p>
        <a
          href={latestProject.href}
          target="_blank"
          rel="noreferrer"
          className="button button--flex button--small portfolio__button"
        >
          Demo
          <i className="uil uil-arrow-right button__icon" />
        </a>
      </div>
    </>
  );
}
function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div>
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
          <SwiperSlide className="portfolio__content grid">
            <Project latestProject={latestProject1} />
          </SwiperSlide>
          <SwiperSlide className="portfolio__content grid">
            <Project latestProject={latestProject2} />
          </SwiperSlide>
          <SwiperSlide className="portfolio__content grid">
            <Project latestProject={latestProject3} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="to-projects">
        <h3>Check out other projects</h3>
        <Link to="/projects" className="button button--flex">
          Explore Projects
          <i class="uil uil-plane-fly button__icon" />
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;

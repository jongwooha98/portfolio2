import '../sass/qualification.scss';
import { useEffect } from 'react';

function Qualification() {
  useEffect(() => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');
    // console.log(tabs, tabContents);

    tabs.forEach((tab) => {
      // console.log(tab);
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        // console.log(target);

        tabContents.forEach((tabContent) => {
          // console.log(tabContent);
          tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach((tab) => {
          tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
      });
    });
  });

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#experience"
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          {/* education */}
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            {/* qualification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Electrical Engineer</h3>
                <span className="qualification__subtitle">
                  Penn State University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2016 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* qualification 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Korea - korea</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2000 -2000
                </div>
              </div>
            </div>
            {/* qualification 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelancer</h3>
                <span className="qualification__subtitle">
                  Penn State University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2000 - 2000
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* qualification 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">BS in EE</h3>
                <span className="qualification__subtitle">
                  Penn State University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2000 - 2000
                </div>
              </div>
            </div>
          </div>

          {/* experience */}
          <div className="qualification__content" data-content id="experience">
            {/* qualification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Engineer</h3>
                <span className="qualification__subtitle">Apple</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2016 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* qualification 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Toss</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2000 -2000
                </div>
              </div>
            </div>
            {/* qualification 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI Designer</h3>
                <span className="qualification__subtitle">Adobe </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2000 - 2000
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

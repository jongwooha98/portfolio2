import '../sass/_qualification.scss';
import { useEffect } from 'react';

function Qualification() {
  useEffect(() => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');
    // console.log(tabs, tabContents);

    tabs.forEach(tab => {
      // console.log(tab);
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        // console.log(target);

        tabContents.forEach(tabContent => {
          // console.log(tabContent);
          tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
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
                <h3 className="qualification__title">Penn State University</h3>
                <span className="qualification__subtitle">
                  Bachelor of Science in Electrical Engineering
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Aug 2016 - May 2020
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
                <h3 className="qualification__title">Yonsei University</h3>
                <span className="qualification__subtitle">Study Abroad</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Mar 2018 - Jun 2018
                </div>
              </div>
            </div>
            {/* qualification 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  York Catholic High School
                </h3>
                <span className="qualification__subtitle">
                  High School Diploma
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Aug 2012 - May 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          {/* experience */}
          <div className="qualification__content" data-content id="experience">
            {/* qualification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Lab Assistant</h3>
                <span className="qualification__subtitle">
                  Penn State College of Engineering
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Jan 2020 - May 2020
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
                <h3 className="qualification__title">
                  Electrical Subsystems Prototype Team Lead
                </h3>
                <span className="qualification__subtitle">
                  Penn State Unmanned Aerial Systems
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Aug 2019 - May 2020
                </div>
              </div>
            </div>
            {/* qualification 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Resident Assistant</h3>
                <span className="qualification__subtitle">
                  Penn State Residence Life
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Aug 2019 - May 2020
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
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Electrical Team Member</h3>
                <span className="qualification__subtitle">
                  Penn State Unmanned Aerial Systems
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Sep 2018 - Aug 2019
                </div>
              </div>
            </div>
            {/* qualification 5 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Food Service Worker</h3>
                <span className="qualification__subtitle">
                  Penn State Food Services
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Sep 2017 - Dec 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* qualification 6 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Private Tutor</h3>
                <span className="qualification__subtitle">Self-employed</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> May 2017 - Aug 2017
                </div>
              </div>
            </div>
            {/* qualification 7 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Sponsorship Team Member
                </h3>
                <span className="qualification__subtitle">Hack PSU</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> Jan 2017 - Apr 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

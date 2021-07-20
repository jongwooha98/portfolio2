import '../sass/skills.scss';

function Skills() {
  // const skillsContent = document.getElementsByClassName('skills__content');
  // const skillsHeader = document.querySelector('.skills__header');

  // const toggleSkills = () => {
  //   let itemClass = this.parentNode.getElementsByClassName;

  //   for (let i = 0; i < skillsContent.length; i++) {
  //     skillsContent[i].className = 'skills__content skills__close';
  //   }
  //   if (itemClass === 'skills__content skills__close') {
  //     this.parentNode.className = 'skills__content skills__open';
  //   }
  // };
  // skillsHeader.forEach((el) => {
  //   el.addEventListener('click', toggleSkills);
  // });
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skill</span>

      <div className="skills__container container grid">
        <div>
          {/* SKILL 1 */}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i class="uil uil-brackets-curly skills__icon"></i>
              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <i class="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">65%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
          {/* SKILL 2 */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <i class="uil uil-brackets-curly skills__icon"></i>
              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <i class="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">65%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
          {/* SKILL 3 */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <i class="uil uil-brackets-curly skills__icon"></i>
              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <i class="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">65%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import '../sass/_skills.scss';

import { ReactComponent as FirebaseLogo } from '../assets/images/firebase-logo.svg';

function Skill(props) {
  const { skill, icon, logoColor } = props;
  return (
    <>
      <div className={`${skill} skill`} style={{ backgroundColor: logoColor }}>
        <i className={`${icon} icon`} />
      </div>
    </>
  );
}
function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>

      <div className="skills__container container grid">
        {/* SKILL 1 */}
        <div className="skills__content">
          <div className="skills__header">
            <i className="uil uil-brackets-curly skills__icon"></i>
            <div>
              <h1 className="skills__title">Frontend</h1>
              <span className="skills__subtitle">Self-taught</span>
            </div>
          </div>
          <div className="skills__list">
            <Skill skill="html5" icon="fab fa-html5" logoColor="#e34f26" />
            <Skill skill="css3" icon="fab fa-css3-alt" logoColor="#2965f1" />
            <Skill skill="javascript" icon="fab fa-js" logoColor="#f7df1e" />
            <Skill skill="react" icon="fab fa-react" logoColor="#00d8ff" />
            <Skill
              skill="bootstrap"
              icon="fab fa-bootstrap"
              logoColor="#563d7c"
            />
            <Skill skill="sass" icon="fab fa-sass" logoColor="#cc6699" />
          </div>
        </div>
        {/* SKILL 2 */}
        <div className="skills__content">
          <div className="skills__header">
            <i className="uil uil-database skills__icon"></i>
            <div>
              <h1 className="skills__title">Database</h1>
              <span className="skills__subtitle">Self-taught</span>
            </div>
          </div>
          <div className="skills__list">
            <div className="firebase skill">
              <FirebaseLogo
                style={{
                  height: '4rem',
                  width: '4rem',
                }}
                className="icon"
              />
            </div>
          </div>
        </div>
        {/* SKILL 3 */}
        <div className="skills__content">
          <div className="skills__header">
            <i className="uil uil-circuit skills__icon"></i>
            <div>
              <h1 className="skills__title">Electrical Engineering</h1>
              <span className="skills__subtitle">
                Bachelor of Science degree
              </span>
            </div>
          </div>
          <div className="skills__list grid">
            <span>Circuit design and analysis</span>
            <span>NI Multisim</span>
            <span>NI LabView</span>
            <span>Matlab</span>
          </div>
        </div>
        {/* SKILL 4 */}
        <div className="skills__content">
          <div className="skills__header">
            <i className="uil uil-language skills__icon"></i>
            <div>
              <h1 className="skills__title">Language</h1>
              <span className="skills__subtitle">Fluent</span>
            </div>
          </div>
          <div className="skills__list grid">
            <span>English</span>
            <span>Korean</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

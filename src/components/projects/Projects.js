import React, { useState, useEffect } from 'react';

import './_projects.scss';

import projectsData from './projectsData.js';

const items = projectsData.slice().reverse(); // reversed data, so latest item is shown first.

const allCategories = ['All'].concat([
  ...new Set(items.map(item => item.category)),
]);

function Button({ button, filter }) {
  return (
    <>
      {button.map(category => {
        return (
          <button
            className="button button--flex"
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

function Menu({ menuItem }) {
  return (
    <>
      {menuItem.map(item => {
        return (
          <div className="item__container" key={item.id}>
            <img src={item.image} alt="" className="item__thumbnail" />
            <h2>{item.title}</h2>
            <div className="item__links">
              {item.href !== null ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex item__links__button"
                >
                  Demo
                  <i class="uil uil-external-link-alt button__icon" />
                </a>
              ) : null}
              {item.pdf !== null ? (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex item__links__button"
                >
                  View PDF
                  <i class="uil uil-file button__icon" />
                </a>
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
}

function Projects() {
  const [menuItem, setMenuItem] = useState(items); // eslint-disable-line no-unused-vars
  const [buttons, setButtons] = useState(allCategories); // eslint-disable-line no-unused-vars

  const filter = button => {
    if (button === 'All') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category === button);
    setMenuItem(filteredData);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <section className="projects section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Check out my projects</span>
      <div className="projects__container container">
        <div className="projects__buttons">
          <Button button={buttons} filter={filter} />
        </div>
        <div className="items__container">
          <Menu menuItem={menuItem} />
        </div>
      </div>
    </section>
  );
}

export default Projects;

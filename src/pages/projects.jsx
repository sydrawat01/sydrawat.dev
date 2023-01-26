import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import projectsList from '../data/projectList';

import Layout from '../layout/index';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import star from '../../content/thumbnails/star.svg';

export default function ProjectsIndex() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getStars() {
      const repositories = await fetch(
        'https://api.github.com/users/sydrawat01/repos?per_page=100',
      );

      return repositories.json();
    }

    getStars()
      .then(data => {
        setRepos(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <SEO />

      <article>
        <header>
          <div className="container">
            <h1>Projects</h1>
            <p className="description">
              A few highlights of my open-source projects. View them all{' '}
              <a href="https://github.com/sydrawat01">on GitHub</a>.
            </p>
          </div>
        </header>

        <section className="projects large container">
          {projectsList.map(project => (
            <div className="project" key={project.name}>
              <h2>{project.name}</h2>
              <div className="links tags">
                {project.writeup && <Link to={project.writeup}>Write-up</Link>}
                {project.slug && (
                  <a
                    href={`https://github.com/sydrawat01/${project.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
                )}
                {project.org && (
                  <a href={`https://github.com/${project.org}`} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
              <p className="description">{project.tagline}</p>
              <div className="stars">
                {repos.find(repo => repo.name === project.slug) && (
                  <>
                    <img src={star} alt="Stargazers" />
                    <span>
                      <a href={`https://github.com/sydrawat01/${project.slug}/stargazers`}>
                        {Number(
                          repos.find(repo => repo.name === project.slug).stargazers_count,
                        ).toLocaleString()}
                        {` stars on GitHub`}
                      </a>
                    </span>
                    <span />
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  );
}

import React from 'react';
import { Link } from 'gatsby';
import netlify from '../../../content/images/netlify.png';
import gatsby from '../../../content/thumbnails/gatsby.png';
import github from '../../../content/images/github.png';
import kofi from '../../../content/images/ko-fi.png';
import ig from '../../../content/images/ig.svg';
import twitter from '../../../content/images/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer container">
      <div>
        <Link to="/contact/">Contact</Link>
        <a href="https://taniarascia.com" target="_blank" rel="noopener noreferrer">Design</a>
        <a href="https://github.com/sydrawat/sydrawat/issues" target="_blank" rel="noopener noreferrer">Issue</a>
      </div>
      <div>
        <a
          href="https://ko-fi.com/sydrawat"
          title="Buy me a Ko-Fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kofi} className="footer-img" alt="GitHub" />
        </a>
        <a
          href="https://github.com/sydrawat"
          title="Open-source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="footer-img" alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/sydrawat"
          title="Artsy me!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ig} className="footer-img" alt="Netlify" />
        </a>
        <a
          href="https://www.netlify.com/"
          title="Hosted by Netlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={netlify} className="footer-img" alt="Netlify" />
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gatsby} className="footer-img" alt="Gatsby" />
        </a>
        <a
          href="https://www.twitter.com/sydrawat"
          title="Follow me on Twitter"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 0 }}
        >
          <img src={twitter} className="footer-img" alt="Gatsby" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'gatsby';
import netlify from '../../../content/images/netlify.png';
import gatsby from '../../../content/thumbnails/gatsby.png';
import github from '../../../content/thumbnails/github.svg';
import mail from '../../../content/thumbnails/mail.svg';
import linkedin from '../../../content/thumbnails/linkedin.svg';
import twitter from '../../../content/images/twitter.svg';
import discord from '../../../content/thumbnails/discord.svg';
import mastodon from '../../../content/thumbnails/mastodon.svg';

const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

const Footer = () => {
  const copyYear = getYear();
  return (
    <footer className="footer container">
      <div>
        <a href="/">&copy; {copyYear} Sydrawat</a>
        <a
          href="https://github.com/sydrawat/sydrawat-issues/issues/new/choose"
          target="_blank"
          rel="noopener noreferrer"
        >
          Issues
        </a>
        <Link to="/contact/">Contact</Link>
        <a href="https://sydrawat.netlify.app/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
      </div>
      <div className="contact-container">
        <a
          href="https://github.com/sydrawat01"
          title="Open source contributor on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="footer-img" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-rawat/"
          title="Siddharth Rawat @ Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="footer-img" alt="LinkedIn" />
        </a>
        <a href="mailto:siddharth.rawat94@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={mail} className="footer-img" alt="Mail" />
        </a>
        <a
          href="https://mastodon.social/@sydrawat"
          title="Sid @ Mastodon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mastodon} className="footer-img" alt="Mastodon" />
        </a>
        <a
          href="https://discordapp.com/users/710386344781676574"
          title="Sid @ Discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} className="footer-img" alt="Discord" />
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

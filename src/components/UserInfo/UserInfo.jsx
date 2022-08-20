import React, { Component } from 'react';
import { Link } from 'gatsby';
import sid from '../../../content/images/disp.jpeg';

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={sid} alt="Sid" />
            </div>
            <div className="few-words">
              <h3>
                <Link to="/">Sydrawat</Link>
              </h3>
              <p>
                Hey, I’m <a href="https://twitter.com/sydrawat">Sid</a>, a front-end software
                engineer. Every now and then I like to write down my personal thoughts floating
                beyond the space-time continnum.
              </p>
              <blockquote className="quotation">
                <p>
                  Every one of us is, in the cosmic perspective, precious. If a human disagrees with
                  you, let him live. In a hundred billion galaxies, you will not find another.
                </p>
                <footer>Cosmos, Part 13: Who Speaks for Earth?(1980)</footer>{' '}
                <cite>- Carl Sagan</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

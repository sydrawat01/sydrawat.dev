import React, { Component } from 'react';
import sid from '../../../content/images/sid1994.jpg';
import patreon from '../../../content/thumbnails/gatsby.png';

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={sid} alt="Siddharth Rascia" />
            </div>
            <div>
              <h3>Author</h3>
              <p>
                Hey, I’m Sid, a full stack software engineer. I write about what I know to help
                viewers like you. My site has <strong>no ads, sponsors, or bullshit.</strong> If you
                enjoy my content, please consider supporting what I do!
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/sydrawat"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/sydrawat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" alt="Patreon" /> Become a Patron
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

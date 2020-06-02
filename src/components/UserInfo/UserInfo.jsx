import React, { Component } from 'react';
import sid from '../../../content/images/sid1994.jpg';
import kofi from '../../../content/images/ko-fi-user.png';
import patreon from '../../../content/images/patreon-user.jpg';

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
              <h3>About the author</h3>
              <p>
                Hey, I’m Sid, a software engineer. If you liked this post enough to donate a coffee or beome a patron, I'd be really grateful!
              </p>
              <p>
                Thanks for reading, have a nice day!
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/sydrawat"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
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

import React, { useEffect } from 'react';

import './HuddleLandingpage.css';

const HuddleLandingPage = () => {


  return (
    <div>
      <header className="navbar">
        <img id="logo" src="./images/logo.svg" alt="Logo" />
        <div>
          <button id="btn">Try it free</button>
        </div>
      </header>

      <div className="hero_section">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
      </div>

      <div className="screen_mockups" data-aos="fade-up">
        <img src="./images/screen-mockups.svg" alt="Screen Mockups" />
      </div>

      <div className="followers">
        <div className="communities" data-aos="fade-right">
          <p>
            <img src="./images/icon-communities.svg" alt="Communities Icon" />
          </p>
          <h1>1.4k+</h1>
          <p>Communities Formed</p>
        </div>
        <div className="messages" data-aos="fade-up">
          <p>
            <img src="./images/icon-messages.svg" alt="Messages Icon" />
          </p>
          <h1>2.7m+</h1>
          <p>Messages Sent</p>
        </div>
      </div>

      {/* Add more sections and content as needed */}
    </div>
  );
};

export default HuddleLandingPage;

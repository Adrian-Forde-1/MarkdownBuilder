import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//React Router DOM
import { Link } from 'react-router-dom';

//Resources
import wordsBackgroundNormal from '../../resources/img/words-picture-normal.jpg';

const Homepage = () => {
  useEffect(() => {
    const aboutSectionHeading = document.querySelector('#about-heading');
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(aboutSectionHeading, {
      scrollTrigger: {
        trigger: aboutSectionHeading,
        start: 'top center',
        toggleActions: 'play restart resume reverse',
      },
      duration: 0.7,
      opacity: 1,
    });
  }, []);

  return (
    <div>
      <header className="w-full h-screen bg-black relative flex justify-center items-center">
        <img
          src={wordsBackgroundNormal}
          className="w-full h-full object-cover absolute inset-0"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div
          className="z-10 flex-col justify-center items-center absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1 className="text-white lg:text-6xl md:text-5xl text-4xl whitespace-no-wrap text-center font-light">
            Markdown Creator
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-lg text-center">
            Don’t Know Markdown? Not a Problem
          </p>
          <div className="flex justify-center mt-6 items-center w-auto">
            <Link to="/" className="cta mr-2 lg:mr-4">
              Learn More
            </Link>
            <Link to="/" className="cta ml-2 lg:ml-4">
              Get Started
            </Link>
          </div>
        </div>
        <a
          href="#about"
          className="w-10 h-10 md:mt-128 mt-96 bg-theme_red-100 rounded-full mx-auto flex justify-center items-center no-underline z-10"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-down text-2xl text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
            />
            <path
              fillRule="evenodd"
              d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </a>
      </header>
      <section className="w-full h-screen relative" id="about">
        <div
          className="section-heading"
          style={{
            zIndex: '99',
          }}
        >
          <h1
            className="relative opacity-0 -translate-y-1/2"
            id="about-heading"
            style={{
              top: '-50%',
              letterSpacing: '30px',
            }}
          >
            ABOU<span style={{ letterSpacing: '0px' }}>T</span>
          </h1>
        </div>
        <div className="bg-theme_red-100 about-item lg:px-40">
          <div className="bg-white about-item__logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              className="text-theme_red-100 about-item__logo-svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.168 8H13l.806-4.835A1 1 0 0 0 12.819 2H7.667a1 1 0 0 0-.986.835l-1.667 10A1 1 0 0 0 6 14h4v8l8.01-12.459A1 1 0 0 0 17.168 8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-white about-item__content-container">
            <h1>Speed</h1>
            <p>Create the perfect markdown in a short period of time.</p>
          </div>
        </div>
        <div className="bg-white about-item lg:px-40">
          <div className="bg-theme_red-100 about-item__logo-container">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-gear text-white about-item__logo-svg"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
              />
              <path
                fillRule="evenodd"
                d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
              />
            </svg>
            <div
              className="h-1 w-12 md:w-16 lg:w-20 bg-white absolute"
              style={{
                transform: 'translate(-50%, -50%) rotate(45deg)',
                transformOrigin: 'center',
                top: '50%',
                left: '50%',
              }}
            ></div>
          </div>
          <div className="text-theme_red-100 about-item__content-container">
            <h1>No Setup</h1>
            <p>
              Jump right into creating. Straight to the point. Everything you
              need is already there for you.
            </p>
          </div>
        </div>
        <div className="bg-theme_red-100 about-item lg:px-40">
          <div className="bg-white about-item__logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              className="text-theme_red-100 about-item__logo-svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <path d="M11 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zm4.657 2.757a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707zM18 10a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM5.05 6.464A1 1 0 1 0 6.464 5.05l-.707-.707a1 1 0 0 0-1.414 1.414l.707.707zM5 10a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm3 6v-1h4v1a2 2 0 1 1-4 0zm4-2c.015-.34.208-.646.477-.859a4 4 0 1 0-4.954 0c.27.213.462.519.476.859h4.002z" />
              </g>
            </svg>
          </div>
          <div className="text-white about-item__content-container">
            <h1>Ease of use</h1>
            <p>
              Intuitive and easy to use. Get started quickly with our simple and
              effective design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

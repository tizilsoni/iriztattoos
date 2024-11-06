import React from "react";
import edited from "../image/edited.jpg";
import profilesm from "../image/profilesm.jpg";
const About = () => {
  return (
    <div className="font-sans antialiased text-gray-900 py-16 leading-normal tracking-wider bg-cover">
      <h1 className="text-center text-5xl md:text-4xl text-white font-medium">
        Artista
      </h1>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-2 lg:my-0">
        {/* <!--Main Col--> */}
        {/* <!--Img Col--> */}
        <div className="w-full lg:w-2/5">
          {/* <!-- Big profile image for side bar (desktop) --> */}
          <img
            src={edited}
            alt="Profile"
            className="rounded-none lg:rounded-l-lg lg:rounded-r-none shadow-xl hidden lg:block hover:scale-200 zoom"
          />
        </div>
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-none lg:rounded-r-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-2 md:p-12 text-center lg:text-left">
            {/* <!-- Image for mobile view--> */}
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
              {" "}
              <img src={profilesm} alt="Profile" />
            </div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              {" "}
              Shraddha Saini{" "}
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-red-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              Taamistra | Owner Iriz Tattoo studio
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-red-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>{" "}
              Indore, Madhya Pradesh
            </p>
            <p className="pt-8 text-sm">
              Stark is initially depicted as an industrialist, genius inventor,
              and playboy who is CEO of Stark Industries. Initially the chief
              weapons manufacturer for the U.S. military, he has a change of
              heart and redirects his technical knowledge into the creation of
              mechanized suits of armor which he uses to defend earth.
            </p>

            <div className="pt-12 pb-8 zoom">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSegsjnRn8IP5JnCe-aRs9h5UamY3pwq13_LD3zqsIJXk8faBg/viewform?usp=sf_link"
                className="bg-red-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="https://www.facebook.com/tonystarkpage/"
                data-tippy-content="@tonystarkpage"
              >
                <i className="fa fa-2x fa-facebook h-6 fill-current text-gray-600 hover:text-blue-700" />
              </a>
              <a
                className="link"
                href="https://twitter.com/iron_man"
                data-tippy-content="@iron_man"
              >
                <i className="fa fa-2x fa-twitter h-6 fill-current text-gray-600 hover:text-blue-700" />
              </a>
              <a
                className="link"
                href="https://g.co/kgs/kRnF45W"
                data-tippy-content="@github_handle"
              >
                <i className="fa fa-2x fa-google h-6 fill-current text-gray-600 hover:text-red-700" />
              </a>
              <a
                className="link"
                href="https://unsplash.com/s/photos/tony-stark"
                data-tippy-content="@unsplash_handle"
              >
                <i className="fa fa-2x fa-youtube h-6 fill-current text-gray-600 hover:text-red-700" />
              </a>

              <a
                className="link"
                href="https://www.instagram.com/taamistra/"
                data-tippy-content="@taamistra"
              >
                <i className="fa fa-2x fa-instagram h-6 fill-current text-gray-600 hover:text-red-700" />
              </a>
            </div>

            {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

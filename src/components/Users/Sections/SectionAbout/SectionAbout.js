import React from "react";
const SectionAbout = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h2 className="has-ellipsis-left">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#" className="btn btn-template" target="_blank">
            Download CV
          </a>
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
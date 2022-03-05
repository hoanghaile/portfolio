import React from "react";

const SectionHero = () => {
  return (
    <>
      <section
        className="hero gray-bg"
        id="hero"
        style={{
          background: "url(img/hero-bg.jpg) no-repeat; background-size: cover",
        }}
      >
        <div className="container d-flex align-items-center">
          <div className="heading">
            <p className="wow fadeInUp">Hello, I'm</p>
            <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              LE HOANG HAI<span className="ellipsis"></span>
            </h1>
            <p className="wow fadeInUp" data-wow-delay="0.6s">
              Fresher Web Designer (front-end)
            </p>
            <ul
              className="social list-unstyled list-inline wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <li className="list-inline-item">
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Facebook">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Facebook">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Facebook">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Google Plus">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionHero;

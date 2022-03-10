import React from "react";
import img from "../../../../assets/img/img-cv.jpg"

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
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="heading item">
                <p className="wow fadeInUp">Hello, I'm</p>
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  LE HOANG HAI<span className="ellipsis"></span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Fresher Front-end Developer (ReactJs)
                </p>
                <ul
                  className="social list-unstyled list-inline wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/hoanghai.le.3194524" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/HoangHai1009" title="Twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  {/* <li className="list-inline-item">
                <a href="#" title="Facebook">
                  <i className="fa fa-behance"></i>
                </a>
              </li> */}
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/hoanghai.le.3194524/" title="Instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/hoanghaile" title="Github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://bitbucket.org/dashboard/overview" title="Bitbucket">
                      <i className="fa fa-bitbucket"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <img src={img} style={{ borderRadius: "50%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionHero;

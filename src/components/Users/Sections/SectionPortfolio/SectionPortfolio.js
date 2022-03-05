import React from "react";
import Work_1 from "../../../../assets/img/work-1.jpg";
import Work_2 from "../../../../assets/img/work-2.jpg";
import Work_3 from "../../../../assets/img/work-3.jpg";
import Work_4 from "../../../../assets/img/work-4.jpg";
import Work_5 from "../../../../assets/img/work-5.jpg";
import Work_6 from "../../../../assets/img/work-6.jpg";

const SectionPortfolio = () => {
  return (
    <>
      <section className="portfolio gray-bg has-gradient-both" id="portfolio">
        <div className="container">
          <h2 className="has-ellipsis-left">My Portfolio</h2>

          <div className="gallery text-center">
            <ul className="controls list-inline">
              <li className="list-inline-item">
                <div className="filter" data-filter="all">
                  All
                </div>
              </li>
              <li className="list-inline-item">
                <div className="filter" data-filter=".web-design">
                  Web Design
                </div>
              </li>
              <li className="list-inline-item">
                <div className="filter" data-filter=".ux-design">
                  UX Design
                </div>
              </li>
              <li className="list-inline-item">
                <div className="filter" data-filter=".typography">
                  Typography
                </div>
              </li>
            </ul>

            <div id="gallery" className="row">
              <div className="mix web-design col-lg-4 col-md-6">
                <div className="item wow fadeInUp">
                  <a
                    href="img/work-1.jpg"
                    className="image"
                    data-fancybox="gallery"
                  >
                    <img src={Work_1} className="img-fluid" alt="..." />
                    <div className="overlay hidden-sm-down d-flex justify-content-center align-items-center">
                      <div className="icon"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mix ux-design col-lg-4 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="0.2s">
                  <a
                    href="img/work-2.jpg"
                    className="image"
                    data-fancybox="gallery"
                  >
                    <img src={Work_2} className="img-fluid" alt="..." />
                    <div className="overlay hidden-sm-down d-flex justify-content-center align-items-center">
                      <div className="icon"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mix web-design col-lg-4 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="0.4s">
                  <a
                    href="img/work-3.jpg"
                    className="image"
                    data-fancybox="gallery"
                  >
                    <img src={Work_3} className="img-fluid" alt="..." />
                    <div className="overlay hidden-sm-down d-flex justify-content-center align-items-center">
                      <div className="icon"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mix typography col-lg-4 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="0.6s">
                  <a
                    href="img/work-4.jpg"
                    className="image"
                    data-fancybox="gallery"
                  >
                    <img src={Work_4} className="img-fluid" alt="..." />
                    <div className="overlay hidden-sm-down d-flex justify-content-center align-items-center">
                      <div className="icon"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mix ux-design col-lg-4 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="0.8s">
                  <a
                    href="img/work-5.jpg"
                    className="image"
                    data-fancybox="gallery"
                  >
                    <img src={Work_5} className="img-fluid" alt="..." />
                    <div className="overlay hidden-sm-down d-flex justify-content-center align-items-center">
                      <div className="icon"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mix web-design col-lg-4 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="1s">
                  <a
                    href="img/work-6.jpg"
                    className="image"
                    data-fancybox="gallery"
                  >
                    <img src={Work_6} className="img-fluid" alt="..." />
                    <div className="overlay hidden-sm-down d-flex justify-content-center align-items-center">
                      <div className="icon"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionPortfolio;

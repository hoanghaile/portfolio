import React from "react";
import Layers from "../../../../assets/img/soccer_ball2.svg";
import Coding from "../../../../assets/img/cinema-15.svg";
import Smartphone from "../../../../assets/img/music-15.svg";
import LightBulb from "../../../../assets/img/Coffee-Cup-Silhouette.svg";
const SectionServices = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <h2 className="has-ellipsis-left text-center">My Hobby</h2>

          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="items wow fadeInUp">
                <div className="icon">
                  <img src={Layers} alt="Web Design" />
                </div>
                <h3>Play soccer</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="item wow fadeInUp" data-wow-delay="0.3s">
                <div className="icon">
                  <img src={Coding} alt="Web Development" />
                </div>
                <h3>Movie</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon">
                  <img src={Smartphone} alt="App Design" />
                </div>
                <h3>Music</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="item wow fadeInUp" data-wow-delay="0.9s">
                <div className="icon">
                  <img src={LightBulb} alt="Marketing" />
                </div>
                <h3>Coffee with friends</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionServices;

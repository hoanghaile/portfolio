import React from "react";
import Layers from "../../../../assets/img/layers.svg";
import Coding from "../../../../assets/img/coding.svg";
import Smartphone from "../../../../assets/img/smartphone.svg";
import LightBulb from "../../../../assets/img/light-bulb.svg";

const SectionServices = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <h2 className="has-ellipsis-left text-center">My Services</h2>

          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="items wow fadeInUp">
                <div className="icon">
                  <img src={Layers} alt="Web Design" />
                </div>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="item wow fadeInUp" data-wow-delay="0.3s">
                <div className="icon">
                  <img src={Coding} alt="Web Development" />
                </div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon">
                  <img src={Smartphone} alt="App Design" />
                </div>
                <h3>App Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="item wow fadeInUp" data-wow-delay="0.9s">
                <div className="icon">
                  <img src={LightBulb} alt="Marketing" />
                </div>
                <h3>Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionServices;

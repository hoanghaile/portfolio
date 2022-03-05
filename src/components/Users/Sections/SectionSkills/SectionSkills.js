import React from "react";

const SectionSkills = () => {
  return (
    <>
      <section className="skills gray-bg has-gradient-both" id="skills">
        <div className="container">
          <h2 className="has-ellipsis-left">My Skills</h2>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>80%</strong>
                <h4>Photoshop</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%", height: "3px" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>70%</strong>
                <h4>Illustrator</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "70%", height: "3px" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>90%</strong>
                <h4>HTML/CSS</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%", height: "3px" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>70%</strong>
                <h4>Javascript</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "70%", height: "3px" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>80%</strong>
                <h4>SASS &amp; LESS</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%", height: "3px" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>88%</strong>
                <h4>PHP &amp; MySQL</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "88%", height: "3px" }}
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>95%</strong>
                <h4>Wordpress</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%", height: "3px" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>40%</strong>
                <h4>Laravel</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40 %", height: "3px" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSkills;

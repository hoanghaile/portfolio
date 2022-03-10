import React from "react";

const SectionSkills = () => {
  return (
    <>
      <section className="skills gray-bg has-gradient-both" id="skills">
        <div className="container">
          <h2 className="has-ellipsis-left">My Skills</h2>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                {/* <strong>70%</strong> */}
                <h4>ReactJS</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                
                <h4>Photoshop</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                <strong>70%</strong>
                <h4>Illustrator</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                {/* <strong>90%</strong> */}
                <h4>HTML/CSS</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                {/* <strong>70%</strong> */}
                <h4>Javascript</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                {/* <strong>80%</strong> */}
                <h4>SASS &amp; LESS</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                {/* <strong>60%</strong> */}
                <h4>ExpressJs &amp; MongoDB</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="item">
                {/* <strong>75%</strong> */}
                <h4>Wordpress</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "3px" }}
                    aria-valuenow="75"
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

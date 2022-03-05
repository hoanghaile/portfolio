import React from "react";

const SectionResume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="container">
          <div className="timeline-holder education">
            <h2 className="text-center wow fadeInUp">Education</h2>

            <div className="timeline">
              <div className="timeline-body">
                <div className="timeline-block block-left">
                  <h3 className="display-3">Graduation</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>

                <div className="timeline-block block-right">
                  <h3 className="display-3">Master Degree</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>

                <div className="timeline-block block-left">
                  <h3 className="display-3">Graphic Design Diploma</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>

                <div className="timeline-block block-right">
                  <h3 className="display-3">Web Design Diploma</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-holder employment">
            <h2 className="text-center wow fadeInUp">Employment</h2>

            <div className="timeline">
              <div className="timeline-body">
                <div className="timeline-block block-left">
                  <h3 className="display-3">Print Designer</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>

                <div className="timeline-block block-right">
                  <h3 className="display-3">Sr. Graphic Designer</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>

                <div className="timeline-block block-left">
                  <h3 className="display-3">UI/UX Designer</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>

                <div className="timeline-block block-right">
                  <h3 className="display-3">Lr. Web Developer</h3>
                  <p>Lorem ipsum dolor consectetur adipisicing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionResume;

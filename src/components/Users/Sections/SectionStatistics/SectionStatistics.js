import React from "react";

const SectionStatistics = () => {
  return (
    <>
      <section className="statistics gray-bg has-gradient-both" id="statistics">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="item text-center">
                <strong className="counter">71</strong>
                <h4 className="display-4">Satisfied Clients</h4>
                <div className="ellipsis"></div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item text-center">
                <strong className="counter">35</strong>
                <h4 className="display-4">Tech Awards</h4>
                <div className="ellipsis"></div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item text-center">
                <strong className="counter">145</strong>
                <h4 className="display-4">Completed Projects</h4>
                <div className="ellipsis"></div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item text-center">
                <strong className="counter">57</strong>
                <h4 className="display-4">New Concepts</h4>
                <div className="ellipsis"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionStatistics;

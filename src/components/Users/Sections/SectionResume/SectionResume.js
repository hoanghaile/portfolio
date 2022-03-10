import React from "react";
import Education from "./TimelineHolder/Education";
import Employment from "./TimelineHolder/Employment"

const SectionResume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="container">
          <Education />

          {/* <Employment /> */}
        </div>
      </section>
    </>
  );
};

export default SectionResume;

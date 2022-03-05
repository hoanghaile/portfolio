import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <div className="preloader-inner d-flex align-items-center justify-content-center">
          <div className="circle-big">
            <div className="circle-small"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;

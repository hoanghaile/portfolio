import React from "react";
import clientSample from "../../../../assets/img/client-sample.png";

const SectionClients = () => {
  return (
    <>
      <section className="clients gray-bg has-gradient-both" id="clients">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-2 col-md 4 col-sm-6 text-center">
              <img src={clientSample} alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md 4 col-sm-6 text-center">
              <img src={clientSample} alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md 4 col-sm-6 text-center">
              <img src={clientSample} alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md 4 col-sm-6 text-center">
              <img src={clientSample} alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md 4 col-sm-6 text-center">
              <img src={clientSample} alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md 4 col-sm-6 text-center">
              <img src={clientSample} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionClients;

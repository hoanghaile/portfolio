import React from "react";
import calendar from "../../../../assets/img/calendar3.svg";
import Mail from "../../../../assets/img/envelope-fill.svg";
import Phone from "../../../../assets/img/phone.svg";
import Github from "../../../../assets/img/github.svg";
import Address from "../../../../assets/img/house-door.svg";

const SectionStatistics = () => {
  return (
    <>
      <section className="statistics gray-bg has-gradient-both" id="statistics">
        <div className="container">
          <h2 className="has-ellipsis-left">About me</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="item ">
                {/* <strong className="counter">71</strong> */}
                <div className="icon text-has-left">
                  <img src={calendar} alt="Marketing" />
                  &nbsp; 12/04/1995
                </div>

                {/* <h4 className="display-4">Satisfied Clients</h4> */}
                {/* <div className="ellipsis"></div> */}
              </div>
              <div className="item ">
                {/* <strong className="counter">71</strong> */}
                <div className="icon text-has-left">
                  <img src={Mail} alt="Marketing" />
                  &nbsp;<a href="mailto:nckt9a.lehoanghai@gmail.com"> nckt9a.lehoanghai@gmail.com</a>
                </div>

                {/* <h4 className="display-4">Satisfied Clients</h4> */}
                {/* <div className="ellipsis"></div> */}
              </div>
              <div className="item ">
                {/* <strong className="counter">71</strong> */}
                <div className="icon text-has-left">
                  <img src={Phone} alt="Marketing" />
                  &nbsp; (+84)933511342
                </div>

                {/* <h4 className="display-4">Satisfied Clients</h4> */}
                {/* <div className="ellipsis"></div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="item ">
                {/* <strong className="counter">71</strong> */}
                <div className="icon text-has-left">
                  <img src={Github} alt="Marketing" />
                  &nbsp; <a className="text-primary" href="https://github.com/hoanghaile">https://github.com/hoanghaile</a>
                </div>

                {/* <h4 className="display-4">Satisfied Clients</h4> */}
                {/* <div className="ellipsis"></div> */}
              </div>
              <div className="item ">
                {/* <strong className="counter">71</strong> */}
                <div className="icon text-has-left">
                  <img src={Address} alt="Marketing" />
                  &nbsp; 48/1, Bùi Thị Lùng, Thới Tứ 2, Thới Tam Thôn, Hóc Môn
                </div>

                {/* <h4 className="display-4">Satisfied Clients</h4> */}
                {/* <div className="ellipsis"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionStatistics;

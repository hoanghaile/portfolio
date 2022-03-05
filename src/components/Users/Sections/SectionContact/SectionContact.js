import React from "react";

const SectionResume = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="has-ellipsis-left text-center wow fadeInUp">
            Contact Me
          </h2>
          <p className="lead text-center wow fadeInUp" data-wow-delay="0.3s">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <div className="form-holder">
            <form
              action="https://formspree.io/your@email.com"
              id="contact-form"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    required
                  />
                  <label htmlFor="username">Enter your name</label>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    name="useremail"
                    className="form-control"
                    id="email"
                    required
                  />
                  <label htmlFor="email">Enter uour email address</label>
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    required
                  ></textarea>
                  <label htmlFor="message">How can we help you?</label>
                </div>

                <div className="col-md-12 form-group text-center no-margin-bottom ">
                  <input
                    type="submit"
                    className="btn btn-template"
                    value="Send Your Message"
                  />
                </div>
              </div>
            </form>
          </div>

          <ul className="contact-details list-unstyled d-flex justify-content-center flex-column flex-md-row">
            <li>
              <div className="icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <p>
                <a href="mailto:Example@mail.com">
                  Nckt9a.lehoanghai@gmail.com
                </a>
              </p>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <p>221B Baker Street, Westminster, London.</p>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <p>
                <a href="tel:986745698">(+84) 933-511-342</a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default SectionResume;

import React from "react";
import Logo from "../../../assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container text-center">
          <div className="logo">
            <img src={Logo} alt="..." width="40" />
          </div>

          <ul className="social list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="#" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Facebook">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Facebook">
                <i className="fa fa-behance"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Facebook">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" title="Google Plus">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>

          <div className="copyrights">
            <p>Copyright &copy; Macron 2017. All righrs reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

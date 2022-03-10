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
              <a href="https://www.facebook.com/hoanghai.le.3194524" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/HoangHai1009" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            {/* <li className="list-inline-item">
              <a href="#" title="Facebook">
                <i className="fa fa-behance"></i>
              </a>
            </li> */}
            <li className="list-inline-item">
              <a href="https://www.instagram.com/hoanghai.le.3194524/" title="Instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            {/* <li className="list-inline-item">
              <a href="#" title="Google Plus">
                <i className="fa fa-google-plus"></i>
              </a>
            </li> */}
            <li className="list-inline-item">
              <a href="https://github.com/hoanghaile" title="Github">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://bitbucket.org/dashboard/overview" title="Bitbucket">
                <i className="fa fa-bitbucket"></i>
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

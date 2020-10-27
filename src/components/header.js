import PropTypes from "prop-types";
import React from "react";
import startLogo from "../images/start-header.png";
import endLogo from "../images/end-header.png";

const Header = ({ siteTitle }) => (
  <div className="site-header-wrapper">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    ></link>
    <a href="/">
      <div className="site-header-content">
        <img src={startLogo} alt="Logo Start" width="50" height="30"></img>
        <div className="site-header-text">{siteTitle}</div>
        <img src={endLogo} alt="Logo End" width="50" height="30"></img>
      </div>
    </a>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

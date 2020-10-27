import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteURL
        }
      }
    }
  `);

  const print = function () {
    window.print();
  };

  /*
  this.changeBackgroundColor = function (newColor) {
    let elements = document.getElementsByClassName("daylight");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = newColor;
    }
  };
  */

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main-content">
        <main>{children}</main>
      </div>
      <div className="outer footer-wrap">
        <footer className="inner footer-content">
          <a
            href={`mailto:?Subject=Sharable%20Page%20from%20Endless%20WIPS&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${data.site.siteMetadata.siteURL}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Email"
              src="https://simplesharebuttons.com/images/somacro/email.png"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={`http://www.facebook.com/sharer.php?u=${data.site.siteMetadata.siteURL}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Facebook"
              src="https://simplesharebuttons.com/images/somacro/facebook.png"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={`http://www.linkedin.com/shareArticle?mini=true&amp;url=${data.site.siteMetadata.siteURL}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="LinkedIn"
              src="https://simplesharebuttons.com/images/somacro/linkedin.png"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={`http://pinterest.com/pin/create/button/?url=${data.site.siteMetadata.siteURL}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Pinterest"
              src="https://simplesharebuttons.com/images/somacro/pinterest.png"
            />
          </a>

          <a href="javascript:;" onClick={print}>
            <img
              className="share-button"
              alt="Print"
              src="https://simplesharebuttons.com/images/somacro/print.png"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={`http://reddit.com/submit?url=${data.site.siteMetadata.siteURL}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Reddit"
              src="https://simplesharebuttons.com/images/somacro/reddit.png"
            />
          </a>

          <a
            target="_blank"
            href={`https://twitter.com/share?url=${data.site.siteMetadata.siteURL}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Twitter"
              src={`https://simplesharebuttons.com/images/somacro/twitter.png`}
            />
          </a>
          <div className="copyright">
            ©Endleswips.com All Rights Reserved |{" "}
            <a href="/about/#disclaimer">Disclaimer</a>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;

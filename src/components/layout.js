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
          siteUrl
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
            href={`mailto:?Subject=Sharable%20Page%20from%20Endless%20WIPS&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${data.site.siteMetadata.siteUrl}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Email"
              src="https://live.staticflickr.com/65535/50543892693_8abcacb9c2_o.png[/img][/url][url=https://flic.kr/p/2k1oEnK"
            />
          </a>
          <a
            href={`http://www.facebook.com/sharer.php?u=${data.site.siteMetadata.siteUrl}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Facebook"
              src="https://live.staticflickr.com/65535/50544759302_45628871e6_o.png"
            />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${data.site.siteMetadata.siteUrl}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="LinkedIn"
              src="https://live.staticflickr.com/65535/50544759287_33ed3aea90_o.png"
            />
          </a>
          <a
            href={`http://pinterest.com/pin/create/button/?url=${data.site.siteMetadata.siteUrl}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Pinterest"
              src="https://live.staticflickr.com/65535/50544617596_d00645c6d8_o.png"
            />
          </a>
          <button style={{ cursor: "pointer" }} onClick={print}>
            <img
              className="share-button"
              alt="Print"
              src="https://live.staticflickr.com/65535/50544759257_a6af321547_o.png"
            />
          </button>
          <a
            href={`http://reddit.com/submit?url=${data.site.siteMetadata.siteUrl}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Reddit"
              src="https://live.staticflickr.com/65535/50543892613_21a716da3a_o.png"
            />
          </a>
          <a
            href={`https://twitter.com/share?url=${data.site.siteMetadata.siteUrl}${location.pathname}`}
          >
            <img
              className="share-button"
              alt="Twitter"
              src={`https://live.staticflickr.com/65535/50544759227_5b8368069c_o.png`}
            />
          </a>
          <div className="copyright">
            ©Endlesswips.com All Rights Reserved |{" "}
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

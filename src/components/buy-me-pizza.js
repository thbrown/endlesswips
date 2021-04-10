import React from "react";

const Pizza = ({ siteTitle }) => (
  <div className="buy-me-pizza">
    <div>
      <a
        target="_blank"
        href="https://www.buymeacoffee.com/endlesswips"
        rel="noopener noreferrer"
        style={{
          borderRadius: "11px",
          backgroundColor: "#980000",
          width: "162px",
          color: "white",
          padding: "9px",
        }}
      >
        <span style={{ marginLeft: "3px", fontSize: "15px" }}>🍕</span>
        <span style={{ marginLeft: "3px", fontSize: "15px" }}>
          Buy me a pizza
        </span>
      </a>
    </div>
  </div>
);

export default Pizza;

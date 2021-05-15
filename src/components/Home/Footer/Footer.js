import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: ".5rem 0 0 0",
        color: "white",
        backgroundColor: "rgba(43, 43, 47, 1)",
        borderBottom: "0.1rem solid #000",
      }}
      className="container footer-area clear-both"
    >
      <p className="copyRight text-center">
        Copyright {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

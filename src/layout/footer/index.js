import React from "react";

import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://github.com/shaho"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" /> Shaho Toofani
      </a>

      <div>
        <a href="#top" className="btn">
          Book your escape
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;

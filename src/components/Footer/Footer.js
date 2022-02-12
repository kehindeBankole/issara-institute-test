import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer" style={{ zIndex: 100 }}>
      <Container className="content">
        {[
          {
            icon: <i className="ri-bar-chart-box-fill"></i>,
          },
          {
            icon: <i className="ri-booklet-fill"></i>,
          },
          {
            icon: <i className="ri-home-smile-2-fill"></i>,
          },
          {
            icon: <i className="ri-information-fill"></i>,
          },
          {
            icon: <i className="ri-wechat-fill"></i>,
          },
        ].map((item, index) => (
          <div key={index}>{item.icon}</div>
        ))}
      </Container>
    </footer>
  );
}

export default Footer;

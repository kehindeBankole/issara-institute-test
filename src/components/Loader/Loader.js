import React from "react";
import { Container } from "react-bootstrap";
import "./Loader.css";
function Loader() {
  return (
    <Container
      className="loader d-flex flex-column justify-center align-center"
      role="loader"
    >
      loading
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default Loader;

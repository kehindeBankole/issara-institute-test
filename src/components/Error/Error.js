import React from "react";
import "./Error.css";
import { Container } from "react-bootstrap";

function Error() {
  return (
    <Container
      className="error d-flex justify-content-center align-items-center  text-center"
      role="error"
    >
      data is not available at this time (could also be your internet)
    </Container>
  );
}

export default Error;

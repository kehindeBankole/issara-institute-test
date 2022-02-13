import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DetailsCard from "../../components/Detailscard/DetailsCard";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { getPost } from "../../features/service/serviceSlice";
import "./Home.css";

function Home() {
  let dispatch = useDispatch();
  let { loading, data, code } = useSelector((state) => state.service);
  useEffect(() => {
    dispatch(getPost(code));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
  if (loading === true) return <Loader />;
  if (data.length === 0) return <Error />;
  return (
    <Container className="home">
      <Row>
        {data.map((item) => (
          <Col sm={12} lg={3} md={6} className="mb-5" key={item.id}>
            <DetailsCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;

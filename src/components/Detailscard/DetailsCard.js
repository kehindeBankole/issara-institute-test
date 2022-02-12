import { Card, Container } from "react-bootstrap";
import "./DetailsCard.css";
import PropTypes from "prop-types";

function DetailsCard({ item }) {
  const { image, rating_count, name, email, website, rating_score } = item;
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        alt="thumbnail"
        src={
          image
            ? image
            : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        }
        style={{ width: 100, height: 100 }}
      />
      <Card.Body>
        <Container className="position-relative">
          <Card.Text className="position-absolute top-0 end-0">
            ({Math.round(rating_score)})
          </Card.Text>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <span
                key={index}
                className={index <= rating_count ? "on" : "off"}
              >
                &#9733;
              </span>
            );
          })}
        </Container>
        <Card.Title className="fs-6 fw-bold">{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Card.Text>
          <small className="fw-lighter">{website}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

DetailsCard.propTypes = {
  item: PropTypes.object,
};

export default DetailsCard;

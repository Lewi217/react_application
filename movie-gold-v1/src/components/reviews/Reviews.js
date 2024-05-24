import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId, getMovieData]);

  const addReview = async (reviewText) => {
    try {
      const response = await api.post(`/api/v1/movies/${movieId}/reviews`, { review: reviewText });
      setReviews(response.data);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt={movie?.title} />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {reviews?.map((r, index) => (
            <Row key={index}>
              <Col>{r}</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

Reviews.propTypes = {
  getMovieData: PropTypes.func.isRequired,
  movie: PropTypes.object,
  reviews: PropTypes.array,
  setReviews: PropTypes.func.isRequired,
};

Reviews.defaultProps = {
  movie: null,
  reviews: [],
};

export default Reviews;

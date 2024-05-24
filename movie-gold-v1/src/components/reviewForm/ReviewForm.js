import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(revText.current.value);
    revText.current.value = '';
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant="outline-info" type="submit">Submit</Button>
    </Form>
  );
};

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  revText: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

ReviewForm.defaultProps = {
  defaultValue: '',
};

export default ReviewForm;

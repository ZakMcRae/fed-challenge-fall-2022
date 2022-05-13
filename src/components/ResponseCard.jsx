import PropTypes from "prop-types";

const ResponseCard = ({ response }) => (
  <div className="response-card">
    <div className="response-row">
      <p className="response-row-label">Prompt:</p>
      <p className="response-row-text">{response.prompt}</p>
    </div>
    <div className="response-row">
      <p className="response-row-label">Response:</p>
      <p className="response-row-text">{response.response}</p>
    </div>
  </div>
);

ResponseCard.propTypes = {
  response: PropTypes.shape({
    prompt: PropTypes.string,
    response: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default ResponseCard;

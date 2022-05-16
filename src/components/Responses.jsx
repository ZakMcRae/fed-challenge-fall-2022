import PropTypes from "prop-types";
import ResponseCard from "./ResponseCard";

const Responses = ({ responses }) => {
  return (
    <div className="responses-section">
      <h2 className="justify-start">Responses</h2>
      {/* display responses - newest first (reverse order) */}
      <ul>
        {responses &&
          responses.map((response) => (
            <ResponseCard response={response} key={response.id} />
          ))}
      </ul>
    </div>
  );
};

Responses.propTypes = {
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      prompt: PropTypes.string,
      response: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default Responses;

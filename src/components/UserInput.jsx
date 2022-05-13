import PropTypes from "prop-types";
import { useState } from "react";
import getOpenAiData from "../util/getOpenAiData";

const UserInput = ({ responses, setResponses }) => {
  const [loading, setLoading] = useState(false);

  // todo - add generate example prompt - make list of prompts and do a random selection -> place into prompt textarea

  // get API response using user input prompt
  const getResponse = async (e) => {
    e.preventDefault();
    const prompt = document.querySelector("#prompt");

    // make api call and display a loading message while user waits
    setLoading(true);
    const apiResponse = await getOpenAiData(prompt.value);
    setLoading(false);

    const newResponsesArray = [
      ...responses,
      {
        prompt: prompt.value,
        response: apiResponse,
        id: responses.length,
      },
    ];

    // set state with new responses
    setResponses(newResponsesArray);

    // set localstorage with new responses
    localStorage.setItem("responses", JSON.stringify(newResponsesArray));

    // clear user input
    prompt.value = null;
  };

  return (
    <div className="user-input-section">
      <p className="justify-start">Enter Prompt</p>
      {loading ? (
        <p className="loading-text">Generating...</p>
      ) : (
        <>
          <textarea name="promptInput" id="prompt" rows="15"></textarea>
          <button onClick={getResponse}>Submit</button>
        </>
      )}
    </div>
  );
};

UserInput.propTypes = {
  responses: PropTypes.arrayOf(
    PropTypes.shape({
      prompt: PropTypes.string,
      response: PropTypes.string,
    })
  ),
  setResponses: PropTypes.func,
};

export default UserInput;

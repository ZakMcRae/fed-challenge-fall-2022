import PropTypes from "prop-types";
import { useState } from "react";
import getOpenAiData from "../util/getOpenAiData";
import examplePrompts from "../data/examplePrompts";

const UserInput = ({ responses, setResponses }) => {
  const [loading, setLoading] = useState(false);

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

  // get random prompt from examplePrompts.json and put in user input field
  const getRandomPrompt = () => {
    const randomPrompt =
      examplePrompts[Math.floor(Math.random() * examplePrompts.length)];

    const prompt = document.querySelector("#prompt");
    prompt.value = randomPrompt;
  };

  return (
    <div className="user-input-section">
      {loading ? (
        <p className="loading-text">Generating...</p>
      ) : (
        <>
          <label className="justify-start" htmlFor="prompt">
            Enter Prompt
          </label>
          <textarea name="promptInput" id="prompt" rows="15"></textarea>
          <button onClick={getRandomPrompt}>Random Prompt</button>
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

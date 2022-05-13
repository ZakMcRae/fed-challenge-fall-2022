import PropTypes from "prop-types";

const UserInput = ({ responses, setResponses }) => {
  // get API response using user input prompt
  const getResponse = (e) => {
    e.preventDefault();
    const prompt = document.querySelector("#prompt");

    //todo - make actual API call

    const newResponsesArray = [
      ...responses,
      {
        prompt: prompt.value,
        response:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc enim, accumsan quis est sit amet, dictum pulvinar sem. Suspendisse potenti. Praesent quis velit vitae ex pulvinar pharetra quis quis diam. Curabitur sit amet sagittis nibh, in lobortis tortor. In hac habitasse platea dictumst. Suspendisse sollicitudin bibendum eleifend. Phasellus elementum neque vel faucibus venenatis.",
        id: responses.length,
      },
    ];

    // set state with new responses
    setResponses(newResponsesArray);

    // set localstorage with new responses
    localStorage.setItem("responses", JSON.stringify(newResponsesArray));

    // clear input
    prompt.value = null;
  };

  return (
    <div className="user-input-section">
      <p className="justify-start">Enter Prompt</p>
      <textarea name="promptInput" id="prompt" rows="15"></textarea>
      <button onClick={getResponse}>Submit</button>
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

import { API_KEY1, API_KEY2 } from "../../config";

// given a prompt, make an API call to OpenAI to get the text response and return the response
const getOpenAiData = async (prompt) => {
  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const resp = await fetch(
    "https://api.openai.com/v1/engines/text-curie-001/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY1 + API_KEY2}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (resp.ok) {
    const json = await resp.json();

    return json.choices[0].text;
  } else {
    throw new Error(`${resp.status} ${resp.statusText}`);
  }
};

export default getOpenAiData;

import { useState, useEffect } from "react";
import "./App.css";
import Responses from "./components/Responses";
import UserInput from "./components/UserInput";

function App() {
  const [responses, setResponses] = useState([]);

  // check localstorage for previous responses - set state if they exist
  useEffect(() => {
    const responses = localStorage.getItem("responses");

    if (responses) {
      setResponses(JSON.parse(responses));
    }
  }, []);

  return (
    <div className="App">
      <h1 className="page-title justify-start">Fun with AI</h1>
      <UserInput responses={responses} setResponses={setResponses} />
      {responses.length > 0 ? <Responses responses={responses} /> : null}
    </div>
  );
}

export default App;

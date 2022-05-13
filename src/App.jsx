import { useState } from "react";
import "./App.css";
import Responses from "./components/Responses";
import UserInput from "./components/UserInput";

function App() {
  const [responses, setResponses] = useState([]);

  return (
    <div className="App">
      <h1 className="page-title justify-start">Fun with AI</h1>
      <UserInput responses={responses} setResponses={setResponses} />
      {responses.length > 0 ? <Responses responses={responses} /> : null}
    </div>
  );
}

export default App;

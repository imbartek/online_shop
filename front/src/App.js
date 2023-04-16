import React, { useState } from "react";
import "./App.css";
import Login from "./views/Login";
import { Register } from "./Register";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    <div>
      <div className="App">
        {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>}
      </div>
    </div>
  );
};

export default App;

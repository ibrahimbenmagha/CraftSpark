import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import SignUpForm from "./components/SingnUp/SignUpForm";
import HomePage from "./components/Homepage/Homepage"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"element={<HomePage/>}/>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChooseTopic from "./ChooseTopic";
import StartButton from "./StartButton";
import Game from "./Game";

function App  () {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<ChooseTopic />} />
        <Route path="/startButton" element={<StartButton/>} />
        <Route path="/game" element={<Game/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

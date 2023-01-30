import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PlayGround from "./Pages/playGround";
import Main from "./Pages/main";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/playGround" element={<PlayGround/>} />
        </Routes>
  
    </div>
  );
}

export default App;

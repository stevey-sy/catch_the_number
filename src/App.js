import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PlayGround from "./Pages/playGround";
import Main from "./Pages/main";

function App() {
  
  // const [game, setGame] = useState({
  //   roomName : '첫번째 방제목',
  //   maxNum : 5,
  //   userName : "",
  //   userList : [],
  //   currentQuestioner : "",
  //   isTyping : false,
  //   questionList: [],
  //   question: "첫번째 질문",
  // });

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

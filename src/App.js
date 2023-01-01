import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PlayGround from "./Pages/playGround";
import Main from "./Pages/main";

function App() {
  
  const [game, setGame] = useState({
    roomName : 'test',
    maxNum : 1,
    question : "질문",
    userName : "",
    userList : [],
    currentQuestioner : "",
    isQuestioner : false,
  });

  useEffect(() => {
    console.log("test");
  }, []);
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main game={game}/>} />
          <Route path="/playGround" element={<PlayGround game={game}/>} />
        </Routes>
  
    </div>
  );
}

export default App;

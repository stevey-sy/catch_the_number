import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PlayGround from "./Pages/playGround";
import Main from "./Pages/main";

function App() {
  
  const [game, setGame] = useState({
    roomName : 'test',
    maxNum : 1,
    question : "여기서 마음에 드는 사람이 있다?",
    userName : "",
    userList : [],
    currentQuestioner : "",
    isTyping : false,
    questionList: [],
  });


  useEffect(() => {
    console.log("game = " + game.questionList);
  }, [game]);
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main game={game} setGame={setGame}/>} />
          <Route path="/playGround" element={<PlayGround game={game} setGame={setGame}/>} />
        </Routes>
  
    </div>
  );
}

export default App;

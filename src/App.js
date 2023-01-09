import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PlayGround from "./Pages/playGround";
import Main from "./Pages/main";

function App() {
  
  const [game, setGame] = useState({
    roomName : 'test',
    maxNum : 1,
    userName : "",
    userList : [],
    currentQuestioner : "",
    isTyping : false,
    questionList: [],
  });


  useEffect(() => {
    console.log("game = " + game.questionList);
    setGame(game);
  }, [game]);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main roomName={game.roomName} maxNum={game.maxNum} />} />
          <Route path="/playGround" element={<PlayGround userList={game.userList} questionList={game.questionList} currentQuestioner={game.currentQuestioner} isTyping={game.isTyping}/>} />
        </Routes>
  
    </div>
  );
}

export default App;

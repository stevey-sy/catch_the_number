import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import CreateQuestion from "../Components/createQuestion";
import AnswerQuestion from "../Components/answerQuestion";
import UserList from "../Components/userList";

function PlayGround() {

    const location = useLocation();

    const roomName = location.state.roomName;
    const maxNum = location.state.maxNum;
    const [userList, setUserList] = useState([]);

    const [game, setGame] = useState({
      roomName : roomName,
      maxNum : maxNum,
      userName : "",
      userList : [],
      currentQuestioner : "",
      isTyping : false,
      questionList: [],
      question: "",
    });

    const onSubmit = (event) => {
        // props.game.question = event.target.value;
    }

    // const [userList, setUserList] = useState(userList);

    const addItem = (newItem) => {
      // userList = [...userList, newItem];
      setUserList((userList)=>[...userList, newItem]);
    }

    useEffect(() => {
    // effect function
    // 유저 네임 입력 받기;
    if(userList.length === 0) {
      const user = {
        userName: "user1",
        isHost: true,
        answer: "",
      };
      addItem(user);
      game.currentQuestioner = "user1";
    }
  }, []);

  return (
    <>
    <h2>방제목: {roomName}</h2>
    <h3>인원: {maxNum}명</h3>
    {game.currentQuestioner === "user1" 
        ? <CreateQuestion questionList={game.questionList} /> : <AnswerQuestion isTyping={game.isTyping} questionList={game.questionList} />}

    <UserList userList={userList} />
    </>
  );
}

export default PlayGround;

import {useState, useEffect} from "react";
import CreateQuestion from "../Components/createQuestion";
import AnswerQuestion from "../Components/answerQuestion";
import UserList from "../Components/userList";

function PlayGround({userList, questionList, currentQuestioner, isTyping}) {

    // o,x - 완료.
    // 질문입력 - 완료.
    // 유저리스트 - 완료.
    // 결과 컴포넌트

    const onSubmit = (event) => {
        // props.game.question = event.target.value;
    }

    // const [userList, setUserList] = useState(userList);

    const addItem = (newItem) => {
      userList = [...userList, newItem];
      // setUserList((userList)=>[...userList, newItem]);
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
      currentQuestioner = "user1";
    }
  }, []);

  return (
    <>{currentQuestioner == "user1" 
        ? <CreateQuestion questionList={questionList} /> : <AnswerQuestion isTyping={isTyping} questionList={questionList} />}

    <UserList userList={userList} />
    </>
  );
}

export default PlayGround;

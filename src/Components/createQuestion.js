import {useState, useEffect} from "react";

// 질문 입력 화면
function CreateQuestion({questionList}) {

  const addQuestionItem = (newItem) => {
    // setGame({
    //   ...props.game, 
    //   "questionList": [...props.game.questionList, newItem],
    // });
    questionList = [...questionList, newItem];

  }

  const onStartBtnClick = () => {
    var questionItem = {
      questionTitle : "질문 테스트 111",
      //인원 수 만틈 
      user1: "",
      user2: "",
      user3: "",
      user4: "",
    }

    var item = {
      question: "질문 111",
    }

    addQuestionItem(questionItem);
  }

    useEffect(() => {

    }, []);

  return (
    <div className="App">
        <h2>당신은 질문자 입니다.</h2>
        <h3>질문을 작성해주세요.</h3>
        <label for="inputQuestion">Q: </label>
        <input id="inputQuestion" type="text" placeholder="질문을 입력해 주세요..."/>
        <button onClick={onStartBtnClick}>시작</button>
    </div>
  );
}

export default CreateQuestion;

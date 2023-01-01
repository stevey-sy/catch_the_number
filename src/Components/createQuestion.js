import {useState, useEffect} from "react";

// 질문 입력 화면
function CreateQuestion({question}) {
    const onSubmit = (event) => {
       
    }

    useEffect(() => {
    // effect function
    console.log("coffee");
  }, []);

  return (
    <div className="App">
        <h2>당신은 질문자 입니다.</h2>
        <h3>질문을 작성해주세요.</h3>
        <label for="inputQuestion">Q: </label>
        <input id="inputQuestion" value={question} type="text" placeholder="질문을 입력해 주세요..."/>
        <button onClick={onSubmit}>시작</button>
    </div>
  );
}

export default CreateQuestion;

import {useState, useEffect} from "react";
import CreateQuestion from "../Components/createQuestion";

function PlayGround(props) {

    // o,x
    // 질문입력
    // 유저리스트
    // 결과 컴포넌트

    const onSubmit = (event) => {
        props.game.question = event.target.value;
    }

    useEffect(() => {
    // effect function
    // 유저 네임 입력 받기;
    console.log("coffee");
  }, []);

  return (
    <CreateQuestion question={props.game.question} />
    // <div className="App">
    //     <h2>당신은 질문자 입니다.</h2>
    //     <h3>질문을 작성해주세요.</h3>
    //     <label for="inputQuestion">Q: </label>
    //     <input id="inputQuestion" value={props.game.question} type="text" placeholder="질문을 입력해 주세요..."/>
    //     <button onClick={onSubmit}>시작</button>
    // </div>
  );
}

export default PlayGround;

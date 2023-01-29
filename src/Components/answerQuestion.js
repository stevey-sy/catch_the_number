import {useState, useEffect} from "react";

// 질문 입력 화면
function AnswerQuestion({questionList, isTyping}) {

  // 질문자가 문제 낼 동안에는. 로딩 화면? 문제를 내는 중입니다...

  return (
    <div>
        {isTyping 
          ? <h2>질문자가 질문을 만들고 있습니다...</h2> : 
        <>
          <h2>Q: 질문중</h2>
          <button>O</button>
          <button>X</button>
        </>}
    </div>
  );
}

export default AnswerQuestion;

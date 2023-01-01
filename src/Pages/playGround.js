import {useState, useEffect} from "react";
import { enhanceManualRouteObjects } from "react-router/dist/lib/components";
import CreateQuestion from "../Components/createQuestion";
import UserList from "../Components/userList";

function PlayGround(props) {

    // o,x
    // 질문입력 - 완료.
    // 유저리스트 - 완료.
    // 결과 컴포넌트

    const onSubmit = (event) => {
        props.game.question = event.target.value;
    }

    const [userList, setUserList] = useState(props.game.userList);

    const addItem = (newItem) => {
      setUserList((userList)=>[...userList, newItem]);
    }

    useEffect(() => {
    // effect function
    // 유저 네임 입력 받기;
    if(userList.length === 0) {
      const obj = new Object();
      obj.userName = 'user1';
      addItem(obj);
    }
  }, []);

  return (
    <><CreateQuestion question={props.game.question} />
    <UserList userList={userList} />
    </>
  );
}

export default PlayGround;

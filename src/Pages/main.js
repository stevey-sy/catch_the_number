import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Main(props) {

  useEffect(() => {
    // effect function
  }, []);

  return (
    <div>
          <h2>방만들기</h2>
            <div>
              <label for="inputRoomName">방이름 : </label>
              <input id="inputRoomName"  value={props.game.roomName} type="text" placeholder="방 이름을 입력해 주세요..." />
            </div>
            <div>
              <label for="inputMaxNum">참여자 수 : </label>
              <input id="inputMaxNum" value={props.game.maxNum} type="number" placeholder="0" />
            </div>
            <Link to="/playGround">
                <button>방만들기</button>
            </Link> 
    </div>
  );
}

export default Main;

import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

function Main({game, setGame}) {

  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [maxNum, setMaxNum] = useState(0);

  const onChangeRoomName = (event) => {
    console.log(event.target.value);
    setRoomName(event.target.value);
  };

  const onChangeMaxNum = (event) => {
    console.log(event.target.value);
    setMaxNum(event.target.value);
  };

  const onSubmit = () => {
    navigate('/playGround', {
      state : {
        roomName : roomName,
        maxNum: maxNum
      }
    });
  };

  return (
    <div>
          <h2>방만들기</h2>
            <div>
              <label>방이름 : </label>
              <input name="" id="inputRoomName" onChange={onChangeRoomName} value={roomName} type="text" placeholder="방 이름을 입력해 주세요..." />
            </div>
            <div>
              <label>참여자 수 : </label>
              <input id="inputMaxNum" onChange={onChangeMaxNum} value={maxNum} type="number" placeholder="0" />
            </div>
            {/* <Link to="/playGround" state={}>
                <button>방만들기</button>
            </Link>  */}
            <button onClick={onSubmit}>방만들기</button>
    </div>
  );
}

export default Main;

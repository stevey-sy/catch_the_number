import {useState, useEffect, navigation} from "react";
import {Link, useNavigate} from "react-router-dom";
import database from "../DB/FireEnvironment";
import { doc, setDoc } from 'firebase/firestore/lite'
import { onSnapshot, collection, addDoc, getDocs  } from "firebase/firestore";

function Main() {

  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [maxNum, setMaxNum] = useState(0);

  const onChangeRoomName = (event) => {
    setRoomName(event.target.value);
  };

  const onChangeMaxNum = (event) => {
    setMaxNum(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(database, "rooms"), {
        roomName: roomName,
        maxNum: maxNum,
      });
      console.log("Document written with ID: ", docRef.id);

      navigate(`/playGround?roomId=${docRef.id}`, {});
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
  };

  const getRooms = async() => {
    const querySnapshot = await getDocs(collection(database, "rooms"));
    querySnapshot.forEach((doc) => {
      const room = {
        ...doc.data(),
        roomId : doc.id,
      }
    });
  }

  useEffect(() => {
    getRooms();
  });

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

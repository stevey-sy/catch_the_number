import {useState, useEffect} from "react";
import { useLocation, useParams } from 'react-router-dom';
import CreateQuestion from "../Components/createQuestion";
import AnswerQuestion from "../Components/answerQuestion";
import UserList from "../Components/userList";
import {getDoc, doc} from "firebase/firestore";
import database from "../DB/FireEnvironment";

function PlayGround() {

  const location = useLocation();
  // const roomName = "default";
  // const maxNum = 100;

  const [roomName, setRoomName] = useState("");
  const [maxNum, setMaxNum] = useState(0);

  // const [roomName, setRoomName] = useState("");

    const [userList, setUserList] = useState([]);

    const [game, setGame] = useState({
      roomName : roomName || "default",
      maxNum : maxNum || 0 ,
      userName : "",
      userList : [],
      currentQuestioner : "",
      isTyping : false,
      questionList: [],
      question: "",
    });

    const getRoom = async() => {
      console.log(location.search);
      const urlParams = new URL(document.location.href).searchParams;
      const roomId = urlParams.get("roomId");
      console.log(roomId);
  
      // const q = query(collection(database, "rooms"), where("roomId", "==", roomId));
      // const querySnapshot = await getDocs(q);
      //   querySnapshot.forEach((doc) => {
      //   // 가져온 모든 문서들을 확인
      //   console.log(doc.id, " => ", doc.data());
      //   });

      const docRef = doc(database, "rooms", roomId);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        console.log(docSnap.data());
        setRoomName(docSnap.data().roomName);
        setMaxNum(docSnap.data().maxNum);
      }
    }

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
    // console.log("roomId = " + roomId);
    getRoom();
    // if(userList.length === 0) {
    //   const user = {
    //     userName: "user1",
    //     isHost: true,
    //     answer: "",
    //   };
    //   addItem(user);
    //   game.currentQuestioner = "user1";
    // }
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

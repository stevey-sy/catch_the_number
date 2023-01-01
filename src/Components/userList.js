import {useState, useEffect} from "react";

function UserList({userList}) {

    const listItems = userList.map((item) => <li key={item.userName}>{item.userName}</li>);

    useEffect(() => {
        // effect function
        // 유저 네임 입력 받기;
        console.log("coffee");
      }, []);
  return (
    <div>
        {listItems}
    </div>
  );
}

export default UserList;

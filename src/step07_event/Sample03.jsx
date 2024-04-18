import React from "react";

// 함수에 전달할 데이터 = Arguments = 매개변수
// 이벤트를 통해 매개변수 전달 하는 방법
function Sample03(props) {
    const handleDelete = (id, event) => {
        console.log("id : " , id);
        // target을 사용하므로써 텍스트를 같이 끄집어낼 수 있다.
        console.log("event.target : " , event.target);
        console.log("event.target : " , event.target.innerText);
        console.log("event.target : " , event.target.textContent);
    }
    return(
        <button onClick={(event) => handleDelete(1, event)}>눌러주세요</button>
    )
}

export default Sample03;
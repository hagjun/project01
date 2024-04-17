import React from "react";


function Light({room, on, toggle}) {
    console.log({room, on});
    return(
        <button onClick={toggle}>
            {room} {on ? "💡" : "⬛"}
        </button>
    )
}
// prpos 값이 변경되지 않은 한 호출되지 않는다.
export default React.memo(Light);
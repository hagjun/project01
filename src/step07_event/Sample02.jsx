import React, { useState } from "react";

// 함수 방식
function Sample02(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
    }
    return(
        // 함수에서는 this. 없이 호출 가능
        <button onClick={handleClick}>{isToggleOn?'on':'off'}</button>
    )
    
}

export default Sample02;


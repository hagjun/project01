import React, { useState } from "react";

function Counter(props) {
    // let conut = 0;
    // const [변수명, set변수명(첫글자대문자)] = useState(초기값);
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={() => {
                // conut++;
                // console.log("count", conut);
                setCount(count + 1);

            }}>클릭</button>
            
        </div>
    )
}
export default Counter;




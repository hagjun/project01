import React from "react";

function Ex01(props) {
    const {arr} = props;

    const listItemes = arr.map((k) => {
        return (
            // 개발자 도구를 보면 key 때문에 오류 발생
            // <li>{k}</li>

            // key에 들어가는 값은 중복안되는 것으로 넣어줘야 한다.
            <li key={k}>{k}</li>
        )
    });
    
    const listItemes2 = arr.map((k, index) => {
        return (
            <li key={index}>{k}</li>
        )
    });

    return (
        <ul>{listItemes}</ul>
    )
}
export default Ex01;

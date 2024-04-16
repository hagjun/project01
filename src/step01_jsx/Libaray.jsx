import React from "react";
import Book from "./Book";


function Libaray(props) {
    return(
        <div>
            {/* 태그맨앞이 대문자면 내가 만든태그 소문자면 html 태그 */}
            {/* 한번 만들어 놓으면 재사용이 가능해서 여러번 사용할 수 있다. */}
            {/* 컴포넌트 합성 */}
            <Book name="처음 만난 리액트" numOfPage="300" />
            <Book name="처음 만난 스프링 부트" numOfPage="250" />
            <Book name="처음 만난  VSCode" numOfPage="50" />
        </div>
    )
}

export default Libaray;
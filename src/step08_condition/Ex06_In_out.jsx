import React, { useState } from "react";
import Ex06 from "./Ex06";

function Ex06_In_out(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Ex06
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <hr />
            <div> 리액트 공부 (본문)</div>
        </div>
    )
}

export default Ex06_In_out;
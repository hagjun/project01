import React from "react";
import Ex01_T from "./Ex01_T";
import Ex01_F from "./Ex01_F";

function Ex01(props) {
    const isLoggedin = props.isLoggedin;
    if(isLoggedin){
        return <Ex01_T />

    }
    return <Ex01_F />


    
}
export default Ex01;
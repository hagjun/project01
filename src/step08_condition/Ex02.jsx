import React from "react";
import Ex01_T from "./Ex01_T";
import Ex01_F from "./Ex01_F";
import { Ex02_F, Ex02_T } from "./Ex02_TF";

function Ex02(props) {
    const isLoggedin = props.isLoggedin;
    if(isLoggedin){
        return  <Ex02_T />

    }
    return <Ex02_F />


    
}
export default Ex02;
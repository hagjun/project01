import { Box, Button } from "@mui/material";
import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {cnt : 5}// => 초기값 : 5
    }
    increment(){
        // 변경
        this.setState({
            cnt : this.state.cnt + 1 // 하나씩 증가
        })
    }
    decrement(){
        // 변경
        this.setState({
            cnt : this.state.cnt - 1 // 하나씩 감소
        })
    }
    render(){
        return(
            <div>
                <Button variant="contained" color="primary" size="large" onClick={this.increment.bind(this)}>+</Button>
                <Box component='span' m={5}>{this.state.cnt}</Box>
                <Button variant="contained" color="primary" size="large" onClick={this.decrement.bind(this)}>-</Button>
            </div>
        )
    }
}
export default Count ;
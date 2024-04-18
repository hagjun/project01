import React from "react";

class Sample01 extends React.Component{
    constructor(props){
        super(props)
        // isToggleOn => 변수이름
        this.state = {isToggleOn : true};

        // bind(this) => 반드시 해줘야만 이벤트가 실행된다.
        // 클래스 컴포넌트에서는 바인딩 함수는 필수적으로 해줘야 한다.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            // 이전의 상태값을 변경해서 넘겨주세요.
            isToggleOn : !prevState.isToggleOn
        }));
    }

    render(){
        return(
           // <button onClick={}>눌러주세요</button>

           <button onClick={this.handleClick}>{this.state.isToggleOn?'켜짐':'꺼짐'}</button>
        )

    }
    
}

export default Sample01;


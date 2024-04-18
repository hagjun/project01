import React from "react";

class Sample04 extends React.Component{
    constructor(props){
        super(props)
        // isToggleOn => 변수이름
        this.state = {isConfirmed : true};

        // bind(this) => 반드시 해줘야만 이벤트가 실행된다.
        // 클래스 컴포넌트에서는 바인딩 함수는 필수적으로 해줘야 한다.
        this.handleComfirmed = this.handleComfirmed.bind(this);
    }

    handleComfirmed(){
        this.setState(prevState => ({
            // 이전의 상태값을 변경해서 넘겨주세요.
            isConfirmed : !prevState.isConfirmed
        }));
    }

    render(){
        return(
           <button 
                onClick={this.handleConfirmed}
                disabled = {this.state.isConfirmed}
                >
                    {this.state.isConfirmed?'확인됨':'확인하기'}
           </button>
        )

    }
    
}

export default Sample04;


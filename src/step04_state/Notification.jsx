import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    }
};

class Notification extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {};
    }

    /* 
       - componentDidMount 
       컴포넌트가 화면에 마운트된 직후에 호출 
       이 메서드 내에서 AJAX 호출이나 타이머 설정과 같은 초기화 작업을 수행
     */
    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() Call`);
    }
    /* 
       - componentDidUpdate
       컴포넌트의 props나 state가 변경되어 업데이트가 발생한 직후에 호출 
       이전 props와 state를 매개변수로 받아 이를 기반으로 이전 값과 현재 값의 비교를 
       수행하고 필요한 작업을 수행
    */
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() Call`);
    }
    /* 
       - componentWillUnmount
       컴포넌트가 제거되기 직전에 호출
       이 메서드 내에서 리소스 해제나 이벤트 리스너 제거 등의 정리 작업을 수행
    */
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() Call`);
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;
import React from "react";

class Customer extends React.Component{
   
    render(){
        // 받는 입장에서는 props값을 변경할 수 없다.
        const {id, name, orders} = this.props ;
        return(
            <div>
                <h2></h2>
                <p>
                    <span>이름 : {name}</span><br />
                    <span>주문배송 : {orders.length} 개</span>
                </p>
            </div>
        )
    }
}

export default Customer;
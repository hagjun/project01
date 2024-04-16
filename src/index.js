import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Libaray from './step01_jsx/Libaray';
import Clock from './step02_element/Clock';
import Welcome from './step03_component/Welcom';
import Comment from './step03_component/Comment';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';
import Book from './step01_jsx/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Clock (render)
// UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.render()로 전달하는 것입니다.
// setInterval(() => {

//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

root.render(
  <React.StrictMode>
   {/*  <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" /> */}
    {/* <Book /> */}
    {/* <CommentList /> */}
    <NotificationList /> 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

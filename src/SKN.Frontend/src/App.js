import {useState,useEffect,useRef,useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

import HeaderComp from './Component/HeaderComp.js';
import FooterComp from './Component/FooterComp.js';
import LeftMenuComp from './Component/LeftMenuComp.js';
import CenterComp from './Component/CenterComp.js';
import RightMenuComp from './Component/RightMenuComp.js';


function App() {
  var [status,setStatus] = useState(true); // True là đã đăng nhập
  /* var [event, setEvent] = useState([]
    "sign-in": false,
    "sign-up": false,
    "home": false,
    "questions":false,
    "badges":false,
    "communities":false,
    "tags": false,
    "users":false
  );
  const ChangeEvent = (x) => {
    setEvent([x]);
  } */
  // xử lý thanh cuộn
  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("scroll-up").style.display = "block";
    }
    else{
      document.getElementById("scroll-up").style.display = "none";
    }
  }

  return (
    <Router>
      <div className="App">
        <HeaderComp status={status} />
        <div className="wrapper">
          <LeftMenuComp />
          <div className="content-wrapper">
            <CenterComp />
            <RightMenuComp status={status}/>
          </div>
        </div>
        {
          status ? <Link to = 'create-question'>
            <i class="fas fa-pen"></i> </Link>  : <span></span>
        }
        <a href="#center" id="scroll-up"><i class="fas fa-arrow-up"></i></a>  
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;

import {useState,} from 'react';
import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

import './App.css';

import HeaderComp from './Component/HeaderComp.js';
import FooterComp from './Component/FooterComp.js';
import LeftMenuComp from './Component/LeftMenuComp.js';
import CenterComp from './Component/CenterComp.js';
import RightMenuComp from './Component/RightMenuComp.js';
import Home from './Component/Home/HomeComp.js';

export const DataContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  var [status,setStatus] = useState(false); // True là đã đăng nhập
  var [user,setUser] = useState({});
  const user_info = {
    id:1,
    username:'Mountain Nguyen',
} 

  const DangNhap = (e) =>{
    e.preventDefault();
    setStatus(true);
    setUser(user_info);
  }
  const DangXuat = () => {
    setStatus(false);
  }
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
        <UserContext.Provider value={{user:user, setStatus:DangXuat}} >
          <HeaderComp status={status} />
        </UserContext.Provider>
        <div className="wrapper">
          <LeftMenuComp />
          <div className="content-wrapper">
            <DataContext.Provider value={{status:status,setStatus:DangNhap, user:user}}>
              <CenterComp />
            </DataContext.Provider>
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

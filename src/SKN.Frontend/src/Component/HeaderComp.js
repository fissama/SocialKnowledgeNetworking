import {useEffect} from 'react';

import '../CSS-Layout/Header.css';

export default function HeaderComp(props){
        return(
            <div className="header" id="center">
                <div className="header-wrapper">
                    <img src={process.env.PUBLIC_URL + "./images/Logo.png"} alt="Đây là logo"/>
                    <h3>Mạng xã hội tri thức trẻ Việt Nam. Nơi trao đổi thông tin và những điều thứ vị trong cuộc sống</h3>
                    <div className="header-wrapper-right">
                        <form className="search">
                            <input type="text" placeholder="Type Search Words"/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                        { props.status ? <Login /> : <NotLogin ChangeEvent={props.ChangeEvent}/>}
                    </div> 
                </div>
            </div>
        )
}

export function NotLogin({ChangeEvent}){
    return(
        <div className="sign-in-up">
            <button id="sign-in" onClick={()=>ChangeEvent("sign-in")}>Sign in</button>
            <button id="sign-up" onClick={()=>ChangeEvent("sign-up")}>Sign up</button>
        </div>
    )
}

export function Login(props){
    //const url = props.image;
     const EditProfile = ()=>{ 
        var display = document.getElementById("showprofile").style.display;
        document.getElementById("showprofile").style.display = (display == "none") ? "block" : "none";  
   } 

    return(
        <div className="profile-wrapper">
            <img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="avatar"/>
            <div className="user-name">
                <span id="span1">Xin chào</span>
                <span id="span2">Mountain Nguyen</span>
                <div className="dropdown-content" id="showprofile">
                    <ul>
                        <li><i class="fas fa-user"></i> User Profile</li>
                        <li><i class="fas fa-user-edit"></i>Edit Profile</li>
                        <li><i class="fas fa-user-plus"></i>Referrals</li>
                        <li><i class="fas fa-envelope"></i>Messages</li>
                        <li><i class="fas fa-question"></i>Asked Questions</li>
                        <li><i class="fas fa-graduation-cap"></i>Best Answers</li>
                        <li><i class="fas fa-hamburger"></i>Points</li>
                        <li><i class="fas fa-cog"></i>Activity Log</li>
                        <li><i class="fas fa-sign-out-alt"></i>Logout</li>
                    </ul>
                </div>    
            </div>
            <i class="fas fa-caret-down" onClick={()=>EditProfile()}></i>
            <i class="far fa-bell"></i>
        </div>
    )
}
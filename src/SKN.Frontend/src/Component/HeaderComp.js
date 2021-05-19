
import {Link} from 'react-router-dom';
import '../CSS-Layout/Header.css';
import { useContext } from "react";

import {UserContext} from '../App.js';

export default function HeaderComp(props){
        return(
            <div className="header" id="center">
                <div className="header-wrapper">
                    <img src={process.env.PUBLIC_URL + "./images/Logo.png"} alt="Đây là logo"/>
                    <h3>Mạng xã hội tri thức trẻ Việt Nam. Nơi trao đổi thông tin và những điều thú vị trong cuộc sống</h3>
                    <div className="header-wrapper-right">
                        <form className="search">
                            <input type="text" placeholder="Type Search Words"/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                        { props.status ? <Login setStatus={props.setStatus}/> : <NotLogin ChangeEvent={props.ChangeEvent}/>}
                    </div> 
                </div>
            </div>
        )
}

export function NotLogin(){
    return(
        <div className="sign-in-up">
            <Link to = '/sign-in'>
                <button id="sign-in">Sign in</button>
            </Link>
            <Link to = '/sign-up'>
                <button id="sign-up">Sign up</button>
            </Link>
        </div>
    )
}

export function Login(props){
    //const url = props.image;
    // Lấy thông tin user
    /* const user = {
        id:1,
        username:'Mountain Nguyen',
    }  */
    const {user} = useContext(UserContext);
    const {setStatus} = useContext(UserContext);

    const EditProfile = ()=>{ 
        var display = document.getElementById("showprofile").style.display;
        document.getElementById("showprofile").style.display = (display === "none") ? "inline-block" : "none";  
   } 

    return(
        <div className="profile-wrapper">
            <img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="avatar"/>
            <div className="user-name">
                <span id="span1">Xin chào</span>
                <span id="span2">{user.username}</span>  
                <ul className="dropdown-content" id="showprofile">
                    <li><i class="fas fa-user-edit"></i>Chỉnh sửa thông tin</li>
                    <Link to = '/create-question'>
                        <li><i class="fas fa-question"></i>Tạo câu hỏi</li>
                    </Link>
                    <li onClick={setStatus}><i class="fas fa-sign-out-alt"></i>Đăng xuất</li>
                </ul>
            </div>
            <i class="fas fa-caret-down" onClick={()=>EditProfile()}></i>
            <i class="far fa-bell"></i>
        </div>
    )
}
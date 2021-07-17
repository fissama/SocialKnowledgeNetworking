//import { Link } from "react-router-dom";
import "../../app/styles/Header.css";
// import { useContext } from "react";
import LoginButton from "../common/button/LoginButton";
import LogoutButton from "../common/button/LogoutButton";
// import { UserContext } from "./App.js";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated){
    console.log("aaa",user);
  }
  return (
    <div className="header" id="center">
      <div className="header-wrapper">
        <img
          src={process.env.PUBLIC_URL + "./images/Logo.png"}
          style={{ width: "50px", height: "50px" }}
          alt="Đây là logo"
        />
        <h3 style={{ margin: "10px", fontWeight: "bold" }}>
          Mạng xã hội tri thức trẻ Việt Nam
        </h3>
        <div className="header-wrapper-right">
          {/* <form className="search">
                            <input type="text" placeholder="Type Search Words"/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form> */}
          {/* { props.status ? <Login setStatus={props.setStatus}/> : <NotLogin ChangeEvent={props.ChangeEvent}/>} */}
          {isAuthenticated ? (
            <div>
              <a
                style={{
                  display: "inline-block",
                  color: "wheat",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              >
                {user.email}
              </a>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </div>
  );
}

// export function NotLogin(){
//     return(
//         <div className="sign-in-up">
//            <LoginButton />
//         </div>
//     )
// }

// export function Login(props){
//     //const url = props.image;
//     // Lấy thông tin user
//     /* const user = {
//         id:1,
//         username:'Mountain Nguyen',
//     }  */
//     const {user} = useContext(UserContext);
//     const {setStatus} = useContext(UserContext);

//     const EditProfile = ()=>{
//         var display = document.getElementById("showprofile").style.display;
//         document.getElementById("showprofile").style.display = (display === "none") ? "inline-block" : "none";
//    }

//     return(
//         <div className="profile-wrapper">
//             <img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="avatar"/>
//             <div className="user-name">
//                 <span id="span1">Xin chào</span>
//                 <span id="span2">{user.username}</span>
//                 <ul className="dropdown-content" id="showprofile">
//                     <li><i class="fas fa-user-edit"></i>Chỉnh sửa thông tin</li>
//                     <Link to = '/create-question'>
//                         <li><i class="fas fa-question"></i>Tạo câu hỏi</li>
//                     </Link>
//                     <li onClick={setStatus}><i class="fas fa-sign-out-alt"></i>Đăng xuất</li>
//                 </ul>
//             </div>
//             <i class="fas fa-caret-down" onClick={()=>EditProfile()}></i>
//             <i class="far fa-bell"></i>
//         </div>
//     )
// }

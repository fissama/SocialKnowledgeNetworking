import {useState} from 'react';
import {Link} from 'react-router-dom';

import "../../app/styles/Right-menu.css";

export default function RightMenuComp(props){
    const [Infor,setInfor] = useState({
        "Questions" : 9, "Answers": 10, "Posts": 0,
        "Comments": 0, "Best Answers": 0, "Users": 31
    });
    const [User,setUser] = useState([
        {"Name": "NhatMinh", "Points": 23},
        {"Name": "vvvv", "Points": 22},
        {"Name": "Mountain", "Points": 20},
        {"Name": "Nguyenthicuong2005", "Points": 20},
        {"Name": "Cuong123", "Points": 20}
    ]);
    return(
        <div className="right-menu">
            <TopInformation Infor={Infor}/>
            {
                props.status ?    
                <Link to = '/create-question'>
                    <button>Tạo câu hỏi</button>
                </Link>
                :
                <Link to = '/sign-in'>
                    <button>Tạo câu hỏi</button>
                </Link>
            }
            <hr/>
            <RankingComp user={User}/>
            <BottomComp />
        </div>
    )
}

export function TopInformation({Infor}){
    return(
        <div className="TopInformation">
            <ul>
                <li>Questions <p>{Infor["Questions"]}</p></li>
                <li>Answers <p>{Infor["Answers"]}</p></li>
                <li>Posts <p>{Infor["Posts"]}</p></li>
                <li>Comments <p>{Infor["Comments"]}</p></li>
                <li>Best Answer <p>{Infor["Best Answers"]}</p></li>
                <li>Users <p>{Infor["Users"]}</p></li>
            </ul>
        </div>
    )
}

export function RankingComp({user}){
    return(
        <div className="Ranking">
            <div className="Top-user">
                <img src={process.env.PUBLIC_URL + "./images/multy-user.png"} alt="Đây là multy user"/>
                <p>Top user</p>
            </div>
            <hr/>
            {
                user.map((item,index) =>
                <div key={index}>
                    <UserProfileComp user={item}/>
                    <hr/>
                </div>    
                )
            }
        </div>
    )
}

export function UserProfileComp({user}){
    return(
        <div className="UserProfile">
            <img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="Đây là multy user"/>
            <div className="Name-point">
                <span>{user.Name}</span>
                <p>{user.Points} Points</p>
            </div>
        </div>
    )
}


export function BottomComp(props){
    return(
        <div className="Bottom">Đây là ở cuối</div>
    )
}
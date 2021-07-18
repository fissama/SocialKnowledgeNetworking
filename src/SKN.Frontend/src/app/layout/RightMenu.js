import {useState} from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container,Col,Row,Navbar} from 'react-bootstrap';

import "../../app/styles/Right-menu.css";
import LeftMenuComp from './LeftMenu';

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
            <ListGroup>
            {
                user.map((item,index) =>
                <div key={index}>
                    <UserProfileComp user={item}/>
                </div>    
                )
            }
            </ListGroup>
        </div>
    )
}

export function UserProfileComp({user}){
    return(
        <Container className="UserProfile" fuild>
            <Row>
                <Col xs="0" style={{width:'50px','margin-left':'-15px', 'margin-right':'10px'}} ><img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="Đây là multy user"/></Col>
                <Col>
                    <Row ><Navbar.Text variant="green" >{user.Name}</Navbar.Text></Row>
                    <Row>{user.Points} Points</Row>
                </Col>
            </Row>
            {/* <img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="Đây là multy user"/>
            <div className="Name-point">
                <span>{user.Name}</span>
                <p>{user.Points} Points</p>
            </div> */}
        </Container>
    )
}


export function BottomComp(props){
    return(
        <div className="Bottom">Đây là ở cuối</div>
    )
}

import {Link} from 'react-router-dom';
import '../CSS-Layout/Header.css';
import { useContext } from "react";

import {UserContext} from '../App.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Group from 'react-bootstrap/FormGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import DropDown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function HeaderComp(props){
        return(
            // <div className="header" id="center">
            //     <div className="header-wrapper">
            //         <img src={process.env.PUBLIC_URL + "./images/Logo.png"} alt="Đây là logo"/>
            //         <div className="header-wrapper-right">
            //             <form className="search">
            //                 <input type="text" placeholder="Type Search Words"/>
            //                 <button type="submit"><i class="fa fa-search"></i></button>
            //             </form>
            //             { props.status ? <Login setStatus={props.setStatus}/> : <NotLogin ChangeEvent={props.ChangeEvent}/>}
            //         </div> 
            //     </div>
            // </div>
            <Form className="header" >
                <Form className="header-content">
                <Container className="header-wrapper" fluid >
                    <Col md="100px">
                        <Image src={process.env.PUBLIC_URL + "./images/Logo.png"} width="100px" height="100px"></Image> 
                    
                    </Col>
                    <Col className="header-title h3" md={6}>
                        Mạng xã hội tri thức trẻ Việt Nam. Nơi trao đổi thông tin và những điều thú vị trong cuộc sống
                    </Col>
                    <Col  className="header-wrapper-right" md="{span:2,offset:10}">
                        { props.status ? <Login setStatus={props.setStatus}/> : <NotLogin ChangeEvent={props.ChangeEvent}/>}
                    </Col>
                </Container>
            </Form>
            </Form>
            // <Container fluid classname="headerc">
            //     <Row >
            //     <Col md={{span:1,offset:1}}  vertical>
            //         <Image src={process.env.PUBLIC_URL + "./images/Logo.png"} width="100%" height="Auto"></Image>
            //     </Col>
            //     <Col width="200px">
            //     <Form.Text size="20px">
            //     Mạng xã hội tri thức trẻ Việt Nam. Nơi trao đổi thông tin và những điều thú vị trong cuộc sống
            //     </Form.Text>
            //       </Col>
            //     <Col xs={2} size="xxl">3 of 3</Col>
            //     </Row>
            // </Container>
        )
}

export function NotLogin(){
    return(
        <ListGroup horizontal>
            <ListGroup.Item class>
            <Link to = '/sign-in'>
                <Button id="sign-in" variant="primary">Login</Button>
            </Link>
            </ListGroup.Item>
            <ListGroup.Item>
            
            <Link to = '/sign-up'>
                <Button id="sign-up" variant="primary">Sign up</Button>
            </Link>
            </ListGroup.Item>
        </ListGroup>
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
        // <div className="profile-wrapper">
        //     <img src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} alt="avatar"/>
        //     <div className="user-name">
        //         <span id="span1">Xin chào</span>
        //         <span id="span2">{user.username}</span>  
        //         <ul className="dropdown-content" id="showprofile">
        //             <li><i class="fas fa-user-edit"></i>Chỉnh sửa thông tin</li>
        //             <Link to = '/create-question'>
        //                 <li><i class="fas fa-question"></i>Tạo câu hỏi</li>
        //             </Link>
        //             <li onClick={setStatus}><i class="fas fa-sign-out-alt"></i>Đăng xuất</li>
        //         </ul>
        //     </div>
        //     <i class="fas fa-caret-down" onClick={()=>EditProfile()}></i>
        //     <i class="far fa-bell"></i>
        // </div>
        <Form className="profile-wrapper">
            <Image src={process.env.PUBLIC_URL + "./images/default-user-icon.png"} className="avatar-image" ></Image>
            <Form.Text className="user-name">
                Xin chào {user.username}
            </Form.Text>
            <DropdownButton className="dropdown-list">
                <DropDown.Item><i class="fas fa-user-edit"></i>Chỉnh sửa thông tin</DropDown.Item>
                <DropDown.Item>
                    <Link to = '/create-question'>
                        <li><i class="fas fa-question"></i>Tạo câu hỏi</li>
                    </Link>
            </DropDown.Item>
                <DropDown.Item onClick={setStatus}><i class="fas fa-sign-out-alt"></i>Đăng xuất</DropDown.Item>
            </DropdownButton>
        </Form>
    )
}
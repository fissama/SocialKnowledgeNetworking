import {Switch, Route, NavLink} from "react-router-dom";
import "../../app/styles/Center-wrapper.css";

import Home from '../../features/Home/HomeComp.js';
import Questions, {APIQuestion, APIQuestionSignIn} from '../../features/Questions/QuestionComp.js';
import Users from '../../features/User/UserComp.js'
import Badges from '../../features/Badge/BadgeComp.js'
import Verify from '../../features/Verify/VerifyComp.js'
import {DataContext} from './App.js';
import { useContext } from "react";

export default function Center(){
    const {status} = useContext(DataContext);
    return(
        <div className="center-wrapper">
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/questions" exact component={Questions}/>
                {status ? <Route path="/questions/:id" component={APIQuestionSignIn}/> : <Route path="/questions/:id" component={APIQuestion}/>}
                <Route path="/badges"  component={Badges}/>
                <Route path="/verify" component={Verify}/>
                <Route path="/communities"  component={Communities}/>
                <Route path="/user"  component={Users}/>
                <Route path="/create-question"  component={CreateQuestion}/>
                {status ? <Route path="/sign-in" component={Home}/> : <Route path="/sign-in"  component={Signin}/> }
                <Route path="/sign-up"  component={Signup}/>
            </Switch>
        </div>
    )
}

export function Signin(props){
    const style = {"width":"90%", "margin":"auto"};
    const {setStatus} = useContext(DataContext);

    return(
        <div className="sign">
            <form action="" style={style}>
            <span id="recommend">Đăng nhập để có thể tạo câu hỏi</span>
                <div class="form-group">
                    <label for="email">Username or email</label><span className="require">*</span>
                    <input type="email" class="form-control" id="email"/>
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-group">
                    <label for="pwd">Password</label><span className="require">*</span>
                    <input type="password" class="form-control" id="pwd"/>
                    <i class="fas fa-key"></i>
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"/> Remember me!
                    </label>
                </div>
                <button class="btn btn-primary" onClick={setStatus}>Log-in</button>
                <NavLink to = '/sign-up'>
                    <button class="btn btn-primary">Sign-up</button>
                </NavLink>
                </form>
        </div>
    )
}
export function Signup(props){
    const style = {"width":"90%", "margin":"auto"}
    return(
        <div className="sign">
            <form action="" style={style}>
                <div class="form-group">
                    <label for="email">Username</label><span className="require">*</span>
                    <input type="text" class="form-control" id="email"/>
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-group">
                    <label for="email">E-Mail</label><span className="require">*</span>
                    <input type="email" class="form-control" id="email"/>
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="form-group">
                    <label for="password">Password</label><span className="require">*</span>
                    <input type="text" class="form-control" id="password"/>
                    <i class="fas fa-key"></i>
                </div>
                <div class="form-group">
                    <label for="confirm">Confirm Password</label><span className="require">*</span>
                    <input type="text" class="form-control" id="confirm"/>
                    <i class="fas fa-lock"></i>
                </div>
                <button type="submit" class="btn btn-primary">Sign up</button>
                </form>
        </div>
    )
}


export function Communities(props){
    return(
        <div>Đây là Communities</div>
    )
}



export function CreateQuestion(props){
    const style1 = {"width":"90%", "margin":"auto"};
    const style2 = {"margin-left":"20px"};
    const category = ['Thể thao', 'Thời tiết', 'Xã hội', 'Thời trang', 'Hoa hậu'];

    async function createQuestion(data) {
        try{
            await fetch('http://localhost:8000/question', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        }
          catch{
            console.log("Lỗi createQuestion");
        }
    }

    async function AddQuestion(){
        var data = {
            "title"     : "Đây là tiêu đề câu hỏi số 11",
            "content"   : "Đây là nội dung câu hỏi số 11",
            "status"    : null,
            "user_id"   : 1,
            "created_at": "2021-07-18 00:00:00"
        }
        await createQuestion(data);
    }

    return(
        <div>
            <form action="" style={style1}>
                <div class="form-group">
                    <label for="title">Tiêu đề</label><span className="require">*</span>
                    <input type="text" class="form-control" id="title"/>
                </div>
                <div class="form-group">
                    <label for="content">Nội dung</label><span className="require">*</span>
                    <textarea type="email" class="form-control" id="content" rows="20"/>
                </div>
                <label for="category">Danh mục: </label>
                <select id="category" name="category" style={style2}>
                    <option value="Tất cả">Tất cả</option>
                    {
                        category.map((item,index) =>
                            <option value={item} key={index}>{item}</option>
                        )
                    }
                </select>
                <NavLink to = '/questions/11'>
                    <button style={{display:"block", marginLeft:"350px"}} type="submit" class="btn btn-primary" onClick = {AddQuestion}>Thêm câu hỏi</button>
                </NavLink>
                </form>
        </div>
    )
}
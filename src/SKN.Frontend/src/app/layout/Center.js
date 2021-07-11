import {Switch, Route, NavLink} from "react-router-dom";
import "../../app/styles/Center-wrapper.css";

import Home from '../../features/Home/HomeComp.js';
import Questions, {APIQuestion, APIQuestionSignIn} from '../../features/Questions/QuestionComp.js';
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
                <Route path="/communities"  component={Communities}/>
                <Route path="/users"  component={Users}/>
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

export function Badges(props){
    return(
        <div>Đây là Badges</div>
    )
}

export function Communities(props){
    return(
        <div>Đây là Communities</div>
    )
}

export function Users(props){
    return(
        <div>Đây là Users</div>
    )
}

export function CreateQuestion(props){
    const style1 = {"width":"90%", "margin":"auto"};
    const style2 = {"margin-left":"20px"};
    const style3 = {"margin-bottom":"20px"};
    
    const style4 = {"padding":"3px"};
    const category = ['Thể thao', 'Thời tiết', 'Xã hội', 'Thời trang', 'Hoa hậu'];
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
                <div style={style3}>
                    <label for="file">Chọn file:</label>
                    <input style={style4} type="file" class="form-control" id="file" accept="" multiple />
                </div>
                <button type="submit" class="btn btn-primary">Thêm câu hỏi</button>
                </form>
        </div>
    )
}
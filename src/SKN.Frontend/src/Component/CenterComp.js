import {Switch, Route} from "react-router-dom";
import "../CSS-Layout/Center-wrapper.css";

import Home from './Home/HomeComp.js';
import Questions, {DependentQuestion, APIQuestion} from './Questions/QuestionComp.js';
export default function CenterComp(){
    return(
        <div className="center-wrapper">
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/questions" exact component={Questions}/>
                <Route path="/questions/:id" component={APIQuestion}/>
                <Route path="/badges"  component={Badges}/>
                <Route path="/communities"  component={Communities}/>
                <Route path="/tags"  component={Tags}/>
                <Route path="/users"  component={Users}/>
                <Route path="/create-question"  component={CreateQuestion}/>
                <Route path="/sign-in"  component={Signin}/>
                <Route path="/sign-up"  component={Signup}/>
            </Switch>
        </div>
    )
}

export function Signin(props){
    const style = {"width":"90%", "margin":"auto"}
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
                <button type="submit" class="btn btn-primary">Login</button>
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

export function Tags(props){
    return(
        <div>Đây là Tags</div>
    )
}

export function Users(props){
    return(
        <div>Đây là Users</div>
    )
}

export function CreateQuestion(props){
    return(
        <div>Đây là tạo câu hỏi</div>
    )
}
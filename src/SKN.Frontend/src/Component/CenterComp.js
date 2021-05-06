import {Switch, Route} from "react-router-dom";

import "../CSS-Layout/Center-wrapper.css";

export default function CenterComp({event}){
    /* return(
        <div className="center-wrapper">Đây là Center</div>
    ) */
    /* if(event[0] == 'sign-in'){return <Signin/>}
    else if(event[0] == "sign-up"){return <Signup/>}
    else if(event[0] == "home"){return <Home/>}
    else if(event[0] == "questions"){return <Questions/>}
    else if(event[0] == "badges"){return <Badges/>}
    else if(event[0] == "communities"){return <Communities/>}
    else if(event[0] == "tags"){return <Tags/>}
    else if(event[0] == "users"){return <Users/>}
    else if(event[0] == "create-question"){return <CreateQuestion/>}
    else {return <Home /> } */
    return(
        <div className="center-wrapper">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/questions" exact component={Questions}/>
                <Route path="/badges" exact component={Badges}/>
                <Route path="/communities" exact component={Communities}/>
                <Route path="/tags" exact component={Tags}/>
                <Route path="/users" exact component={Users}/>
                <Route path="/create-question" exact component={CreateQuestion}/>
                <Route path="/sign-in" exact component={Signin}/>
                <Route path="/sign-up" exact component={Signup}/>
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

export function Home(props){
    return(
        <div className="center-wrapper">Đây là Home</div>
    )
}

export function Questions(props){
    return(
        <div className="center-wrapper">Đây là All questions</div>
    )
}

export function Badges(props){
    return(
        <div className="center-wrapper">Đây là Badges</div>
    )
}

export function Communities(props){
    return(
        <div className="center-wrapper">Đây là Communities</div>
    )
}

export function Tags(props){
    return(
        <div className="center-wrapper">Đây là Tags</div>
    )
}

export function Users(props){
    return(
        <div className="center-wrapper">Đây là Users</div>
    )
}

export function CreateQuestion(props){
    return(
        <div className="center-wrapper">Đây là tạo câu hỏi</div>
    )
}
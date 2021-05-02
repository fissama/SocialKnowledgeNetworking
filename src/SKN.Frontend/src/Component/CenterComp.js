

export default function CenterComp({event}){
    /* return(
        <div className="center-wrapper">Đây là Center</div>
    ) */
    if(event[0] == 'sign-in'){return <Signin/>}
    else if(event[0] == "sign-up"){return <Signup/>}
    else if(event[0] == "home"){return <Home/>}
    else if(event[0] == "questions"){return <Questions/>}
    else if(event[0] == "badges"){return <Badges/>}
    else if(event[0] == "communities"){return <Communities/>}
    else if(event[0] == "tags"){return <Tags/>}
    else if(event[0] == "users"){return <Users/>}
    else if(event[0] == "create-question"){return <CreateQuestion/>}
    else {return <Home /> }
}

export function Signin(props){
    return(
        <div className="center-wrapper">Đây là Sign in</div>
    )
}

export function Signup(props){
    return(
        <div className="center-wrapper">Đây là Sign up</div>
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
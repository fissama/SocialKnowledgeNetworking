import "../../app/styles/Question.css";
import {NavLink} from 'react-router-dom';

import {DataContext, UserContext} from '../../app/layout/App.js';
import { useContext } from "react";
import {useState, useEffect} from 'react';

const data = [
    {
        id:1,
        title:'Đây là câu tiêu đề của câu hỏi 1 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala ', 
        created_at:'May 11, 2021',
        category: 'Thể thao',
        username: 'Mountain',
        star:10,
        like:true,
        answers: [
           {
               id:10,
               full_content:'balabalbalalasla',
               status:'',
               image_NavLink:'',
               create_at:'May 6, 2021 at 4:31am',
               username:'Nhat'
           },
           {
                id:11,
                full_content:'balabalbalalasla',
                status:'',
                image_NavLink:'',
                create_at:'',
                username:'Nhan'
           }
        ],
    },
    {
        id:2,
        title:'Đây là câu tiêu đề của câu hỏi 2 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala cho nó dài nhassssssssssssssssssssssssssssssssssssssssssssss',  
        created_at:'May 11, 2021',
        category: 'Toán học',
        username: 'Thiện',
        star:5,
        like:false,
        answers:[
            {
                id:13,
                full_content:'balabalbalalasla',
                status:'',
                image_NavLink:'',
                create_at:'',
                username:'Phi'
            },
            {
                 id:14,
                 full_content:'balabalbalalasla',
                 status:'',
                 image_NavLink:'',
                 create_at:'',
                 username:'Nhan'
            }
        ],
    }
]

const api_url = process.env.REACT_APP_API;

export default function Questions(props){
    //Lấy category
    const category = ['Thể thao', 'Thời tiết', 'Xã hội', 'Thời trang', 'Hoa hậu']
    var [content,setContent] = useState(data);
    const LikeorDiLike = (key) =>{
        setContent(content.map(
            (item) => {
                if(item.id === key)
                {
                    return {...item,like:!item.like}
                }
                else
                {
                    return {...item}
                }
            }
        ));
    }
    // lấy dữ liệu theo category
    return(
        <div>
            <div className="question">
                <i id="home-icon" class="fas fa-home"></i>
                <span>
                    <NavLink to={`/`}> Trang chủ </NavLink>
                     / 
                    <NavLink to={`/questions`}> Câu hỏi </NavLink>
                </span>

                <select id="cars" name="cars">
                    <option value="Tất cả">Tất cả</option>
                    {
                        category.map((item,index) =>
                            <option value={item} key={index}>{item}</option>
                        )
                    }
                </select>
            </div>
            {
                content.map(question => <DependentQuestion props={question} key={question.id} like={LikeorDiLike}/>) 
            }     
        </div>
    )
}
// Câu hỏi mà không kèm theo câu trả lời
export function DependentQuestion({props}){
    const {status} = useContext(DataContext);
    const {user} = useContext(UserContext);

    const [reactquestion, setReactQuestion] = useState([]);
    
    const handleLike = () => {
        var data = {};
        var index;
        if (reactquestion[0].is_like === 1) {
            data = {is_like: 0}
        }
        else {
            data = {is_like: 1}
        }

        updateLike(data);
        
    }
    
    async function updateLike(id, data) {
        // Default options are marked with *
        const response = await fetch(`http://localhost:8000/reactquestion/${id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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
        return response.json(); // parses JSON response into native JavaScript objects
    }

    async function getReactQuestion() {
        try{
            const response = await fetch(`http://localhost:8000/reactquestion/${props.id}`);
            const json = await response.json();
            setReactQuestion(json);
          }
          catch{
            console.log("Lỗi getRaectQuestion");
        }
    }
  
    useEffect(() => getReactQuestion(), []);

    if(!status){
        return(
            <div className="question">
                <div>
                    <i class="far fa-user"></i>
                </div>
                <div className="question-content">
                    <span>{props.username}</span>
                    Ngày tạo:<span> {props.created_at}</span>
                    Danh mục:<span> {props.category}</span>
                    <h4>
                        <NavLink to={`/questions/${props.id}`}>{props.title}</NavLink>
                    </h4>
                    <p>{props.content}</p>
                    <div>
                        <span><i class="fas fa-comment-alt"></i>{props.AnswerCount} Câu trả lời</span>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="question">
                <div>
                    <i class="far fa-user"></i>
                </div>
                <div className="question-content">
                    <span>{props.username}</span>
                    Ngày tạo:<span> {props.created_at}</span>
                    Danh mục:<span> {props.category}</span>
                    <h4>
                        <NavLink to={`/questions/${props.id}`}>{props.title}</NavLink>
                    </h4>
                    <p>{props.content}</p>
                    <div>
                        <i class="fas fa-thumbs-up" id={reactquestion.find(value => value.username === user.username) === undefined ? "dislike-button" : "like-button"} onClick={()=>handleLike(props.id)}></i>
                        <span><i class="fas fa-comment-alt"></i>{props.AnswerCount} Câu trả lời</span>
                        <span><i class="fas fa-star"></i>{props.star} Sao</span>
                    </div>
                </div>
            </div>
        )
    }
}
// câu hỏi có kèm theo câu trả lời khi chưa đăng nhập
export function APIQuestion({match}){
    // lấy dữ liệu ứng với question
    // get/question/id
    // thêm câu trả lời thì sẽ làm thay đổi biến answer trong useEffect
    var [QuestionBindAnswer, setQuestionBindAnswer] = useState([]);
    var [QuestionCountAnswer, setQuestionCountAnswer] = useState([]);

    async function getQuestionBindAnswer(id) {
        try{
            const response = await fetch(`http://localhost:8000/question/${id}`);
            const json = await response.json();
            setQuestionBindAnswer(json);
          }
          catch{
            console.log("Lỗi getQuestionBindAnswer");
        }
    }

    async function getQuestionCountAnswer(id) {
        try{
            const response = await fetch(`http://localhost:8000/questions/${id}`);
            const json = await response.json();
            setQuestionCountAnswer(json);
          }
          catch{
            console.log("Lỗi getQuestionCountAnswer");
            console.log(api_url);
        }
    }

    useEffect(() => {
        getQuestionBindAnswer(match.params.id);
        getQuestionCountAnswer(match.params.id);
    }, [match.params.id]);

    if(QuestionCountAnswer.length >= 1)
    {
        return(
            <div>
                <div className="question">
                    <i id="home-icon" class="fas fa-home"></i>
                    <span>
                        <NavLink to={`/`}> Trang chủ </NavLink>
                        / 
                        <NavLink to={`/questions`}> Câu hỏi </NavLink>
                        / {match.params.id}
                    </span>
                </div>
                <DependentQuestion props={QuestionCountAnswer[0]} />
                <div className="question" id="number-question">{QuestionBindAnswer.length} Câu trả lời</div>
                {
                    QuestionBindAnswer.map(item => <Answer answer_id={item.answer_id} key={item.answer_id}/>)
                }
            </div>
        )
    }
    else{
        return(
            <div>blabla</div>
        )
    }
}
// câu hỏi có kèm theo câu trả lời khi đã đăng nhập
export function APIQuestionSignIn({match}){
    // lấy dữ liệu ứng với question
    // get/question/id
    // thêm câu trả lời thì sẽ làm thay đổi biến update trong useEffect
    var [QuestionBindAnswer, setQuestionBindAnswer] = useState([]);
    var [QuestionCountAnswer, setQuestionCountAnswer] = useState([]);
    //var update="";
    var [data, setData] = useState({});
    const {user} = useContext(DataContext);

    async function createAnswer(data) {
        try{
            await fetch(`http://localhost:8000/answer`, {
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
            console.log("Lỗi createAnswer");
        }
    }

    async function getQuestionBindAnswer(id) {
        try{
            const response = await fetch(`http://localhost:8000/question/${id}`);
            const json = await response.json();
            setQuestionBindAnswer(json);
          }
          catch{
            console.log("Lỗi getQuestionBindAnswer");
        }
    }

    async function getQuestionCountAnswer(id) {
        try{
            const response = await fetch(`http://localhost:8000/questions/${id}`);
            const json = await response.json();
            setQuestionCountAnswer(json);
          }
          catch{
            console.log("Lỗi getQuestionCountAnswer");
        }
    }

    const LikeorDisLike = () => {
        
    }
    const AddAnswer = () => {
        var nowDate = new Date();
        var data = {};
        var contentAnswer   = document.getElementById('answer').value;
        data.full_content   = contentAnswer;
        data.status         = null;
        data.image_link     = "";
        data.question_id    = match.params.id;
        data.user_id        = 1;
        data.created_at     = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
        setData(data);
    }

    useEffect(async () => {
        if(Object.keys(data).length !== 0 ) {
            await createAnswer(data);                     // thêm answer bằng post
        }
        getQuestionBindAnswer(match.params.id);     
        getQuestionCountAnswer(match.params.id);
    }, [data, match.params.id]);

    useEffect(() => {
        return function cleanup() {
            console.log("component will unmount");
        }
    },[]); 

    if(QuestionCountAnswer.length >= 1)
    {
        return(
            <div>
                <div className="question">
                    <i id="home-icon" class="fas fa-home"></i>
                    <span>
                        <NavLink to={`/`}> Trang chủ </NavLink>
                        / 
                        <NavLink to={`/questions`}> Câu hỏi </NavLink>
                        / {match.params.id}
                    </span>
                </div>
                <DependentQuestion props={QuestionCountAnswer[0]} />
                <div className="question" id="number-question">{QuestionBindAnswer.length} Câu trả lời</div>
                {
                    QuestionBindAnswer.map(item => <Answer answer_id={item.answer_id} key={item.answer_id}/>)
                }
                <div className='question' id="typing-anwser">
                   <form>
                        <label>Nhập câu trả lời</label>
                        <br></br>
                        <textarea id="answer" name="answer" rows="4" cols="120"></textarea>
                        <div>
                            <label for="file">Chọn file:</label>
                            <input  style={{padding: "3px"}} type="file" class="form-control" id="file" accept="" multiple />
                            </div>
                   </form>
                </div>
                <div className='question' id="auto-height">
                    <button id="leave-answer" onClick={AddAnswer}>Thêm câu trả lời</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>blabla</div>
        )
    }
}

export function Answer({answer_id}){
    var [answer, setAnswer] = useState([]);

    async function getAnswer(id) {
        try{
            const response = await fetch(`http://localhost:8000/answer/${id}`);
            const json = await response.json();
            setAnswer(json);
          }
          catch{
            console.log("Lỗi URL");
        }
    }

    useEffect(() => {
        getAnswer(answer_id);
    }, []);

    return(
        <div className="question">
            <div>
                <i class="far fa-user"></i>
            </div>
            {
                answer.map(item => {
                    return(
                        <div className="question-content" key={item.id}>
                            <span>{item.username}</span>
                            Ngày tạo:<span> {item.created_at}</span>
                            <p>{item.full_content}</p>
                        </div>
                    )
                })    
            }
        </div>
    )
}
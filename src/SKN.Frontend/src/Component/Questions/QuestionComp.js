import "../../CSS-Layout/Question.css";
import {NavLink} from 'react-router-dom';

import {DataContext} from '../../App.js';
import { useContext } from "react";
import {useState} from 'react';

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
export function DependentQuestion({props,like}){
    const {status} = useContext(DataContext);
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
                        <button>
                            <NavLink to={`/questions/${props.id}`}>Answer</NavLink>
                        </button>
                        
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
                        <i class="fas fa-thumbs-up" id={props.like ? "like-button" : "dislike-button"} onClick={()=>like(props.id)}></i>
                        <span><i class="fas fa-comment-alt"></i>{props.answers.length} Câu trả lời</span>
                        <span><i class="fas fa-star"></i>{props.star} Sao</span>
                        <button>
                            <NavLink to={`/questions/${props.id}`}>Answer</NavLink>
                        </button>
                        
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
    const content = {
        id:1,
        title:'Đây là câu tiêu đề của câu hỏi 1 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala ', 
        status:'', 
        created_at:'May 11, 2021',
        category: 'Thể thao',
        username: 'Mountain',
        answers: [
           {
               id:10,
               full_content:'balabalbalalasla',
               status:'',
               image_NavLink:'',
               create_at:'May 12, 2021 at 4:05 am',
               username:'Nhat'
           },
           {
                id:11,
                full_content:'balabalbalalasla',
                status:'',
                image_NavLink:'',
                create_at:'May 13, 2021 at 6:05 pm',
                username:'Nhan'
           }
        ],
        views:10
    }
    const {answers} = content;

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
            <DependentQuestion props={content} />
            <div className="question" id="number-question">{answers.length} Câu trả lời</div>
            {
                answers.map(item => <Answer answer={item} key={item.id}/>)
            }
            <div className='question' id="auto-height">
                <button id="leave-answer">Thêm câu trả lời</button>
            </div>
        </div>
    )
}
// câu hỏi có kèm theo câu trả lời khi đã đăng nhập
export function APIQuestionSignIn({match}){
    // lấy dữ liệu ứng với question
    // get/question/id
    // thêm câu trả lời thì sẽ làm thay đổi biến answer trong useEffect
    const data2 = {
        id:1,
        title:'Đây là câu tiêu đề của câu hỏi 1 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala ', 
        star:10,
        like:true, 
        created_at:'May 11, 2021',
        category: 'Thể thao',
        username: 'Mountain',
        answers: [
           {
               id:10,
               full_content:'balabalbalalasla',
               status:'',
               image_NavLink:'',
               create_at:'May 12, 2021 at 4:05 am',
               username:'Nhat'
           },
           {
                id:11,
                full_content:'balabalbalalasla',
                status:'',
                image_NavLink:'',
                create_at:'May 13, 2021 at 6:05 pm',
                username:'Nhan'
           }
        ]
    }

    var [content,setContent] = useState(data2);
    const {answers} = content;

    const {user} = useContext(DataContext);

    const LikeorDiLike = () =>{
        setContent({...content,like:!content.like});
    }
    const AddAnswer = ()=>{
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        let text = document.getElementById('answer').value;
        let answer = {id:12, full_content:text, status:'', image_NavLink:'', create_at:dateTime, username:user.username};
        setContent({...content,answers:[...content.answers,answer]});
    }
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
            <DependentQuestion props={content} like={LikeorDiLike} />
            <div className="question" id="number-question">{answers.length} Câu trả lời</div>
            {
                answers.map(item => <Answer answer={item} key={item.id}/>)
            }
            <div className='question' id="typing-anwser">
               <form>
                    <label for="answer">Nhập câu trả lời</label>
                    <br></br>
                    <textarea id="answer" name="answer" rows="4" cols="120"></textarea>
               </form>
            </div>
            <div className='question' id="auto-height">
                <button id="leave-answer" onClick={AddAnswer}>Thêm câu trả lời</button>
            </div>
        </div>
    )
}

export function Answer({answer}){
    return(
        <div className="question">
            <div>
                <i class="far fa-user"></i>
            </div>
            <div className="question-content">
                <span>{answer.username}</span>
                Ngày tạo:<span> {answer.create_at}</span>
                <p>{answer.full_content}</p>
            </div>
        </div>
    )
}
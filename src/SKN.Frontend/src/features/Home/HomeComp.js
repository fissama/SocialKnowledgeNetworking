
import "../../app/styles/Home.css";

import {DependentQuestion,APIQuestion} from '../Questions/QuestionComp.js';
import {useState} from 'react';

const data = [
    {
        id:1,
        title:'Đây là câu tiêu đề của câu hỏi 1 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala ', 
        status:'', 
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
               image_link:'',
               create_at:'',
               username:'Nhat'
           },
           {
                id:11,
                full_content:'balabalbalalasla',
                status:'',
                image_link:'',
                create_at:'',
                username:'Nhan'
           }
        ],
    },
    {
        id:2,
        title:'Đây là câu tiêu đề của câu hỏi 2 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala i love you 3000 i love you 3000 i love you 3000 i love you 3000 i love you 3000', 
        status:'', user_id:'1', 
        created_at:'May 11, 2021',
        category: 'Văn Học',
        username: 'David',
        star:15,
        like:false,
        answers:[],
    },
    {
        id:3,
        title:'Đây là câu tiêu đề của câu hỏi 3 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala cho nó dài nhassssssssssssssssssssssssssssssssssssssssssssss', 
        status:'', user_id:'1', 
        created_at:'May 11, 2021',
        category: 'Toán học',
        username: 'Thiện',
        star:100,
        like:true,
        answers:[
            {
                id:13,
                full_content:'balabalbalalasla',
                status:'',
                image_link:'',
                create_at:'',
                username:'Phi'
            },
            {
                 id:14,
                 full_content:'balabalbalalasla',
                 status:'',
                 image_link:'',
                 create_at:'',
                 username:'Nhan'
            }
        ]
    }
]

export default function Home(props){
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
    const Click = (e) => {
        // Lấy câu hỏi theo ̀5 yêu cầu
        let list = document.getElementsByClassName("home-list-line");
        for(let i=0; i< list.length; i++){
            list[i].className = 'home-list-line';
        } 
        if(e.target.localName === 'li')
        {
            e.target.lastChild.className = 'home-list-line home-line-active'; 
        }
        else{
            e.target.parentElement.lastChild.className = 'home-list-line home-line-active'; 
        }
    }
    return(
        <div className="home">
            <ul className="home-list">
                <li onClick={Click}>
                    <span>Gần đây</span>
                    <span className="home-list-line"></span>
                </li>
                <li onClick={Click}>
                    <span>Nhiều trả lời nhất</span>
                    <span className="home-list-line"></span>
                </li>
                <li onClick={Click}>
                    <span>Nhiều lượt xem nhất</span>
                    <span className="home-list-line"></span>
                </li>
                <li onClick={Click}>
                    <span>Nhiều lượt vote nhất</span>
                    <span className="home-list-line"></span>
                </li>
                <li onClick={Click}>
                    <span>Chưa có câu trả lời</span>
                    <span className="home-list-line"></span>
                </li>
            </ul>
            {
                content.map(question => <DependentQuestion props={question} key={question.id} like={LikeorDiLike}/>) 
            }

            
        </div>
    )
}

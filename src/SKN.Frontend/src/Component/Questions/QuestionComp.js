import "../../CSS-Layout/Question.css";
import {NavLink} from 'react-router-dom';

const data = [
    {
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
        views:10
    },
    {
        id:2,
        title:'Đây là câu tiêu đề của câu hỏi 3 nha mọi người',
        content:'Đây là nội dung của câu hỏi o home. Mình ghi balalallalalalalala cho nó dài nhassssssssssssssssssssssssssssssssssssssssssssss', 
        status:'', user_id:'1', 
        created_at:'May 11, 2021',
        category: 'Toán học',
        username: 'Thiện',
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
        views:100
    }
]

export default function Questions(props){
    //Lấy category
    const category = ['Thể thao', 'Thời tiết', 'Xã hội', 'Thời trang', 'Hoa hậu']
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
                data.map(question => <DependentQuestion props={question} key={question.id}/>) 
            }     
        </div>
    )
}
// Câu hỏi mà không kèm theo câu trả lời
export function DependentQuestion({props}){

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
                    <span><i class="fas fa-comment-alt"></i>{props.answers.length} Câu trả lời</span>
                    <span><i class="fas fa-eye"></i>{props.views}  Người xem</span>
                    <button>
                        <NavLink to={`/questions/${props.id}`}>Answer</NavLink>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
// câu hỏi có kèm theo câu trả lời
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
                answers.map(item => <Answer answer={item}/>)
            }
            <div className='question' id="auto-height">
                <button id="leave-anwser">Thêm câu trả lời</button>
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
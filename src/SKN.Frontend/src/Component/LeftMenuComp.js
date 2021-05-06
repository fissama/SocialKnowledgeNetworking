import {Link} from "react-router-dom";


import "../CSS-Layout/Left-menu.css"

export default function LeftMenuComp({ChangeEvent}){
    return(
        <div className="left-menu">
            <ul>
                <Link to = '/'>
                    <li>Trang chủ </li>
                </Link>
                <Link to = '/questions'>
                    <li>Câu hỏi</li>
                </Link>
                <Link to = '/badges'>
                    <li>Danh hiệu</li>
                </Link>
                <Link to = '/communities'>
                    <li>Cộng đồng</li>
                </Link>
                <Link to = '/tags'>
                    <li>Thẻ</li>
                </Link>
                <Link to = '/users'>
                    <li>Người dùng</li>
                </Link>
            </ul>
        </div>
    )
}
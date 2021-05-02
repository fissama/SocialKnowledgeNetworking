import "../CSS-Layout/Left-menu.css"

export default function LeftMenuComp({ChangeEvent}){
    return(
        <div className="left-menu">
            <ul>
                <li onClick={() => ChangeEvent("home")}>Trang chủ </li>
                <li onClick={() => ChangeEvent("questions")}>Câu hỏi</li>
                <li onClick={() => ChangeEvent("badges")}>Danh hiệu</li>
                <li onClick={() => ChangeEvent("communities")}>Cộng đồng</li>
                <li onClick={() => ChangeEvent("tags")}>Thẻ</li>
                <li onClick={() => ChangeEvent("users")}>Người dùng</li>
            </ul>
        </div>
    )
}
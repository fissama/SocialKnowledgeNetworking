import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../app/styles/Verify.css";
import { Button, Container, Col, Row, Nav, Tab, Tabs, Card, Form } from 'react-bootstrap';
const data = [{
    "id": "1",
    "title": "Đây là tiêu đề câu hỏi số 4",
    "content": "Đây là nội dung câu hỏi số 4",
    "status": "1",
    "username": "David@gmail.com",
    "created_at": "2021-05-12 00:00:00"
  }]
export default function Verify(props) {
    var [content,setContent] = useState(data);
    
    async function getQuestionNotVerify() {
        try{
            const response = await fetch(`http://localhost:8000/questionnotverify/1`);
            const json = await response.json();
            setContent(json);
          }
          catch{
            console.log("Lỗi getRaectQuestion");
        }
    }
    useEffect(() => getQuestionNotVerify(), []);
    return (
        <Container>
            <Tabs defaultActiveKey="question" id="noanim-tab-example" className="mb-3">
                <Tab eventKey="question" title="Câu Hỏi">
                       <Container>
                        {content.map(item=> <OneQuestionTab item={item}></OneQuestionTab>)}
                       </Container>
                </Tab>
                <Tab eventKey="answer" title="Câu Trả Lời">
                    <AnswersVerify></AnswersVerify>
                </Tab>
                <Tab eventKey="setting" title={"Cài đặt kiểm duyệt"}>
                    <Form.Check type="checkbox" label="Tự động duyệt câu hỏi và câu trả lời." />
                </Tab>
            </Tabs>
        </Container>
    )
};
export function AnswersVerify(props) {
    return (
        <Container>
            <OneAnswerTab></OneAnswerTab>
        </Container>
    )
}
export function OneQuestionTab(props) {
    return (
        <Row md="1">
            <Card className={"question-card"}>
                <Card.Header className={"question-header"}>
                    <Row>
                        <Col className={"question-header-content"}>
                            <span>{props.item.username} đã đặt một câu hỏi</span>
                            {/* <span>{props.username} đã đặt một câu hỏi</span> */}
                        </Col>
                        <Col className={"question-header-button"}>
                            <Button variant="danger">
                                <i class="fa fa-times" aria-hidden="true" />
                            </Button>
                            <Button variant="primary">
                                <i class="fa fa-check" />
                            </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className={"question-body"}>
                {props.item.content}
                     {/*props.content*/}
                </Card.Body>
            </Card>
        </Row>
    )
}
export function OneAnswerTab(props) {
    return (
        <Row md="1">
            <Card className={"answer-card"}>
                <Card.Header class="answer-header">
                    <Row>
                        <Col className={"answer-header-content"}>
                            {/* {Đính kèm link câu hỏi ở đây} */}
                            <span >Rhea đã trả lời cho một câu hỏi của Núi</span>
                            {/* <span>{props.item.answeruser} đã trả lời cho một câu hỏi của {props.item.askuser}</span> */}
                        </Col>
                        <Col className={"answer-header-button"}>
                            <Button variant="danger"><i class="fa fa-times" aria-hidden="true"></i></Button>
                            <Button variant="primary"><i class="fa fa-check" /></Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className={"answer-body"}>
                    Đây là câu trả lời cho câu hỏi.
                    {/* {props.item.answercontent} */}
                </Card.Body>
            </Card>
        </Row>
    )
}
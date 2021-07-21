import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, Nav, Tab, Tabs, Card,Form } from 'react-bootstrap';
export default function Verify(props) {
    const questioncount = 20;
    const answercount = 11;
    const like = 20;
    const points = 20;
    return (
        <Container>
            <Tabs defaultActiveKey="home" id="noanim-tab-example" className="mb-3">
                <Tab eventKey="question" title="Câu Hỏi">
                    <QuestionsVerify></QuestionsVerify>
                </Tab>
                <Tab eventKey="answer" title="Câu Trả Lời">
                    <AnswersVerify></AnswersVerify>
                </Tab>
                <Tab eventKey="setting" title={"Cài đặt kiểm duyệt"}>
                    <Form.Check type="checkbox" label="Tự động duyệt câu hỏi và câu trả lời."  />
                </Tab>
            </Tabs>
        </Container>
    )
};
export function QuestionsVerify(props){
    return(
        <Container>
            <OneQuestionTab></OneQuestionTab>
            <OneQuestionTab></OneQuestionTab>
        </Container>
    )
}
export function AnswersVerify(props){
    return(
        <Container>
            <OneAnswerTab></OneAnswerTab>
            <OneAnswerTab></OneAnswerTab>
        </Container>
    )
}
export function OneQuestionTab(props) {
    return (
        <Row md="1">
            <Card>
                <Card.Header style={{padding:"5px 0px", "vertical-align": "middle"}}>
                    <Row>
                    <Col  style={{paddingLeft:"20px",margin:"auto",width:"auto","vertical-align": "middle","text-overflow": "ellipsis","white-space": "nowrap","overflow": "hidden"}}>
                        <span style={{fontWeight:"bold"}}>Rhea đã đặt một câu hỏi</span>
                    </Col>
                    <Col  style={{float:'right',width:"230px"}}>
                        <Button variant="danger" style={{width: "30px",height:"30px",margin:"0px 5px",float:'right', padding:"0px"}}><i class="fa fa-times" aria-hidden="true"></i></Button>
                        <Button variant="primary" style={{width: "30px",height:"30px",margin:"0px 5px",float:'right',padding:"0px"}}><i class="fa fa-check"/></Button>
                    </Col>
                    </Row>
                </Card.Header>
                <Card.Body style={{padding:"5px 10px"}}>
                    Đây là câu trả lời cho câu hỏi.
                </Card.Body>
            </Card>
        </Row>
    )
}
export function OneAnswerTab(props) {
    return (
        <Row md="1">
            <Card>
                <Card.Header style={{padding:"5px 0px", "vertical-align": "middle"}}>
                    <Row>
                    <Col  style={{paddingLeft:"20px",margin:"auto",width:"auto","vertical-align": "middle","text-overflow": "ellipsis","white-space": "nowrap","overflow": "hidden"}}>
                        <span style={{fontWeight:"bold"}}>Rhea đẫ trả lời cho một câu hỏi của Núi</span>
                    </Col>
                    <Col  style={{float:'right',width:"230px"}}>
                        <Button variant="danger" style={{width: "30px",height:"30px",margin:"0px 5px",float:'right', padding:"0px"}}><i class="fa fa-times" aria-hidden="true"></i></Button>
                        <Button variant="primary" style={{width: "30px",height:"30px",margin:"0px 5px",float:'right',padding:"0px"}}><i class="fa fa-check"/></Button>
                    </Col>
                    </Row>
                </Card.Header>
                <Card.Body style={{padding:"5px 10px"}}>
                    Đây là câu trả lời cho câu hỏi.
                </Card.Body>
            </Card>
        </Row>
    )
}
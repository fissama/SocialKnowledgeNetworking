import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../app/styles/Verify.css";
import { Button, Container, Col, Row, Nav, Tab, Tabs, Card, Form } from 'react-bootstrap';
export default function Verify(props) {
    return (
        <Container>
            <Tabs defaultActiveKey="question" id="noanim-tab-example" className="mb-3">
                <Tab eventKey="question" title="Câu Hỏi">
                    <Container>
                        <Button>Next</Button>
                        <Button>Previous</Button>
                    </Container>
                    <QuestionsVerify></QuestionsVerify>
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
export function QuestionsVerify(props) {
    return (
        <Container>
            <OneQuestionTab></OneQuestionTab>
            <OneQuestionTab></OneQuestionTab>
        </Container>
    )
}
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
                            <span>Rhea đã đặt một câu hỏi</span>
                            {/* <span>{props.item.username} đã đặt một câu hỏi</span> */}
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
                    Đây là câu trả lời cho câu hỏi.
                     {/*props.item.content*/}
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
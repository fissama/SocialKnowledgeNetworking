<?php
    namespace Src\Controller;
    
    use Src\TableGateways\QuestionGateway;

    class QuestionController{
        private $db;
        private $requestMethod;
        private $QuestionId;

        private $QuestionGateway;

        public function __construct($db, $requestMethod, $QuestionId){
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->QuestionId = $QuestionId;

            $this->QuestionGateway = new QuestionGateway($db);
        }

        public function processRequest(){
            switch($this->requestMethod){
                case 'GET':
                    if($this->QuestionId){
                        if (ctype_digit($this->QuestionId)){
                            $response = $this->getQuestion($this->QuestionId);
                        }else{
                            //VD: tìm câu hỏi theo question_id = 1
                            //url = localhost:8000/question/user_id=1
                            //giá trị sau dấu "=" không được có khoảng trắng
                            $response = $this->getQuestionsByRequest($this->QuestionId);
                        }
                        
                    } else{
                        $response = $this->getAllQuestions();
                    };
                    break;
                case 'POST':
                    $response = $this->createQuestionFromRequest();
                    break;
                case 'PUT':
                    $response = $this->updateQuestionFromRequest($this->QuestionId);
                    break;
                case 'DELETE':
                    $response = $this->deleteQuestion($this->QuestionId);
                    break;
                default:
                    $response = $this->notFoundResponse();
                    break;
            }
            header($response['status_code_header']);
            if ($response['body']){
                print $response['body'];
            }
        }

        private function getAllQuestions(){
            $result = $this->QuestionGateway->findAll();
            $response['status_code_header'] = "HTTP/1.1 200 ok";
            $response['body'] = json_encode($result);
            return $response;
        }

        private function getQuestion($id){
            $result = $this->QuestionGateway->find($id);
            if (! $result) {
                return $this->notFoundResponse();
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        private function getQuestionsByRequest($id){
            $pos = strpos($id, '=');
            $field = substr($id, 0, $pos);
            $new_id = substr($id, $pos+1, strlen($id));
            // print $id.' '. $field.' '.$new_id;

            $result = $this->QuestionGateway->findByRequest($field, $new_id);
            if (! $result) {
                return $this->notFoundResponse();
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        private function createQuestionFromRequest(){
            $input = (array) json_decode(file_get_contents('php://input'), TRUE);
           
            if (!$this->validateQuestion($input)){
                return $this->unprocessableEntityResponse();
            }
            $this->QuestionGateway->insert($input);
            $response['status_code_header'] = "HTTP/1.1 201 created";
            $response['body'] = "inserted";
            return $response;
        }

        private function updateQuestionFromRequest($id){
            $result = $this->QuestionGateway->find($id);
            if(!$result){
                return $this->notFoundResponse();
            }

            $input = (array) json_decode(file_get_contents('php://input'), TRUE);
            if (!$this->validateQuestion($input)){
                return $this->unprocessableEntityResponse();
            }
            $this->QuestionGateway->update($id, $input);
            $response['status_code_header'] = "HTTP/1.1 200 ok";
            $response['body'] = "updated";
            return $response;
        }

        private function deleteQuestion($id){
            $result = $this->QuestionGateway->find($id);
            if (!$result){
                return $this->notFoundResponse();
            }

            $this->QuestionGateway->delete($id);
            $response['status_code_header'] = "HTTP/1.1 200 ok";
            $response['body'] = "deleted";
            return $response;
        }

        private function validateQuestion(){
            // if (isset($input['questionid'])){
            //     if (!ctype_digit($input['title'])){
            //         return false;
            //     }
            // }
            // if (isset($input['shortencontent'])){
            //     if (!ctype_alnum($input['title'])){
            //         return false;
            //     }
            // }
            // if (isset($input['fullcontent'])){
            //     if (!ctype_alnum($input['title'])){
            //         return false;
            //     }
            // }
            // if (isset($input['user'])){
            //     if (!ctype_alnum($input['title'])){
            //         return false;
            //     }
            // }
            // if (isset($input['status'])){
            //     if (!ctype_digit($input['title'])){
            //         return false;
            //     }
            // }
            // if (isset($input['imagelink'])){
            //     if (!ctype_alnum($input['title'])){
            //         return false;
            //     }
            // }
            return true;
        }

        private function unprocessableEntityResponse(){
            $response['status_code_header'] = "HTTP/1.1 422 Unprocessable Entity";
            $response['body'] = Json_encode(array(
                "error" => "Invalid input"
            ));
            return $response;
        }

        private function notFoundResponse(){
            $response['status_code_header'] = "HTTP/1.1 404 not found";
            $response['body'] = null;
            return $response;
        }

    }
?>
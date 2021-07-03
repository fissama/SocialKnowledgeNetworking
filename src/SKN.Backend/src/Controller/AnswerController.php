<?php
    namespace Src\Controller;
    
    use Src\TableGateways\AnswerGateway;

    class AnswerController{
        private $db;
        private $requestMethod;
        private $AnswerId;

        private $AnswerGateway;

        public function __construct($db, $requestMethod, $AnswerId){
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->AnswerId = $AnswerId;

            $this->AnswerGateway = new AnswerGateway($db);
        }

        public function processRequest(){
            switch($this->requestMethod){
                case 'GET':
                    if($this->AnswerId){
                        if (ctype_digit($this->AnswerId)){
                            $response = $this->getAnswer($this->AnswerId);
                        }else{
                            //VD: tìm câu hỏi theo question_id = 1
                            //url = localhost:8000/answer/question_id=1
                            //giá trị sau dấu "=" không được có khoảng trắng
                            $response = $this->getAnswersByRequest($this->AnswerId);
                        }
                    } else{
                        $response = $this->getAllAnswers();
                    };
                    break;
                case 'POST':
                    $response = $this->createAnswerFromRequest();
                    break;
                case 'PUT':
                    $response = $this->updateAnswerFromRequest($this->AnswerId);
                    break;
                case 'DELETE':
                    $response = $this->deleteAnswer($this->AnswerId);
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

        private function getAllAnswers(){
            $result = $this->AnswerGateway->findAll();
            $response['status_code_header'] = "HTTP/1.1 200 ok";
            $response['body'] = json_encode($result);
            return $response;
        }

        private function getAnswer($id){
            print $this->AnswerId;
            $result = $this->AnswerGateway->find($id);
            if (! $result) {
                return $this->notFoundResponse();
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        private function getAnswersByQuestionId($id){

            $result = $this->AnswerGateway->findByQuestionId($id);
            if (! $result) {
                return $this->notFoundResponse();
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        private function getAnswersByRequest($id){
            $pos = strpos($id, '=');
            $field = substr($id, 0, $pos);
            $new_id = substr($id, $pos+1, strlen($id));
            // print $id.' '. $field.' '.$new_id;

            $result = $this->AnswerGateway->findByRequest($field, $new_id);
            if (! $result) {
                return $this->notFoundResponse();
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }

        private function createAnswerFromRequest(){
            $input = (array) json_decode(file_get_contents('php://input'), TRUE);
           
            if (!$this->validateAnswer($input)){
                return $this->unprocessableEntityResponse();
            }
            $this->AnswerGateway->insert($input);
            $response['status_code_header'] = "HTTP/1.1 201 created";
            $response['body'] = "inserted";
            return $response;
        }

        private function updateAnswerFromRequest($id){
            $result = $this->AnswerGateway->find($id);
            if(!$result){
                return $this->notFoundResponse();
            }

            $input = (array) json_decode(file_get_contents('php://input'), TRUE);
            if (!$this->validateAnswer($input)){
                return $this->unprocessableEntityResponse();
            }
            $this->AnswerGateway->update($id, $input);
            $response['status_code_header'] = "HTTP/1.1 200 ok";
            $response['body'] = "updated";
            return $response;
        }

        private function deleteAnswer($id){
            $result = $this->AnswerGateway->find($id);
            if (!$result){
                return $this->notFoundResponse();
            }

            $this->AnswerGateway->delete($id);
            $response['status_code_header'] = "HTTP/1.1 200 ok";
            $response['body'] = "deleted";
            return $response;
        }

        private function validateAnswer(){
            // if (isset($input['Answerid'])){
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
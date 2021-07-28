<?php
namespace Src\Controller;

use Src\TableGateways\GetUserInfomationGateway;
class GetUserInfomationController {

    private $db;
    private $requestMethod;
    private $questionId;
    private $userid;
    private $username;
    private $getUserInfomationGateway;

    public function __construct($db, $requestMethod, $userid)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->userid = $userid;
        $this->getUserInfomationGateway = new GetUserInfomationGateway($db);
        
    }

    public function processRequest()
    {
        $result = $this->getUserInfomationGateway->Getusername($this->userid);
        if (!$result) {
            return $this->notFoundResponse();
        }
        $this->username = $result[0];
        {
        switch ($this->requestMethod) {
            case 'POST':
                $response = $this->GetInformation($this->username);
                break;
            default:
                $response = $this->notFoundResponse2();
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }}
    }

    private function GetInformation($id)
    {
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        switch ($input['RequestType']) {
            case 1:
                $result = $this->getUserInfomationGateway->GetUserQuestion($this->username);
                break;
            case 2:
                $result = $this->getUserInfomationGateway->GetUserAnswer($this->username);
                break;
            case 3:
                $result = $this->getUserInfomationGateway->GetUserPoint($this->username);
                break;
            default:
                $result = $this->notFoundResponse3();
                break;
        }
        if (!$result) {
            return $this->notFoundResponse();
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }
    private function notFoundResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }
    private function notFoundResponse2()
    {
        $response['status_code_header'] = 'HTTP/1.1 405 Not Found';
        $response['body'] = null;
        return $response;
    }
    private function notFoundResponse3()
    {
        $response['status_code_header'] = 'HTTP/1.1 406 Not Found';
        $response['body'] = null;
        return $response;
    }
}
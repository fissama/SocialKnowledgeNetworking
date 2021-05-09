<?php
namespace Src\Controller;

use Src\TableGateways\CategoryGateway;

class CategoryController {

    private $db;
    private $requestMethod;
    private $categoryId;

    private $categoryGateway;

    public function __construct($db, $requestMethod, $categoryId)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->categoryId = $categoryId;

        $this->categoryGateway = new CategoryGateway($db);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->categoryId) {
                    $response = $this->getCategory($this->categoryId);
                } else {
                    $response = $this->getAllCategories();
                };
                break;
            case 'POST':
                $response = $this->createCategoryFromRequest();
                break;
            case 'PUT':
                $response = $this->updateCategoryFromRequest($this->categoryId);
                break;
            case 'DELETE':
                $response = $this->deleteCategory($this->categoryId);
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    private function getAllCategories()
    {
        $result = $this->categoryGateway->findAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getCategory($id)
    {
        $result = $this->categoryGateway->find($id);
        if (! $result) {
            return $this->notFoundResponse();
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function createCategoryFromRequest()
    {
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        if (! $this->validateCategory($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->categoryGateway->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;
        return $response;
    }

    private function updateCategoryFromRequest($id)
    {
        $result = $this->categoryGateway->find($id);
        if (! $result) {
            return $this->notFoundResponse();
        }
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        if (! $this->validateCategory($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->categoryGateway->update($id, $input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function deleteCategory($id)
    {
        $result = $this->categoryGateway->find($id);
        if (! $result) {
            return $this->notFoundResponse();
        }
        $this->categoryGateway->delete($id);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function validateCategory($input)
    {
        if (! isset($input['category_name'])) {
            return false;
        }
        return true;
    }

    private function unprocessableEntityResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => 'Invalid input'
        ]);
        return $response;
    }

    private function notFoundResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }
}
<?php
require "../bootstrap.php";
use Src\Controller\CategoryController;
use Src\Controller\UserController;
use Src\Controller\QuestionController;
use Src\Controller\AnswerController;
use Src\Controller\CategoryQuestionController;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// the user id is, of course, optional and must be a number:
$Id = null;
if (isset($uri[2])) {
    $Id = $uri[2];
}
$requestMethod = $_SERVER["REQUEST_METHOD"];

// all of our endpoints start with valid controller name
// everything else results in a 404 Not Found
switch($uri[1]){
    case 'category': {
        $controller = new CategoryController($dbConnection, $requestMethod, $Id);
        break;
    }
    case 'user': {
        $controller = new UserController($dbConnection, $requestMethod, $Id);
        break;
    }
    case 'question': {
        $controller = new QuestionController($dbConnection, $requestMethod, $Id);
        break;
    }
    case 'answer': {
        $controller = new AnswerController($dbConnection, $requestMethod, $Id);
        break;
    }
    case 'categoryquestion': {
        $controller = new CategoryQuestionController($dbConnection, $requestMethod, $Id);
        break;
    }
    default: {
        header("HTTP/1.1 404 Not Found");
        exit();
    }
}
// pass the request method and ID to the Controller and process the HTTP request:
$controller->processRequest();
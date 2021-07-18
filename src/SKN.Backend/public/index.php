<?php
require "../bootstrap.php";
use Src\Controller\CategoryController;
use Src\Controller\UserController;
use Src\Controller\QuestionController;
use Src\Controller\AnswerController;
use Src\Controller\CategoryQuestionController;

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$ret = [
    'result' => 'OK',
];
print json_encode($ret);

$Query = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY);
$Query = explode('&&',$Query);
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
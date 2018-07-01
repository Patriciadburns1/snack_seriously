<?php
header('Access-Control-Allow-Origin: *');
//stdObj access is obj->name
//lamper demo

$output = [
    'success' => false
];

require_once('db_connect.php');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'];

switch($method){
    case 'GET':
        $path = "get/$action.php";
        break;
    case 'POST':
    $path = "post/$action.php";
        break;
    case 'PUT':
        $output['msg'] = 'Get method put';
        break;
    case 'PATCH':
        //pull in info from body since axio's patch can't be sent normally like get or POST
        $_PATCH = json_decode(file_get_contents('php://input'), true);
        $path = "patch/$action.php";
        break;
    case 'DELETE':
    $path = "delete/$action.php";
        break;
    default:
        $output['error'] = "unknown request method: $method";
}
if(is_file($path)){
    include_once($path);
}else{
    $output['error'] = "unknown action: $action";
}

print json_encode($output);



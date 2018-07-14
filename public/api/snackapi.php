<?php
header('Access-Control-Allow-Origin: *');
//stdObj access is obj->name

$output = [
    'success' => false
];

require_once('../../server/db_connect.php');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'];

if($method = 'GET'){
    switch($action){
        case 'getproduct':
            include_once('apiActionCalls/getproduct.php');
            break;
        case 'getrandom':
            include_once('apiActionCalls/getrandom.php');
            break;
        case 'getname':
            include_once('apiActionCalls/getname.php');
            break;
        case 'getcategory':
            include_once('apiActionCalls/getcategory.php');
            break;
        case 'getfilter':
            include_once('apiActionCalls/getfilter.php');
            break;
        case 'getauto':
            include_once('apiActionCalls/getauto.php');
            break;
        case 'getfavorites':
            include_once('apiActionCalls/getfavorites.php');
            break;
        default:
            $output['error'] = "unknown request";
    }
}

mysqli_close($conn);

print json_encode($output, JSON_UNESCAPED_SLASHES);



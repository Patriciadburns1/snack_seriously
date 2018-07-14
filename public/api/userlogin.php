<?php
session_start();
//$conn = mysqli_connect('localhost', 'root','root','todoexample');
require_once('../../server/db_connect.php');

$output = [
    'success' => false
];

if(!isset($_SESSION['userID'])){
    print('must log in');
    exit();
}
$_POST['password'] = sha1($_POST['password']);


$query = "SELECT * FROM `users` WHERE `name`='{$_POST['name']}' AND `password`='{$_POST['password']}'";

$result = mysqli_query($conn, $query);

if($result){
    if(mysqli_num_rows($result)>0){
        $userData = mysqli_fetch_assoc($result);//we only expect 1 row
        $output['name'] = $userData['name'];
        $output['success'] = true;
        $_SESSION['userID'] = $userData['ID'];
        $_SESSION['username'] = $userData['username'];
    }else{
        $output['error'] = 'invalid user name or password';
    }
}else{
    $output['error'] = 'cannot attempt login';
}

print( json_encode($output));

?>
<?php
session_start();

$output = [
    'success' => false
];

// if(!isset($_SESSION['userID'])){
//     print('must log in');
//     exit();
// }
$_NAME = addslashes($_POST['name']);
$_PASS = sha1($_POST['password']);
$_EMAIL = addslashes($_POST['name']);

$query = "SELECT * FROM `users` WHERE `username`=$_NAME OR `email`=$_EMAIL AND `password`=$_PASS";

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
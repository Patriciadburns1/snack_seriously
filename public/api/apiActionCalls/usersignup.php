<?php
session_start();

$output = [
    'success' => false
];

$_NAME = addslashes($_POST['username']);
$_PASS = sha1($_POST['password']);
$_EMAIL = addslashes($_POST['email']);

$queryexist = "SELECT `ID` FROM `users` WHERE `email`=$_EMAIL OR `username`=$_NAME";
$result = mysqli_query($conn, $query);

if($result){
    if(mysqli_num_rows($result)>0){
        $output['error'] = 'username or email already in use';
    }
    print( json_encode($output));
    exit();
}

$query = "INSERT INTO `users`(`ID`, `email`, `password`, `username`, `user_rights`) 
VALUES ( 'null', $_EMAIL, $_PASS, $_NAME, 1)";

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

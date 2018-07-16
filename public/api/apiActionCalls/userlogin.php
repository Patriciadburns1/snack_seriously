<?php
header("Access-Control-Allow-Origin: *");
session_start();

//localhost:8000/public/api/snackapi.php?action=userlogin
//POST with name and password

if(isset($_SESSION['userID'])){
    $output['success'] = true;
    $output['username'] = $_SESSION['username'];
    $output['msg'] = 'your already logged in';
    print json_encode($output, JSON_UNESCAPED_SLASHES);
    exit();
}

$_NAME = addslashes($_POST['name']);
$_PASS = sha1($_POST['password']);
$_EMAIL = addslashes($_POST['name']);

$query = "SELECT * FROM `users` WHERE (`username`='$_NAME' OR `email`='$_EMAIL') AND `password`='$_PASS'";

$result = mysqli_query($conn, $query);

if($result){
    if(mysqli_num_rows($result)>0){
        $userData = mysqli_fetch_assoc($result);//we only expect 1 row
        $output['name'] = $userData['username'];
        $output['success'] = true;
        $_SESSION['userID'] = $userData['ID'];
        $_SESSION['username'] = $userData['username'];
    }else{
        $output['error'] = 'invalid user name or password';
    }
}else{
    $output['error'] = 'cannot attempt login';
}

?>
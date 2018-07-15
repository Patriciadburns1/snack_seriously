<?php
session_start();

$_NAME = addslashes($_POST['username']);
$_PASS = sha1($_POST['password']);
$_EMAIL = addslashes($_POST['email']);

$queryexist = "SELECT `ID` FROM `users` WHERE `email`='$_EMAIL' OR `username`='$_NAME'";
$result = mysqli_query($conn, $queryexist);

if($result){
    if(mysqli_num_rows($result)>0){
        $output['error'] = 'username or email already in use';
        print( json_encode($output));
        exit();
    }else{
        $query = "INSERT INTO `users`(`ID`, `email`, `password`, `username`, `user_rights`) VALUES ( null, '$_EMAIL', '$_PASS', '$_NAME', 1)";

        $result = mysqli_query($conn, $query);
        
        if($result){
            $output['name'] = $_NAME;
            $output['success'] = true;
            $_SESSION['userID'] = mysqli_insert_id($conn);
            $_SESSION['username'] = $_NAME;
          
        }else{
            $output['error'] = 'invalid user name or password';
        }
    }
}



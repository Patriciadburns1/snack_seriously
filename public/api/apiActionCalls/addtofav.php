<?php
session_start();
$productID = filter_var($_GET['product_id'],FILTER_VALIDATE_INT);
$choice = filter_var($_GET['choice'],FILTER_VALIDATE_BOOLEAN); //'true' or 'false'

if(!isset($_SESSION['userID'])){
    $output['error'] = 'must log in to do that!';
    print json_encode($output, JSON_UNESCAPED_SLASHES);
    exit();
}

$_sessID = $_SESSION['userID'];

if($productID >= 0){

    if($choice){
        //make sure before adding that it does not exist.
        $queryexist = "SELECT 'ID' FROM `user_favorites` WHERE `product_id` = $productID and `user_id` = $_sessID";
        $result = mysqli_query($conn, $queryexist);

        if(mysqli_num_rows($result)>0){
            $output['msg'] = 'you already favorited this!';
            print json_encode($output, JSON_UNESCAPED_SLASHES);
            exit();
        }else{
            $query = "INSERT INTO `user_favorites`(`ID`, `user_id`, `product_id`) VALUES ( null, $_sessID, $productID)";
        }
    }else{
        $query = "DELETE FROM `user_favorites` WHERE `product_id`= $productID AND `user_id`=$_sessID";
    }

    $result = mysqli_query($conn, $query);

    if ($result){
        //the query successfully ran
        //print_r(mysqli_affected_rows($conn)); //will give how many were affected.
        if(mysqli_affected_rows($conn)>0){
            $output['success'] = true;
            $output['msg'] = 'request success';
        }else{
            $output['msg'] = 'unable to complete request';
        }

    }else{
        //the query failed
        $output['error'] = 'unable to complete request';
    }

}else{
    $output['error'] = 'bad query value';
}
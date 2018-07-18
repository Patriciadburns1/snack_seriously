<?php
header("Access-Control-Allow-Origin: *");

//localhost:3000/public/api/snackapi.php?action=getfavcheck&id=1

//$limit = filter_var( $_GET['limit'],FILTER_VALIDATE_INT);
$ID = filter_var($_GET['id'],FILTER_VALIDATE_INT);

if(!isset($_SESSION['userID'])){
    $output['msg'] = 'must log in to do that!';
    print_r($_SESSION);
    print json_encode($output, JSON_UNESCAPED_SLASHES);
    exit();
}

$_userID = $_SESSION['userID'];

if($ID > 0){

    $query = "SELECT `product_id` FROM `user_favorites` WHERE `user_id` = $_userID AND `product_id` = $ID";

    $result = mysqli_query($conn, $query);

    if ($result){
        //the query successfully ran
        if( mysqli_num_rows($result)>0 ){
            //there was data
            $output['data'] = true;
            $output['success'] = true;
            }
            else{
                //there was no data
                $output['data'] = false;
            }


    }else{
        //the query failed
        $output['error']= 'unable to make request';
    }

}else{
    $output['error'] = 'bad query value';
}

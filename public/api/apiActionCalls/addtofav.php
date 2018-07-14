<?php
session_start();
$productID = filter_var($_GET['product_id'],FILTER_VALIDATE_INT);
$choice = filter_var($GET['choice'],FILTER_VALIDATE_BOOLEAN); //'true' or 'false'

$output = [
    'success' => false
];

if(!isset($_SESSION['userID'])){
    print('must log in to do that!');
    exit();
}

$_sessID = $_SESSION['userID'];

if($productID >= 0){

    if($choice){
        $query = "INSERT INTO `user_favorites`(`ID`, `user_id`, `product_id`) VALUES ( 'null', $_sessID, $productID)";
    }else{
        $query = "DELETE FROM `user_favorites` WHERE `product_id`= $productID AND `user_id`=$_sessID"
    }

    $result = mysqli_query($conn, $query);

    if ($result){
        //the query successfully ran
        if(mysqli_num_rows($result)>0 ){
            //there was data
            while( $row = mysqli_fetch_assoc($result) ) {
                //get all the data
                $output['data'][] = $row;
            }
            $output['success'] = true;
            }
            else{
                //there was no data
                $output['error'][] = 'no data avail';
            }


    }else{
        //the query failed
        $output['error'][] = mysqli_error($conn);
    }

}else{
    $output['error'] = 'bad query value';
}
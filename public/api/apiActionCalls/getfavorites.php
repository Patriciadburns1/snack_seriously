<?php
session_start();

//localhost:8000/public/api/snackapi.php?action=getfavorites&limit=12&offset=0

$limit = filter_var( $_GET['limit'],FILTER_VALIDATE_INT);
$offset = filter_var($_GET['offset'],FILTER_VALIDATE_INT);

if(!isset($_SESSION['userID'])){
    $output['msg'] = 'must log in to do that!';
    print json_encode($output, JSON_UNESCAPED_SLASHES);
    exit();
}

if($limit && $offset >= 0){

    $query = "SELECT `p`.`ID`, `p`.`name`, `d`.`img_url` FROM `products` AS `p` 
    JOIN `details` AS `d` 
    ON `d`.`product_id` = `p`.`ID`
    JOIN `user_favorites` AS `u_f`
    ON `u_f`.`product_id` = `p`.`ID`
    WHERE `u_f`.`user_id` = $_SESSION[userID]
    ORDER BY `p`.`ID` ASC LIMIT $limit OFFSET $offset";

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
        $output['error']= 'unable to make request';
    }

}else{
    $output['error'] = 'bad query value';
}

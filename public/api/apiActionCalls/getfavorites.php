<?php
session_start();

$output = [
    'success' => false
];

if(!isset($_SESSION['userID'])){
    print('must log in to do that!');
    exit();
}

if($categoryID && $limit && $offset >= 0){

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
        $output['error'][] = mysqli_error($conn);
    }

}else{
    $output['error'] = 'bad query value';
}

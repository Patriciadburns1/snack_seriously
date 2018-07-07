<?php
//http://localhost:8000/public/api/snackapi.php?action=getcategory&categoryid=1&limit=12&offset=0
$categoryID = filter_var($_GET['categoryid'],FILTER_VALIDATE_INT);
$limit = filter_var( $_GET['limit'],FILTER_VALIDATE_INT);
$offset = filter_var($_GET['offset'],FILTER_VALIDATE_INT);

if($categoryID && $limit && $offset >= 0){

    $query = "SELECT `p`.`ID`, `p`.`name`, `d`.`img_url` FROM `products` AS `p` JOIN `details` AS `d` ON `d`.`product_id` = `p`.`ID` WHERE `p`.`category_id` = $categoryID ORDER BY `p`.`ID` ASC LIMIT $limit OFFSET $offset";

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
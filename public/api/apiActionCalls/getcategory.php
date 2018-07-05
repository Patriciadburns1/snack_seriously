<?php
//http://localhost:8000/public/api/snackapi.php?action=getcategory&categoryid=1&limit=12&offset=0
$categoryID = $_GET['categoryid'];
$limit = $_GET['limit'];
$offset = $_GET['offset'];
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

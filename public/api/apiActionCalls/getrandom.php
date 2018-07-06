<?php
http://localhost:8000/public/api/snackapi.php?action=getrandom
$randomQuery = "SELECT `details`.`product_id`,`products`.`name`,`details`.`img_url` FROM `products` JOIN `details` ON `details`.`product_id` = `products`.`id` ORDER BY RAND() LIMIT 5";

$result = mysqli_query($conn, $randomQuery);

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

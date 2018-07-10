<?php
//http://localhost:8000/public/api/snackapi.php?action=getname&search=pop
$search = $_GET['search'];

if( strlen($search) < 125){

    $query = "SELECT `p`.`ID`,`p`.`name`,`d`.`img_url` FROM `products` AS `p` JOIN `details` AS `d` ON `d`.`product_id` = `p`.`ID` WHERE `name` LIKE '%$search%' LIMIT 12";

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
        $output['error'][] = 'bad request';
    }
    
}else{
    $output['error'] = 'unreasonable query length';
}

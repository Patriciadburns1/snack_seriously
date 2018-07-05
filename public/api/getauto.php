<?php
header('Access-Control-Allow-Origin: *');
require_once('../../server/config/snack_db.php');
$conn = mysqli_connect($db_cred['host'],$db_cred['user'],$db_cred['password'],$db_cred['database']);
$query = "SELECT `ID`,`name` FROM `products` WHERE `name` LIKE '%pop%' LIMIT 6";

//print("query = $query");

$result = mysqli_query($conn, $query);

$output = [
    'success' => false,
    'data' => [],
    'error' => []
];

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

$output_json = json_encode($output);

print($output_json);
?>
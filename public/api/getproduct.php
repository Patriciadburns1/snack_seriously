<?php
header('Access-Control-Allow-Origin: *');
require_once('../../server/config/snack_db.php');
$conn = mysqli_connect($db_cred['host'],$db_cred['user'],$db_cred['password'],$db_cred['database']);

//$result = mysqli_query($conn, $query);

$output = [
    'success' => false,
];

//need to loop through info to make sure were printing it out correctly in an associate array. for json nesting.

// gets us id, name, manu, description, img_url, ingredeints , all serving info
$productQuery = "SELECT `p`.`ID`,`p`.`name`, `b`.`name` as `manu`, `d`.`description`,`d`.`img_url`,`d`.`ingredients`,`s`.`per_container`,`s`.`size`,`s`.`unit`, `s`.`weight` FROM `products` AS `p` 
	JOIN `details` AS `d`
    	ON `d`.`product_id` = `p`.`ID`
    JOIN `brand` AS `b`
    	ON `b`.`ID` = `p`.`ID`
    JOIN `servings` AS `s`
    	ON `s`.`ID` = `p`.`serving_id`
	WHERE `p`.`ID` = 1";

//get nutrients
$nutrientQuery = "SELECT `n`.name,`p_n`.qty FROM `product_to_nutrition` AS `p_n` 
	JOIN `nutrients` AS `n`
    	ON `n`.`ID` = `p_n`.`nutrient_id`
    WHERE `p_n`.`product_id`= 1";


$result = mysqli_query($conn, $productQuery);
if(mysqli_affected_rows ( $conn )){
    $output['data'] = mysqli_fetch_assoc($result);


    $result = mysqli_query($conn, $nutrientQuery);
    if(mysqli_affected_rows ( $conn )){
        while($row = mysqli_fetch_assoc($result)){
            $output['data']['nutrients'][] = $row;
        }

    }

}


print('<pre>');
print_r(json_encode($output));
print('</pre>');
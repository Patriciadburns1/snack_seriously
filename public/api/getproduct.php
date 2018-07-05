<?php
header('Access-Control-Allow-Origin: *');
require_once('../../server/config/snack_db.php');
//$conn = mysqli_connect($db_cred['host'],$db_cred['user'],$db_cred['password'],$db_cred['database']);
//$query = "SELECT `details`.`product_id`,`products`.`name`,`details`.`img_url` FROM `products` JOIN `details` ON `details`.`product_id` = `products`.`id` ORDER BY RAND() LIMIT 5";

print_r("query = $conn");

//$result = mysqli_query($conn, $query);

$output = [
    'success' => false,
    'data' => [],
    'error' => []
];

//need to loop through info to make sure were printing it out correctly in an associate array. for json nesting.

// gets us id, name, manu, description, img_url, ingredeints , all serving info
"SELECT `p`.`ID`,`p`.`name`, `b`.`name` as `manu`, `d`.`description`,`d`.`img_url`,`d`.`ingredients`,`s`.`per_container`,`s`.`size`,`s`.`unit`, `s`.`weight` FROM `products` AS `p` 
	JOIN `details` AS `d`
    	ON `d`.`product_id` = `p`.`ID`
    JOIN `brand` AS `b`
    	ON `b`.`ID` = `p`.`ID`
    JOIN `servings` AS `s`
    	ON `s`.`ID` = `p`.`serving_id`
	WHERE `p`.`ID` = 1"

//get nutrients
"SELECT `n`.name,`p_n`.qty FROM `product_to_nutrition` AS `p_n` 
	JOIN `nutrients` AS `n`
    	ON `n`.`ID` = `p_n`.`nutrient_id`
    WHERE `p_n`.`product_id`= 1"
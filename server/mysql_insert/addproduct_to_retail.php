<?php

require_once('../api/db_connect.php');

//products
$importJSON = file_get_contents('../scrub_data/wfoodData1_CleanList_REcategorized.json');

$productList = json_decode($importJSON, true);

// foreach($productList as $item){

//         $productQuery = "SELECT `ID` FROM `products` WHERE `upc`='$item[upc]'";
//         $result = mysqli_query($conn, $productQuery);
//         $productID = mysqli_fetch_assoc($result);

//         $pToRetail = "INSERT INTO `product_to_retail`(`ID`, `retail_id`, `product_id`) VALUES (null,1,$productID[ID])";
//         $result = mysqli_query($conn, $pToRetail);

// }

print('done');


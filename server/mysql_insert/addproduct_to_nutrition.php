<?php

require_once('../api/db_connect.php');

//products
$importJSON = file_get_contents('../scrub_data/wfoodData1_CleanList_REcategorized.json');

$productList = json_decode($importJSON, true);


// foreach($productList as $item){

//     $productQuery = "SELECT `ID` FROM `products` WHERE `upc`='$item[upc]'";
//     $result = mysqli_query($conn, $productQuery);
//     $productID = mysqli_fetch_assoc($result);


//     $itemLength = count($item['nutrients']);

//     for ($i = 0; $i < $itemLength; $i++){
//         $nutrientName = $item['nutrients'][$i]['name'];
//         $nutrientQuery = "SELECT `ID` FROM `nutrients` WHERE `name`='$nutrientName'";
//         $result = mysqli_query($conn, $nutrientQuery);
//         $nutrientID = mysqli_fetch_assoc($result);

//         $nutrientVal = $item['nutrients'][$i]['value'];
//         $insertNutritionQuery = "INSERT INTO `product_to_nutrition`(`ID`, `product_id`, `nutrient_id`, `qty`) VALUES (null, $productID[ID], $nutrientID[ID], $nutrientVal)";
//         $result = mysqli_query($conn, $insertNutritionQuery);

//     }  

// }

print('done');


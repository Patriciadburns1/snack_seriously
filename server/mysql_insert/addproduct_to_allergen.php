<?php

require_once('../api/db_connect.php');

//products
$importJSON = file_get_contents('../scrub_data/wfoodData1_CleanList_REcategorized.json');

$productList = json_decode($importJSON, true);


$searchList = array('peanuts','dairy','eggs','corn','tree nuts','soy','wheat','gluten free');
$listLength = count($searchList);

// foreach($productList as $item){

//     $productQuery = "SELECT `ID` FROM `products` WHERE `upc`='$item[upc]'";
//     $result = mysqli_query($conn, $productQuery);
//     $productID = mysqli_fetch_assoc($result);

//     for ($i=0; $i < $listLength; $i++){
//         $searchWord = $searchList[$i];
//         $allergenID = $i+1;
//         $regexResult = preg_match("/$searchWord/i", $item['ingredients']);

        
//         if($regexResult){
//             $insertQuery = "INSERT INTO `product_to_allergen`(`ID`, `allergen_id`, `product_id`) VALUES (null,'$allergenID','$productID[ID]')";
//             $result = mysqli_query($conn, $insertQuery);

//         }

//     }

// }

print('done');


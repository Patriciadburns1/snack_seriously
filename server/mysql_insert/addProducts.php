<?php

require_once('../api/db_connect.php');

//products
$importJSON = file_get_contents('../scrub_data/wfoodData1_CleanList_REcategorized.json');

//brands
//$importJSON = file_get_contents('../scrub_data/wFoodsBrandData.json');

$productList = json_decode($importJSON, true);

//********************************** */
// $brands = array_keys($productList);

// foreach($brands as $item){
//     $output = addslashes($item);
//     $query = "INSERT INTO `brand`(`ID`, `name`) VALUES (null,'$output')";
//     $result = mysqli_query($conn, $query);
//     print($query);
// }


//import products
//********************************** */
// foreach($productList as $item){

//     //makes sure there are no NULL objects.
//     $key = array_keys($item);
//     $itemLength = count($item);

//     for ($i = 0; $i < $itemLength; $i++){
//         if ($item[$key[$i]] == NULL){
//             $item[$key[$i]] = '';
//         }
//         $item[$key[$i]] = addslashes($item[$key[$i]]);
//     }

//     //insert Serving INFO FOR ID
//     $servingQuery = "INSERT INTO `servings`(`ID`, `per_container`, `size`, `unit`, `weight`) VALUES (null,'$item[servings_per_container]','$item[serving_size]','$item[serving_size_unit]','$item[weight]')";
//     print($servingQuery);
//     print("<br>");

//     $result = mysqli_query($conn, $servingQuery);
//     $servingID = mysqli_insert_id($conn);
//     print($servingID);

//     //find category
//     print("<br>");
//     $categoryQuery = "SELECT `ID` FROM `categorys` WHERE `name`='$item[category]'";
//     $result = mysqli_query($conn, $categoryQuery);
//     $categoryID = mysqli_fetch_assoc($result);
//     print($categoryID['ID']);

//     //find brand
//     print("<br>");
//     $brandQuery = "SELECT `ID` FROM `brand` WHERE `name`='$item[brand]'";
//     $result = mysqli_query($conn, $brandQuery);
//     $brandID = mysqli_fetch_assoc($result);
//     print($brandID['ID']);

//     //insert $productQuery = 
//     $productQuery = "INSERT INTO `products`(`ID`, `name`, `upc`, `brand_id`, `category_id`, `serving_id`) VALUES (null,'$item[name]','$item[upc]','$brandID[ID]','$categoryID[ID]','$servingID')";
//     $result = mysqli_query($conn, $productQuery);
//     $productID = mysqli_insert_id($conn);

//     //insert Details
//     $detailQuery = "INSERT INTO `details`(`ID`, `product_id`, `description`, `amazon_url`, `img_url`, `added`, `ingredients`) VALUES (null,'$productID','$item[description]','','$item[large_image]',NOW(),'$item[ingredients]')";
//     $result = mysqli_query($conn, $detailQuery);

// }

//********************************** */

print('done');


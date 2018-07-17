<?php

require_once('../db_connect.php');

//products
$importJSON = file_get_contents('../amazonData/amazonData.json');

$amazonList = json_decode($importJSON, true);
// get ID from product ID // $item['UPC']

//SAMPLE
// UPDATE `details` SET `amazon_url`=[value-4],`img_url`=[value-5] WHERE `product_id`= $productID

// foreach($amazonList as $item){
//     $upc = $item['UPC'];

//     $productQuery = "SELECT `ID` FROM `products` WHERE `upc`=$upc";
//     $result = mysqli_query($conn, $productQuery);
//     $productIDresult = mysqli_fetch_assoc($result);
    
//     $productID = $productIDresult['ID'];

//     if($item['URL'] != ''){
//         $URL = $item['URL'];
//         $updateQuery = "UPDATE `details` SET `amazon_url`='$URL' WHERE `product_id`= $productID";
//         if($item['IMG'] != ''){
//             $IMG = $item['IMG'];
//             $updateQuery = "UPDATE `details` SET `amazon_url`='$URL',`img_url`='$IMG' WHERE `product_id`= $productID";
//         }
//     }
//     $result = mysqli_query($conn, $updateQuery);

// }

print('done');
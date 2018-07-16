<?php
//http://localhost:8000/public/api/snackapi.php?action=getproduct&product_id=400
if(empty($_GET['product_id'])){
    $output['error'] = 'bad query';
}else{

    $productId = filter_var( $_GET['product_id'],FILTER_VALIDATE_INT);
    if($productId){
        // gets us id, name, manu, description, img_url, ingredeints , all serving info

        //add in user note query as a if statement if $_SESSION EXIST.
        // if(!isset($_SESSION['userID'])){
        //     $productQuery
        // }

        $productQuery = "SELECT `p`.`ID`,`p`.`name`, `b`.`name` as `manu`, `d`.`description`,`d`.`img_url`,`d`.`ingredients`,`s`.`per_container`,`s`.`size`,`s`.`unit`, `s`.`weight`, `r`.`name`AS `retail` FROM `products` AS `p` 
            LEFT JOIN `details` AS `d`
                ON `d`.`product_id` = `p`.`ID`
            LEFT JOIN `brand` AS `b`
                ON `b`.`ID` = `p`.`ID`
            LEFT JOIN `servings` AS `s`
                ON `s`.`ID` = `p`.`serving_id`
            LEFT JOIN `product_to_retail` AS `p_r`
                ON `p`.`ID` = `p_r`.`product_id`
            LEFT JOIN `retail` AS `r`
                ON `r`.`ID` = `p_r`.`retail_id`
            WHERE `p`.`ID` = $productId";

        //get nutrients
        $nutrientQuery = "SELECT `n`.name,`p_n`.qty FROM `product_to_nutrition` AS `p_n` 
            JOIN `nutrients` AS `n`
                ON `n`.`ID` = `p_n`.`nutrient_id`
            WHERE `p_n`.`product_id`= $productId";


        $result = mysqli_query($conn, $productQuery);
        if(mysqli_num_rows($result)>0){
            $output['data'] = mysqli_fetch_assoc($result);

            $result = mysqli_query($conn, $nutrientQuery);
            if(mysqli_num_rows($result)>0){
                    $output['success'] = true;
                while($row = mysqli_fetch_assoc($result)){
                    $output['data']['nutrients'][$row['name']] = $row['qty'];
                }

            }else{
                $output['error'][] = 'query error 2';
            }

        }else{
            $output['error'][] = 'query error 1';
        }
    }else{
        $output['error']= 'bad query value';
    }
}
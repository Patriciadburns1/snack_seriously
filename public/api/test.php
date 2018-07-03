<?php

header('Access-Control-Allow-Origin: *');

$output = [
    'success' => true,
    'message' => 'API working'
];

print json_encode($output);

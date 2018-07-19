<?php

// Your Access Key ID, as taken from the Your Account page
$access_key_id = "AKIAJB5TA23FPMPS7KAQ";

// Your Secret Key corresponding to the above ID, as taken from the Your Account page
$secret_key = "0fUWCjfhpgINWS87ewKC8H6rGTj0pm/Rm1pk8nbS";

// The region you are interested in
$endpoint = "webservices.amazon.com";

$uri = "/onca/xml";

require_once('products_upc.php');
$UPC = $products[0];

$params = array(
    "Service" => "AWSECommerceService",
    "Operation" => "ItemLookup",
    "AWSAccessKeyId" => "AKIAJB5TA23FPMPS7KAQ",
    "AssociateTag" => "mobilea000317-20",
    "ItemId" => $UPC,
    "IdType" => "UPC",
    "ResponseGroup" => "Images, ItemAttributes, Reviews, ItemIds",
    "SearchIndex" => "Pantry",
    "IncludeReviewsSummary" => "true"
);

// Set current timestamp if not set
if (!isset($params["Timestamp"])) {
    $params["Timestamp"] = gmdate('Y-m-d\TH:i:s\Z');
}

// Sort the parameters by key
ksort($params);

$pairs = array();

foreach ($params as $key => $value) {
    array_push($pairs, rawurlencode($key)."=".rawurlencode($value));
}

// Generate the canonical query
$canonical_query_string = join("&", $pairs);

// Generate the string to be signed
$string_to_sign = "GET\n".$endpoint."\n".$uri."\n".$canonical_query_string;

// Generate the signature required by the Product Advertising API
$signature = base64_encode(hash_hmac("sha256", $string_to_sign, $secret_key, true));

// Generate the signed URL
$request_url = 'http://'.$endpoint.$uri.'?'.$canonical_query_string.'&Signature='.rawurlencode($signature);

//echo "Signed URL: \"".$request_url."\"";
$xmlContent = file_get_contents($request_url);
$parsed_xml = simplexml_load_string($xmlContent); 

print('{"UPC":');
print('"'.$UPC.'"');
print(',"URL":');
print('"'.$parsed_xml->Items->Item->DetailPageURL.'"');
print(',"ASIN":');
print('"'.$parsed_xml->Items->Item->ASIN.'"');
print(',"IMG":');
print('"'.$parsed_xml->Items->Item->LargeImage->URL.'"');
print("},");

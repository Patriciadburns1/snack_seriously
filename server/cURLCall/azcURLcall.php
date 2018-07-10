<?php

// $ch = curl_init();

// curl_setopt($ch, CURLOPT_URL, "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dgrocery&field-keywords=099482453787");
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6");
// curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// print(curl_exec($ch));

// Your Access Key ID, as taken from the Your Account page
$access_key_id = "AKIAJB5TA23FPMPS7KAQ";

// Your Secret Key corresponding to the above ID, as taken from the Your Account page
$secret_key = "0fUWCjfhpgINWS87ewKC8H6rGTj0pm/Rm1pk8nbS";

// The region you are interested in
$endpoint = "webservices.amazon.com";

$uri = "/onca/xml";

$params = array(
    "Service" => "AWSECommerceService",
    "Operation" => "ItemLookup",
    "AWSAccessKeyId" => "AKIAJB5TA23FPMPS7KAQ",
    "AssociateTag" => "mobilea000317-20",
    "ItemId" => "099482435400",
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
//$json = json_encode($parsed_xml);
print('<br>');
print($parsed_xml->Items->Item->DetailPageURL);
print('<br>');
print($parsed_xml->Items->Item->ASIN);
print('<br>');
print($parsed_xml->Items->Item->LargeImage->URL);



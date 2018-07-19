<?php
$txt = file_get_contents("index.txt", true  );

$myfile = fopen("index.txt", "w") or die("unable to open file");

$index = (int)$txt + 1;

fwrite($myfile, $index);
fclose($myfile);

?>
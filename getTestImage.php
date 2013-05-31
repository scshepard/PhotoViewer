<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
require_once('db_fns.php');
require_once('decode.inc');

$self = $_SERVER["PHP_SELF"];
$serve = $_SERVER["SERVER_NAME"];

	$mysqli = db_connect();

	$PostalCodeID = "";
	$HttpName = "";

	$testname = "";
	if (isset($_GET['FileName'])) {
		$testname = $_GET['FileName'];
	}

	//
	//$testname = "/Hobby/Image94135775965367.172.163.21321.jpg";
	$path = "/vservers/mjlj1234/htdocs";
	$new = $path.$testname;
	//$size = filesize($new);
	$exists = "no file";
	if (file_exists($new)) {
		$exists = "file exists";
	}

	$size = filesize($new);
	//$size=55218;
	//$type = 
	//echo "testname : $testname<br />";
	//echo "new : $new<br />";
	//echo "size : $size<br />";

	// examine $new for extension
	$pieces = explode(".",$new);
	$length = count($pieces);
	$choice = $pieces[$length -1];

	//echo "choice : $choice<br />";

	$type = "";
	if ($choice == "html") {
		$type = "i";
	}

	if ($choice == "jpeg" || $choice == "jpg") {
		$type = "image/jpeg";
	}
	
	if ($choice == "flv") {
		$type = "video/x-flv";
	}
	
	if ($choice == "mpg") {
		$type = "video/mpeg";
	}

	if ($choice == "mp4") {
		$type = "video/mp4";
	}
	
	if ($choice == "png") {
		$type = "image/png";
	}
	
	if ($choice == "gif") {
		$type = "image/gif";
	}
	
	if ($choice == "tiff") {
		$type = "image/tiff";
	}

	//echo "type : $type<br />";
	//header("Content-Type: $type");
	//header("Content-length: $size");
	//header("Content-Disposition: attachment; file-name-$new");
	//header("Content-Description:$new $type $size");
//readfile('path/to/myimage.png');	

/*
	//From getSingleImage:
			header("Content-Type: image/jpeg");
			header("Content-length: $Size");
			header("Content-Disposition: attachment; file-name-$choice");
			header("Content-Description: PHP Generated Data");

*/
	header("Content-Type: $type");
	header("Content-length: $size");
	header("Content-Disposition: attachment; file-name-$new");
	//header("Content-Description:$new $type $size");

	header("Content-Description: PHP Generated Data");

	
	$fr = fopen("$choice", 'r');
	while (!feof($fr)) {
		$data = fread($fr, 1024);
		echo $data;
	}

	fclose($fr);


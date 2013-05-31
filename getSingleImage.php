<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
require_once('db_fns.php');
require_once('decode.inc'); 

date_default_timezone_set("America/Los_Angeles");
$today = date('Y-m-d H:i:s');
$tmp = strtotime(date("Y-m-d H:i:s", strtotime($today)) . " +1 year");
$nextyear = date('Y-m-d H:i:s', $tmp);
$swatch = date('B');

$self = $_SERVER["PHP_SELF"];
$serve = $_SERVER["SERVER_NAME"];

	//$mysqli = db_connect();
	$mysqli = db_connect();

	$PostalCodeID = "";
	$HttpName = "";

	$get_gov_sql =
		"
		SELECT DATABASE()
		";

	$get_gov_res = mysqli_query($mysqli, $get_gov_sql) or die(mysqli_error($mysqli));
	$num_rows = mysqli_num_rows($get_gov_res);

	$database = "unk";
	if ($num_rows > 0) {
		$gov_recs = mysqli_fetch_array($get_gov_res);
		$database = $gov_recs[0];
	}

	$PhotoID = 0;
	if (isset($_GET["PhotoID"])) {
		$PhotoID = trim($_GET["PhotoID"]);
	}

	$ID = 0;
	if (isset($_GET["ID"])) {
		$ID = $_GEET["ID"];
	}

	$TableName = "";
	if (isset($_GET['TableName'])) {
		$TableName = $_GET['TableName'];
	}

	$TableID = 0;
	if (isset($_GET['TableID'])) {
		$TableID = $_GET['TableID'];
	}

	if ($TableName == "") {
		echo "TableName is null";
		exit;
	}
	
	if ($PhotoID == "undefined") {
		echo "PhotoID is undefined!";
		exit;
	}

	if ($PhotoID == 0) {
		echo "PhotoID is zero!";
		exit;
	}

	if ($TableID == "") {
		echo "TableID is zero!";
		exit;
	}

	$sel = "";
	$ImageType = "";
	if ($TableName == "HobbyShots") {
		$ImageType = "Hobby";
		$sel = "SELECT ImageName, Size";
	}

	if ($TableName == "Tahoe") {
		$ImageType = "Tahoe";
		$sel = "SELECT ImageName, ImageSize";
	}

	$get_agency_sql = "
		$sel
		FROM ".$TableName."
		WHERE ".$TableID." = '".$PhotoID."'
	";

	$get_agency_res = mysqli_query($mysqli, $get_agency_sql) or die(mysqli_error($mysqli));
	$agency_rows = mysqli_num_rows($get_agency_res);

	if ($agency_rows > 0 ) {
		while ($recs = mysqli_fetch_array($get_agency_res)) {
			$ImageName = urldecode($recs['ImageName']);
			if (isset($recs['Size'])) {
				$Size = $recs['Size'];
			}
			if (isset($recs['ImageSize'])) {
				$Size = $recs['ImageSize'];
			}

			$ImageName = Decode($ImageName);
			
			$pieces = explode("/",$ImageName);
			$length = count($pieces);
			$choice = $pieces[$length -1];
			if ($ImageType == "Hobby") {
				$choice = "/vservers/mjlj1234/htdocs/Hobby/$choice";
			}
			if ($ImageType == "Tahoe") {
				$choice = "/vservers/mjlj1234/htdocs/TahoePix/$choice";
			}

			header("Content-Type: image/jpeg");
			header("Expires: $nextyear GMT");
			header("Content-length: $Size");
			header("Cache-Control: store, cache");
			header("Content-Disposition: attachment; file-name-$choice");
			header("Content-Description: file: $choice, Size: $Size PHP Generated Data");

			$fr = fopen("$choice", 'r');
			while (!feof($fr)) {
				$data = fread($fr, 1024);
				echo $data;
			}

			fclose($fr);
		}
	}

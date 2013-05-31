<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<?php

ini_set("display_errors", 1);
error_reporting(E_ALL);

//require_once('db_locoolly.php');
require_once('db_fns.php');
//require_once('db_fns.php');

$IEflag = 0;
$FireFoxFlag = 0;
$SafariFlag = 0;
$ImageTest = false;
$browser = queryBrowser();
echo "<!-- browser is : $browser -->";

$mysqli = db_connect();

if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	echo "do test case!<br />";
	$ImageTest = true;
}

error_reporting(E_ALL | E_STRICT);

function queryBrowser() {
	$browser = strtolower($_SERVER['HTTP_USER_AGENT']); // what browser they use.

	if(preg_match("/msie 9/", $browser)) {
		//Internet Explorer
		$IEflag = 0;
		$IE9flag = 1;
		$IE8flag = 0;
		$IE7flag = 0;
		return "IE9flag";
		}
	if(preg_match("/msie 8/", $browser)) {
		//Internet Explorer
		$IEflag = 0;
		$IE9flag = 0;
		$IE8flag = 1;
		$IE7flag = 0;
		return "IE8flag";
		}
	if(preg_match("/msie 7/", $browser)) {
		//Internet Explorer
		$IEflag = 0;
		$IE9flag = 0;
		$IE8flag = 0;
		$IE7flag = 1;
		return "IE7flag";
		}
	if (preg_match("/firefox/", $browser)) {
		//Firefox
		$FireFoxFlag = 1;
		return "FireFoxFlag";
	}
	
	if (preg_match("/chrome/", $browser)) {
		//Safari
		$ChromeFlag = 1;
		return "ChromeFlag";
	} else if (preg_match("/safari/", $browser)) {
		//Chrome
		$SafariFlag = 1;
		return "SafariFlag";
	}
	
	if (preg_match("/opera/", $browser)) {
		//Opera
		$OperaFlag = 1;
		return "OperaFlag";
	}

}

?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Shepard Family Thanksgiving Tahoe 2009</title>
<style type="text/css">
<!--

a:link {
	text-decoration: none;
	color: #FFFFFF;
}
a:visited {
	text-decoration: none;
	color: #FFFFFF;
}
a:hover {
	text-decoration: none;
	color: #C6B28E;
}
a:active {
	text-decoration: none;
	color: #000;
	font-size: 14px;
}
#photo1 {
	position: inherit;
	text-align: center;
	left: 160px;
	top: 40px;
}
body {
	position: relative;
	background-color: turquoise;
	width: 600px;
	max-width: 800px;
	height: 1200px;
	background-image: url(rubicon-topo.jpg);
	background-repeat: no-repeat;
}
</style>

<script type="text/javascript" src="locoollyMinimal.js"></script>
<script type="text/javascript" src="Gallery.js"> /*NEW Module Pattern-based*/</script>
<script type="text/javascript" src="galleryClass.js"> /*NEW prototype-based gallery class*/</script>

<script language = "JavaScript">

var Locoolly = new LocoollyMinimal();
Locoolly.setDebug(false);

function init()
{

	/*
		Firefox: Netscape, 5.0
		IE: Microsoft Internet Explorer, 4.0
		Safari: Netscape, 5.0
	*/

	//Locoolly.phototable = "Tahoe";
	//Locoolly.photoidname = "TahoeID";
	//Locoolly.photoid = 0;

	/*
		setGridSize sets the private property "gridsize" which is the number
		of images visable on the screen
	*/
	galleryModule.setGridSize(1);
	galleryModule.setTransitions(true);
	
	Locoolly.imagexfer = 0;

	Browser = navigator.appName;
	BrowserVersion = navigator.appVersion;
}

</script>
</head>
<body onload="init()">
<?php
/*
	Opens table number 1
*/

	if ($ImageTest) {
		$table = "galleryModule.phototable = 'Locoolly';";
		$name = "galleryModule.photoidname = 'LocoollyID';";
		$init = "transferInit();";
	} else {
		$table = "galleryModule.phototable = 'Tahoe';";
		$name = "galleryModule.photoidname = 'TahoeID';";
		$init = "transferInit();";
	}

	
	$id = "galleryModule.photoid = 0;";
	// argument for setFade is the Miliseconds to fade in and out
	$fade = "galleryModule.setFade(1000);";
	// argument for setDisplay is the seconds to display each image
	$display = "galleryModule.setDisplay(5);"
	?>
	<script>
	<?php echo $table; ?>;
	<?php echo $init; ?>;
	<?php echo $name; ?>;
	<?php echo $id; ?>;
	<?php echo $fade ?>;
	<?php echo $display ?>;
	
	galleryModule.init();
	</script>

	<?php
	if ($ImageTest) {

		$photo = "<img id='photo1' name='photo1' height = '400' width = '400' alt='' src = '' />";
		echo $photo;

		?>
		<script>
		/*
			transferImages just starts the first one; the readonstatechange routine will
			call transferImages again directly
			Assume the zeroth (first) needs to be transfered; gotta start somewhere1
		*/

		galleryModule.setGridSize(1);
		galleryModule.initTest();

		//transferImages();
		galleryModule.loadImages();
		galleryModule.transitionImages();
	</script>
	<?php
	} else {
/*
	Select the Random Image to display; add all HTML elements for the Banner Ad Image in Table 3
*/
	$get_image_sql = "
		SELECT TahoeID, Subjects, Location, Photographer, GroupName, FileName, HttpName, GroupName
		FROM Tahoe
		ORDER BY RAND()
		LIMIT 1
		";

	$get_image_res = mysqli_query($mysqli, $get_image_sql) or die(mysqli_error($mysqli));
	$num_image_rows = mysqli_num_rows($get_image_res);

	if ($num_image_rows > 0 ) {
		$image_info = mysqli_fetch_array($get_image_res);
		$TahoeID = $image_info['TahoeID'];
		$GroupName = $image_info['GroupName'];
		$Photographer = $image_info['Photographer'];
		$Subjects = $image_info['Subjects'];
		$Location = $image_info['Location'];
		$FileName = $image_info['FileName'];
		$HttpName = $image_info['HttpName'];
		$HttpName = str_replace("youremailnetwork.com","locoolly.com", $HttpName, $num);
		
		if ($GroupName == "") {
			$GroupName = "None";
		}

		$AltInfo = "Photographer: $Photographer, Subjects: $Subjects, Location: $Location, Group Name: $GroupName, Image ID: $TahoeID";
		$AltInfo = urlencode($AltInfo);
		
		$photo = "<img id='photo1' name='photo1' height = '400' width = '400' alt='$AltInfo' src = '$HttpName' />";
		echo $photo;

		$gal = "galleryModule.addImage('$HttpName','$AltInfo', false, $TahoeID);";
		?>
		<script>
		<?php echo $gal ?>
		</script>
		<?php
	}
	//echo "<!-- TahoeID :  -->";
	$get_ad_sql = "
		SELECT TahoeID, Subjects, Location, Photographer, FileName, HttpName, GroupName
		FROM Tahoe
		ORDER BY RAND()
		LIMIT 40
		";
	//echo "<!-- $get_ad_sql -->";
	$get_ad_res = mysqli_query($mysqli, $get_ad_sql) or die(mysqli_error($mysqli));
	$num_ad_rows = mysqli_num_rows($get_ad_res);

	if ($num_ad_rows > 0) {

		$index = 0;
		for ($i = 0; $i < $num_ad_rows; $i++ ) {
			//$display_block .="<p>PostalCode, num_postalcode_rows: $PostalCode, $num_postalcode_rows</p>";	
			$image_info = mysqli_fetch_array($get_ad_res);
			$TahoeID = $image_info['TahoeID'];
			$GroupName = $image_info['GroupName'];
			$Photographer = $image_info['Photographer'];
			$Subjects = $image_info['Subjects'];
			$Location = $image_info['Location'];
			$FileName = $image_info['FileName'];
			$HttpName = $image_info['HttpName'];
			$HttpName = str_replace("youremailnetwork.com","locoolly.com", $HttpName, $num);

			if ($GroupName == "") {
				$GroupName = "None";
			}
			$AltInfo = "Photographer: $Photographer, Subjects: $Subjects, Location: $Location, Group Name: $GroupName, Image ID: $TahoeID";
			$AltInfo = addslashes($AltInfo);
			
			$gal = "galleryModule.addImage('$HttpName','$AltInfo', false, $TahoeID)";
			?>
			<script>
			<?php echo $gal ?>
			</script>
			<?php
		}
	}
	?>
	<script>
		/*
			transferImages just starts the first one; the readonstatechange routine will
			call transferImages again directly
			Assume the zeroth (first) needs to be transfered; gotta start somewhere1
		*/
		transferImages(0);
	</script>
	<?php
	}
	?>
</body>

function GalleryNames() {

	this.setTestFile = function(testfile) {
		if (typeof testfile === 'undefined') {
			var testfile = "";
		}
		
		this.testfile = testfile;
	}
	this.getTestFile = function() {
		return this.testfile;
	}
	this.setAvailable = function(available) {
		if (typeof available === 'undefined')
			var available = false;
		
		this.available = available;
	}

	this.getAvailable = function() {
		return this.available;
	}

	this.setPostalCode = function(postalcode) {
		if (typeof postalcode == 'undefined') {
			var postalcode = "";
		}
		trimSpaces(postalcode);
		this.postalcode = postalcode;
	} ;

	this.setPostalCodeID = function(postalcodeid) {
		if (typeof postalcodeid == 'undefined') {
			var postalcodeid = "";
		}

		this.postalcodeid = postalcodeid;
	} ;

	this.setHobbyShotsID = function(hobbyshotsid) {
		if (typeof hobbyshotsid === 'undefined') {
			var hobbyshotsid = 0;
		}

		this.hobbyshotsid = hobbyshotsid;
	}

	this.setFileName = function(filename) {
		if (typeof filename === 'undefined') {
			var filename = "";
		};

		this.filename = filename;
	}

	this.setImageName = function(imagename) {
		if (typeof imagename == 'undefined') {
			var imagename = "";
		}
		//alert("setURL, imagename: " + imagename);

		trimSpaces(imagename);
		//imagename = escape(imagename);
		//imagename = unescape(imagename);
		imagename = imagename.replace(/\%2B/g,"+");
		imagename = imagename.replace(/\%2F/g,"/");
		imagename = imagename.replace(/\+/g," ");
		imagename = imagename.replace(/\\/i,"");
		imagename = imagename.replace(/\%2C/g,",");
		imagename = imagename.replace(/\%26/g,"&");
		imagename = imagename.replace(/\%27/g,"'");
		imagename = imagename.replace(/\%28/g,"(");
		imagename = imagename.replace(/\%29/g,")");
		imagename = encodeURI(imagename);
		this.imagename = imagename;
	} ;

	this.setPhotoDescription = function(photodescription) {
		if (typeof photodescription == 'undefined') {
			var photodescription = "";
		}

		trimSpaces(photodescription);
		sethttp = photodescription;
		sethttp = sethttp.replace(/\%25/g,"%");
		sethttp = sethttp.replace(/\%20/g," ");
		sethttp = sethttp.replace(/\%23/g,"#");
		sethttp = sethttp.replace(/\%26/g,"&");
		sethttp = sethttp.replace(/\%27/g,"'");
		sethttp = sethttp.replace(/\%29/g,")");
		sethttp = sethttp.replace(/\%2C/g,",");
		sethttp = sethttp.replace(/\%2F/g,"/");
		sethttp = sethttp.replace(/\+/g," ");
		sethttp = sethttp.replace(/\%40/g,"@");
		htttpname = encodeURI(photodescription);
		this.photodescription = photodescription;
	} ;

	this.getPhotoDescription = function() {
		var photodescription;
		photodescription = this.photodescription;
		photodescription = decodeURI(photodescription);
		photodescription = photodescription.replace(/\%2B/g,"+");
		photodescription = photodescription.replace(/\%2F/g,"/");
		photodescription = photodescription.replace(/\+/g," ");
		photodescription = photodescription.replace(/\\/i,"");
		photodescription = photodescription.replace(/\%2C/g,",");
		photodescription = photodescription.replace(/\%26/g,"&");
		photodescription = photodescription.replace(/\%27/g,"'");
		photodescription = photodescription.replace(/\%28/g,"(");
		photodescription = photodescription.replace(/\%29/g,")");
		photodescription = photodescription.replace(/\%3A/g,":");

		return photodescription;
	} ;
	
	this.getFileName = function() {
		var filename;
		filename = this.filename;
		filename = decodeURI(filename);
		filename = filename.replace(/\%2B/g,"+");
		filename = filename.replace(/\%2F/g,"/");
		filename = filename.replace(/\+/g," ");
		filename = filename.replace(/\\/i,"");
		filename = filename.replace(/\%2C/g,",");
		filename = filename.replace(/\%26/g,"&");
		filename = filename.replace(/\%27/g,"'");
		filename = filename.replace(/\%28/g,"(");
		filename = filename.replace(/\%29/g,")");
		filename = filename.replace(/\%3A/g,":");

		return filename;
	} ;

	this.getImageName = function() {
		var imagename;
		imagename = this.imagename;
		imagename = decodeURI(imagename);
		imagename = imagename.replace(/\%2B/g,"+");
		imagename = imagename.replace(/\%2F/g,"/");
		imagename = imagename.replace(/\+/g," ");
		imagename = imagename.replace(/\\/i,"");
		imagename = imagename.replace(/\%2C/g,",");
		imagename = imagename.replace(/\%26/g,"&");
		imagename = imagename.replace(/\%27/g,"'");
		imagename = imagename.replace(/\%28/g,"(");
		imagename = imagename.replace(/\%29/g,")");
		imagename = imagename.replace(/\%3A/g,":");

		return imagename;
	} ;

	this.getHobbyShotsID = function() {
		return this.hobbyshotsid;
	}

	this.getPostalCode = function() {
		return this.postalcode;
	} ;

	this.getPostalCodeID = function() {
		//alert("getPostalCodeID : " + this.postalcodeid);
		return this.postalcodeid;
	} ;

}
function processImage() {
	var str;
	var tempDiv;
	var TransferXML;
	TransferXML = galleryModule.TransferXML;

	if (TransferXML.readyState == 4) {

		if (TransferXML.status == 404) {
			console.log("responseText, 404 : " + TransferXML.responseText);
			return false;
		}


		if (TransferXML.status == 200) {
			if (document.getElementById) {

				/*
					find the first non-available image
				*/

				galleryModule.imagexfer++;
				PhotoID = galleryModule.photoid;
				photoidname = galleryModule.photoidname;
				phototable = galleryModule.phototable;
				//console.log("processImage, processing id of " + PhotoID);
				galleryModule.photoid = 0;
		
				if (PhotoID > 0) {
					//console.log("setting markAvailable, PhotoID : " + PhotoID);
					galleryModule.markAvailable(PhotoID);
				}
		
				//console.log("calling getFirstAvailable");
				var next = galleryModule.getFirstAvailable();
				//console.log("processImage, next : " + next);
				//xyzzy put check here: has this id already been entered???

				if (galleryModule.breakOut++ > 50) {
					alert("breakOut!");
					return false;
				}

				if (galleryModule.getTransitions()) {
					//console.log("galleryModule.imagexfer : " + galleryModule.imagexfer);
					if (galleryModule.imagexfer == 3) {
						//alert("setting off!");
						galleryModule.transitionImages();;
					}
				}

				if (next > 0) {
					;
					transferImages(next);
				}

				/*
					Are there anymore??
				*/
				if (next < 0) {
					if (galleryModule.getTransitions()) {
						//alert("transitionImages");
						;
						//galleryModule.transitionImages();
					} else {
						//alert("loadImages!");
						galleryModule.loadImages();
					}
				}
			}
		}
	}
}

function transferInit() {
	galleryModule.breakOut = 0;
	galleryModule.imagexfer = 0;
	galleryModule.getsinglecount = 0;
}

function transferImages(next) {
	var max;

	var TransferXML;
	TransferXML = galleryModule.TransferXML;
	
	//console.log("transferImages, next : " + next);
	//alert("transferImages");
	/*
		From fitness.php (Thur 31 Jan 2013)
		$table = "galleryModule.phototable = 'HobbyShots';";
		$name = "galleryModule.photoidname = 'HobbyShotsID';";
		$id = "galleryModule.photoid = 0;";
	*/
	max = galleryModule.imageCount();
	//console.log("transferImages, max : " + max);
	//console.log("transferImages, next : " + next);

	var ImageName = galleryModule.getImageName(next);
	//console.log("ImageName : " + ImageName);

	var PhotoID = galleryModule.getImageID(next);

	//console.log("ImageID: " + PhotoID);

	if (Locoolly.getDebug())
		traceLocoolly("transerImages, setting request for " + ImageName + " PhotoID : " + PhotoID);

	var popups;

	galleryModule.photoid = PhotoID

	var name = galleryModule.photoidname;
	var tablename = galleryModule.phototable;
	var idname = galleryModule.photoidname

	/*
		31May2013, yes, we get here!
	*/
	galleryModule.getsinglecount++;
	//console.log("calling getSingleImage, count is : " + Locoolly.getsinglecount);
	var url="getSingleImage.php";
	url += "?TableName="+tablename;
	url += "&TableID="+idname;
	url += "&PhotoID="+PhotoID;
	url += "&sid="+Math.random();

	if (Locoolly.getDebug())
		traceLocoolly("getImages.php : " + url);

	//galleryModule.phototable = "HobbyShots";
	//galleryModule.photoidname = "PhotoID";
	galleryModule.photoid = PhotoID;
	galleryModule.phototable = galleryModule.phototable;
	galleryModule.photoidname = galleryModule.photoidname;
	TransferXML.onreadystatechange = processImage;
	TransferXML.open("GET",url,true);
	TransferXML.send(null);
}

function requestTestImage() {
	alert("requestTestImage!");
	/*
	SELECT HS.PhotoDescription, HS.ImageName, P.PostalCode
		FROM HobbyShots HS
		LEFT OUTER JOIN PostalCode P
		ON HS.PostalCodeID = P.PostalCodeID
		WHERE PostalCode = '".$PostalCode."'
		AND Vetted = '1'
		AND Archive = '0'
		AND MasterTableID = '".$MasterTableID."'
		ORDER BY HS.DateCreated, PhotoDescription
		LIMIT 35
	*/
	var testname = galleryModule.testname;
	if (Locoolly.getDebug())
		traceLocoolly("requestTestImage, setting up... testname : " + testname);

	//ImagesXML = GetXmlHttpObject();
	var popups;

	var url="getTestImage.php";
	url += "?FileName="+testname;
	url += "&sid=1";
	//console.log("url: getting actual testimage! " + url);
}

/*
	CRITICAL CRITICAL CRITICAL!
	This stupid dummy function is required for certain browsers when doing a blocking AJAX!
*/
function dummy() {
	;
}

function GetXmlHttpObject()
{
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		return new XMLHttpRequest();
	}
	if (window.ActiveXObject)
	{
		// code for IE6, IE5
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}

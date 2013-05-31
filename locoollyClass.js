//define Human class
function MasterClass() {
	this.setDummy = function(dummy) {
		this.dummy = dummy;
	} ;
}

function Human() {
	this.setName = function(fname, mname, lname) {
		//alert("Doing the human setname!, fname : " + fname);
		if (typeof fname == 'undefined') {
			var fname = "";
		}

		if (typeof mname == 'undefined') {
			var mname = "";
		}

		if (typeof lname == 'undefined') {
			var lname = "";
		}

		if (fname == "")
			fname="1";
		if (mname == "")
			mname = "1";
		if (lname == "")
			lname = "1";

		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
	} ;
	
	this.getFullName = function() {
		return this.fname + " " + this.mname + " " + this.lname;
	} ;
}

// define DisplayAd; what the javascript side sees from the result of a biz search
function WebNames() {
	
	this.setNameOfLink = function(nameoflink) {
		if (typeof nameoflink == 'undefined') {
			var nameoflink = "";
		}
		
		trimSpaces(nameoflink);
		this.nameoflink = encodeURI(nameoflink);
	} ;

	this.setDateModified = function(datemodified) {
		if (typeof datemodified == 'undefined') {
			var datemodified = "";
		}
		
		this.datemodified = trimSpaces(datemodified);
	} ;

	this.setLatitude = function(latitude) {
		if (typeof latitude == 'undefined') {
			var latitude = "";
		}
		this.latitude = trimSpaces(latitude);
	} ;

	this.setLongitude = function(longitude) {
		if (typeof longitude == 'undefined') {
			var longitude = "";
		}
		this.longitude = trimSpaces(longitude);
	} ;
	
	this.setPostalCode = function(postalcode) {
		if (typeof postalcode == 'undefined') {
			var postalcode = "";
		}
		trimSpaces(postalcode);
		this.postalcode = postalcode;
	} ;
	
	this.setWebLinkID = function(urlid) {
		if (typeof urlid == 'undefined') {
			var urlid = "";
		}
		this.urlid = urlid;
	} ;
	
	this.setURL = function(url) {
		if (typeof url == 'undefined') {
			var url = "";
		}
		//alert("setURL, url: " + url);

		trimSpaces(url);
		//url = escape(url);
		//url = unescape(url);
		url = url.replace(/\%2B/g,"+");
		url = url.replace(/\%2F/g,"/");
		url = url.replace(/\+/g," ");
		url = url.replace(/\\/i,"");
		url = url.replace(/\%2C/g,",");
		url = url.replace(/\%26/g,"&");
		url = url.replace(/\%27/g,"'");
		url = url.replace(/\%28/g,"(");
		url = url.replace(/\%29/g,")");
		url = encodeURI(url);
		this.url = url;
	} ;

	this.setSearchWordsID = function(searchwordsid) {
		if (typeof searchwordsid == 'undefined') {
			var searchwordsid = "";
		}
		
		this.searchwordsid = searchwordsid;
	} ;
	
	this.getSearchWordsID = function() {
		return this.searchwordsid;
	} ;
	
	this.setPostalCodeID = function(postalcodeid) {
		if (typeof postalcodeid == 'undefined') {
			var postalcodeid = "";
		}
		this.postalcodeid = postalcodeid;
	} ;

	this.getPostalCodeID = function() {
		return this.postalcodeid;
	} ;
	
	this.setHttpName = function(httpname) {
		if (typeof httpname == 'undefined') {
			var httpname = "";
		}

		trimSpaces(httpname);
		sethttp = httpname;
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
		htttpname = encodeURI(httpname);
		this.httpname = httpname;
	} ;
	
	this.setAlternateName = function(alternatename) {
		if (typeof alternatename == 'undefined') {
			var alternatename = "";
		}

		trimSpaces(alternatename);
		alternatename = escape(alternatename);
		alternatename = unescape(alternatename);
		alternatename = alternatename.replace(/\%2B/g,"+");
		alternatename = alternatename.replace(/\%2F/g,"/");
		alternatename = alternatename.replace(/\+/g," ");
		alternatename = alternatename.replace(/\\/i,"");
		alternatename = alternatename.replace(/\%2C/g,",");
		alternatename = alternatename.replace(/\%26/g,"&");
		alternatename = alternatename.replace(/\%27/g,"'");
		alternatename = alternatename.replace(/\%28/g,"(");
		alternatename = alternatename.replace(/\%29/g,")");
		//alternatename = encodeURI(alternatename);
		this.alternatename = alternatename;
	} ;

	this.setLaunchWindow = function(URL) {
		if (typeof URL == 'undefined') {
			var URL = "";
		}

		var prefix = "http://";

		if (URL.search(prefix) != -1) {
			//alert("Trim me! (hum): " + res);
			URL = URL.substring(prefix.length);
		}
			
		URL = prefix + URL;
		var winRef = window.open( URL );
	} ;
	
	this.getNameOfLink = function() {
		var nameoflink;
		nameoflink = this.nameoflink;
		nameoflink = decodeURI(nameoflink);
		nameoflink = nameoflink.replace(/\%2B/g,"+");
		nameoflink = nameoflink.replace(/\%2F/g,"/");
		nameoflink = nameoflink.replace(/\+/g," ");
		nameoflink = nameoflink.replace(/\\/i,"");
		nameoflink = nameoflink.replace(/\%2C/g,",");
		nameoflink = nameoflink.replace(/\%26/g,"&");
		nameoflink = nameoflink.replace(/\%27/g,"'");
		nameoflink = nameoflink.replace(/\%28/g,"(");
		nameoflink = nameoflink.replace(/\%29/g,")");

		return nameoflink;
	} ;
	
	this.getDateModified = function() {
		return this.datemodified;
	}
	
	this.getURL = function() {
		var url;
		url = decodeURI(this.url);
		//alert("getURL , url : " + url);
		url = url.replace(/\%2B/g,"+");
		url = url.replace(/\%2F/g,"/");
		url = url.replace(/\+/g," ");
		//url = url.replace(/\{2}\/g," ");
		url = url.replace(/\\/i,"");
		url = url.replace(/\%2C/g,",");
		url = url.replace(/\%26/g,"&");
		url = url.replace(/\%27/g,"'");
		url = url.replace(/\%28/g,"(");
		url = url.replace(/\%29/g,")");
		return url;
	};

	this.getPostalCode = function() {
		return this.postalcode;
	}

	// WARNING: RETURNS NON-URL SAFE VALUES!
	this.getRawURL = function() {
		return this.url;
	}
	
	this.getPostalCodeID = function() {
		//alert("getPostalCodeID : " + this.postalcodeid);
		return this.postalcodeid;
	}
	
	/*
		URGENT! This is used by Demo.php and the new SearchResults.php!
		Previous version had only decodeURI!
	*/
	this.getHttpName = function() {
		//alert("In WebNames getHttpName!");
		var httpname = this.httpname;
		httpname = decodeURI(httpname);
		httpname = httpname.replace(/\%3A/g,":");
		httpname = httpname.replace(/\%2F/g,"/");
		return httpname;
	} ;

	this.getWebLinkID = function() {
		return this.urlid;
	} ;
	

	this.getAlternateName = function() {
		var alternatename = this.alternatename;
		//alternatename = decodeURI(this.alternatename);
		alternatename = alternatename.replace(/\%2B/g,"+");
		alternatename = alternatename.replace(/\%2F/g,"/");
		alternatename = alternatename.replace(/\+/g," ");
		//alternatename = alternatename.replace(/\{2}\/g," ");
		alternatename = alternatename.replace(/\\/i,"");
		alternatename = alternatename.replace(/\%2C/g,",");
		alternatename = alternatename.replace(/\%26/g,"&");
		alternatename = alternatename.replace(/\%27/g,"'");
		alternatename = alternatename.replace(/\%28/g,"(");
		alternatename = alternatename.replace(/\%29/g,")");
		return alternatename;
	} ;
	
	this.getLatitude = function() {
		return this.latitude;
	} ;
	
	this.getLongitude = function() {
		return this.longitude;
	} ;
	
	this.toString = function() {
		return this.latitude + " " + this.longitude;
	} ;
	

	this.debug = function() {
		var lat = "";
		var lon = "";
		var url = "";
		var weblinkid = "";

		var alternatename = "";
		var string = "";

		if ((lat = this.getLatitude()) === "undefined") {
			lat = "Not Set";
		}
		
		if ((lon = this.getLongitude()) === "undefined") {
			lon = "Not Set";
		}
		
		if ((url = this.getURL()) === "undefined") {
			url = "Not Set";
		}
		
		if ((weblinkid = this.getWebLinkID()) === "undefined") {
			weblinkid = "Not Set";
		}

		if ((alternatename = this.getAlternateName()) === "undefined") {
			alternatename = "Not Set";
		}
		
		string = "Latitude : " + lat + " Longitude : " + lon + " URL : " + url + " WebLinkID : " + weblinkid + " CityName : " ;
		string +=  " AlternateName : " + alternatename;

		return string;
	} ;
}
function ClientClass() {
	this.setPostalCodeCityName = function(postalcodecityname) {
		if (typeof postalcodecityname == 'undefined') {
			var postalcodecityname = "";
		}
		
		this.postalcodecityname = postalcodecityname;
	} ;
	
	this.setPostalCodeCountyName = function(postalcodecountyname) {
		if (typeof postalcodecountyname == 'undefined') {
			var postalcodecountyname = "";;
		};
		
		this.postalcodecountyname = postalcodecountyname; 
	} ;
	this.setTier = function(tier) {
		if (typeof tier == 'undefined') {
			var tier = "";
		}
		this.tier = tier;
	} ;
	
	this.setPostalCodeLatitude = function(postalcodelatitude) {
		if (typeof postalcodelatitude == 'undefined') {
			var postalcodelatitude = 0;
		}
		
		this.postalcodelatitude = postalcodelatitude;
	} ;
	
	this.setPostalCodeLongitude = function(postalcodelongitude) {
		if (typeof postalcodelongitude == 'undefined') {
			var postalcodelongitude = 0;
		}
		
		this.postalcodelongitude = postalcodelongitude;
	}

	this.setFaxAreaCode = function(faxareacode) {
		if (typeof faxareacode == "undefined")
			var faxareacode = "";

		this.faxareacode = trimSpaces(faxareacode);
	} ;

	this.setClientEmail = function(clientemail) {
		if (typeof clientemail == 'undefined')
			var clientemail = "";

		trimSpaces(clientemail);
		this.clientemail = encodeURI(clientemail);
	} ;

	this.setFaxPhone = function(faxphone) {
		if (typeof faxphone == "undefined")
			var faxphone = "";

		this.faxphone = trimSpaces(faxphone);
	} ;
	
	this.setClientContact = function(clientcontact) {
		if (typeof clientcontact == 'undefined') {
			var clientcontact = "";
		}
		
		trimSpaces(clientcontact);
		this.clientcontact = encodeURI(clientcontact);
	}
	this.setNameOfLink = function(nameoflink) {
		if (typeof nameoflink == 'undefined') {
			var nameoflink = "";
		}
		
		trimSpaces(nameoflink);
		this.nameoflink = encodeURI(nameoflink);
	} ;

	this.setDateModified = function(datemodified) {
		if (typeof datemodified == 'undefined') {
			var datemodified = "";
		}
		
		this.datemodified = trimSpaces(datemodified);
	} ;

	this.setClientName = function(clientname) {
		if (typeof clientname == 'undefined') {
			var clientname = "";
		}
		
		trimSpaces(clientname);
		clientname = clientname.replace(/\%25/g,"%");
		clientname = clientname.replace(/\%20/g," ");
		clientname = clientname.replace(/\%23/g,"#");
		clientname = clientname.replace(/\%26/g,"&");
		clientname = clientname.replace(/\%27/g,"'");
		clientname = clientname.replace(/\%29/g,")");
		clientname = clientname.replace(/\%2C/g,",");
		clientname = clientname.replace(/\%2F/g,"/");
		clientname = clientname.replace(/\+/g," ");
		clientname = clientname.replace(/\%40/g,"@");

		this.clientname = encodeURI(clientname);
	}
	this.setLatitude = function(latitude) {
		if (typeof latitude == 'undefined') {
			var latitude = "";
		}
		this.latitude = trimSpaces(latitude);
	} ;

	this.setLongitude = function(longitude) {
		if (typeof longitude == 'undefined') {
			var longitude = "";
		}
		this.longitude = trimSpaces(longitude);
	} ;
	
	this.setSelectType = function(select) {
		if (typeof select == 'undefined') {
			var select;
		}
		this.select = trimSpaces(select);
	}
	
	this.getSelectType = function() {
		return this.select;
	}
	
	this.getPostalCodeLatitude = function() {
		return this.postalcodelatitude;
	} ;
	
	this.getPostalCodeLongitude = function() {
		return this.postalcodelongitude;
	} ;
	
	this.setCityAreaCode = function(cityareacode) {
		if (typeof cityareacode == 'undefined') {
			var cityareacode;
		}
		this.cityareacode = trimSpaces(cityareacode);
	}
	
	this.setCityPhone = function(cityphone) {
		if (typeof cityphone == 'undefined') {
			var cityphone;
		}
		this.cityphone = trimSpaces(cityphone);
	}
	this.setPostalCodeID = function(postalcodeid) {
		if (typeof postalcodeid == 'undefined') {
			var postalcodeid = 0;
		}
		//alert("setPostalCodeID : " + postalcodeid);
		this.postalcodeid = trimSpaces(postalcodeid);
	}
	
	this.setCityName = function(homecity) {
		if (typeof homecity == 'undefined') {
			var homecity = "";
		}

		trimSpaces(homecity);
		homecity = homecity.replace(/\%25/g,"%");
		homecity = homecity.replace(/\%20/g," ");
		homecity = homecity.replace(/\%26/g,"&");
		homecity = homecity.replace(/\%23/g,"#");
		homecity = homecity.replace(/\%27/g,"'");
		homecity = homecity.replace(/\%29/g,")");
		homecity = homecity.replace(/\%2C/g,",");
		homecity = homecity.replace(/\%2F/g,"/");
		homecity = homecity.replace(/\+/g," ");
		homecity = encodeURI(homecity);
		//alert("WebNames, CityNames set to : " + homecity);
		this.homecity = homecity;
	} ;
	
	this.setClientAddress = function(addr) {
		if (typeof addr == 'undefined') {
			var addr = "";
		}
		
		trimSpaces(addr);
		addr = addr.replace(/\%25/g,"%");
		addr = addr.replace(/\%20/g," ");
		addr = addr.replace(/\%23/g,"#");
		addr = addr.replace(/\%26/g,"&");
		addr = addr.replace(/\%27/g,"'");
		addr = addr.replace(/\%29/g,")");
		addr = addr.replace(/\%2C/g,",");
		addr = addr.replace(/\%2F/g,"/");
		addr = addr.replace(/\+/g," ");
		addr = addr.replace(/\%40/g,"@");
		addr = encodeURI(addr);
		this.addr = addr;
	} ;
	
	this.setClientMailing = function(mailing) {
		if (typeof mailing == 'undefined') {
			var mailing = "";
		}

		trimSpaces(mailing);
		mailing = mailing.replace(/\%25/g,"%");
		mailing = mailing.replace(/\%20/g," ");
		mailing = mailing.replace(/\%23/g,"#");
		mailing = mailing.replace(/\%26/g,"&");
		mailing = mailing.replace(/\%27/g,"'");
		mailing = mailing.replace(/\%29/g,")");
		mailing = mailing.replace(/\%2C/g,",");
		mailing = mailing.replace(/\%2F/g,"/");
		mailing = mailing.replace(/\+/g," ");
		mailing = mailing.replace(/\%40/g,"@");

		mailing = encodeURI(mailing);
		this.mailing = mailing;
	} ;
	
	this.setCityID = function(cityid) {
		if (typeof cityid == 'undefined') {
			var cityid = "";
		}
		this.cityid = cityid;
	} ;
	
	this.setCountyID = function(countyid) {
		if (typeof countyid == 'undefined') {
			var countyid = "";
		}
		this.countyid = countyid;
	} ;
	
	this.setStateID = function(stateid) {
		if (typeof stateid == 'undefined') {
			var stateid = "";
		}
		this.stateid = stateid;
	}

	this.setCountyName = function(homecounty) {
		if (typeof homecounty == 'undefined') {
			var homecounty = "";
		}
		trimSpaces(homecounty);
		homecounty = encodeURI(homecounty);
		this.homecounty = homecounty;
	} ;
	
	this.setPostalCode = function(postalcode) {
		if (typeof postalcode == 'undefined') {
			var postalcode = "";
		}
		trimSpaces(postalcode);
		this.postalcode = postalcode;
	} ;
	
	this.setStateName = function(homestate) {
		if (typeof homestate == 'undefined') {
			var homestate = "";
		}
		trimSpaces(homestate);
		this.homestate = homestate;
	} ;
	
	this.setStateAbbreviation = function(stateabbreviation) {
		if (typeof stateabbreviation == 'undefined') {
			var stateabbreviation = "";
		}
		this.stateabbreviation = stateabbreviation;
	} ;
	
	this.setWebLinkID = function(urlid) {
		if (typeof urlid == 'undefined') {
			var urlid = "";
		}
		this.urlid = urlid;
	} ;
	
	this.setSearchWordsID = function(searchwordsid) {
		if (typeof searchwordsid == 'undefined') {
			var searchwordsid = "";
		}
		this.searchwordsid = searchwordsid;
	} ;
	
	this.setURL = function(url) {
		if (typeof url == 'undefined') {
			var url = "";
		}
		
		trimSpaces(url);
		//url = escape(url);
		//url = unescape(url);
		url = url.replace(/\%25/g,"%");
		url = url.replace(/\%2B/g,"+");
		url = url.replace(/\%2F/g,"/");
		url = url.replace(/\+/g," ");
		url = url.replace(/\\/i,"");
		url = url.replace(/\%2C/g,",");
		url = url.replace(/\%26/g,"&");
		url = url.replace(/\%26/g,"&");
		url = url.replace(/\%27/g,"'");
		url = url.replace(/\%28/g,"(");
		url = url.replace(/\%29/g,")");
		//alert("setURL Before encodeURI : " + url);
		url = encodeURI(url);
		this.url = url;
	} ;

	
	this.setHttpName = function(httpname) {
		if (typeof httpname == 'undefined') {
			var httpname = "";
		}

		trimSpaces(httpname);
		htttpname = encodeURI(httpname);
		this.httpname = httpname;
	} ;
	
	this.setClientName = function(clientname) {
		if (typeof clientname == 'undefined') {
			var clientname = "";
		}

		trimSpaces(clientname);
		clientname = escape(clientname);
		clientname = unescape(clientname);
		clientname = clientname.replace(/\%25/g,"%");
		clientname = clientname.replace(/\%20/g," ");
		clientname = clientname.replace(/\%23/g,"#");
		clientname = clientname.replace(/\%26/g,"&");
		clientname = clientname.replace(/\%27/g,"'");
		clientname = clientname.replace(/\%29/g,")");
		clientname = clientname.replace(/\%2C/g,",");
		clientname = clientname.replace(/\%2F/g,"/");
		clientname = clientname.replace(/\+/g," ");
		//clientname = clientname.replace(/\%40/g,"@");

		clientname = encodeURI(clientname);
		this.clientname = clientname;
	} ;
	
	this.setClientID = function(clientid) {
		if (typeof clientid == 'undefined') {
			var clientid = "";
		}
		
		this.clientid = clientid;
	} ;
	
	this.setAlternateName = function(alternatename) {
		if (typeof alternatename == 'undefined') {
			var alternatename = "";
		}

		trimSpaces(alternatename);
		alternatename = escape(alternatename);
		alternatename = unescape(alternatename);
		alternatename = alternatename.replace(/\%2B/g,"+");
		alternatename = alternatename.replace(/\%2F/g,"/");
		alternatename = alternatename.replace(/\+/g," ");
		alternatename = alternatename.replace(/\\/i,"");
		alternatename = alternatename.replace(/\%2C/g,",");
		alternatename = alternatename.replace(/\%26/g,"&");
		alternatename = alternatename.replace(/\%27/g,"'");
		alternatename = alternatename.replace(/\%28/g,"(");
		alternatename = alternatename.replace(/\%29/g,")");
		//alternatename = encodeURI(alternatename);
		this.alternatename = alternatename;
	} ;

	this.getTier = function() {
		return this.tier;
	} ;
	
	this.getClientContact = function() {
		var clientcontact;
		clientcontact = decodeURI(this.clientcontact);
		clientcontact = clientcontact.replace(/\+/g," ");
		return clientcontact;
	} ;

	
	this.getClientEmail = function() {
		var clientemail = decodeURI(this.clientemail);
		clientemail = clientemail.replace(/\%40/g,"@");
		//alert("clientemail : " + clientemail);
		return clientemail;
	}
	
	
	this.getCityID = function() {
		return this.cityid;
	} ;
	
	this.getCountyID = function() {
		return this.countyid;
	} ;
	
	this.getStateID = function() {
		return this.stateid;
	} ;
	this.getNameOfLink = function() {
		var nameoflink;
		nameoflink = this.nameoflink;
		nameoflink = decodeURI(nameoflink);
		nameoflink = nameoflink.replace(/\%2B/g,"+");
		nameoflink = nameoflink.replace(/\%2F/g,"/");
		nameoflink = nameoflink.replace(/\+/g," ");
		nameoflink = nameoflink.replace(/\\/i,"");
		nameoflink = nameoflink.replace(/\%2C/g,",");
		nameoflink = nameoflink.replace(/\%26/g,"&");
		nameoflink = nameoflink.replace(/\%27/g,"'");
		nameoflink = nameoflink.replace(/\%28/g,"(");
		nameoflink = nameoflink.replace(/\%29/g,")");

		return nameoflink;
	} ;
	
	this.getDateModified = function() {
		return this.datemodified;
	}
	
	this.getFaxAreaCode = function() {
		return this.faxareacode;
	}
	
	this.getFaxPhone = function() {
		return this.faxphone;
	}

	this.getCityAreaCode = function() {
		return this.cityareacode;
	}
	this.getPostalCode = function() {
		return this.postalcode;
	}
	this.getCityPhone = function() {
		return this.cityphone;
	}
	
	this.getPostalCodeID = function() {
		//alert("getPostalCodeID : " + this.postalcodeid);
		return this.postalcodeid;
	}
	
	this.getSearchWordsID = function() {
		return this.searchwordsid;
	} ;

	this.getWebLinkID = function() {
		return this.urlid;
	} ;
	
	this.getClientName = function() {
		var clientname;
		clientname = decodeURI(this.clientname);
		clientname = clientname.replace(/\%25/g,"%");
		clientname = clientname.replace(/\%2B/g,"+");
		clientname = clientname.replace(/\%2F/g,"/");
		clientname = clientname.replace(/\+/g," ");
		//clientname = clientname.replace(/\{2}\/g," ");
		clientname = clientname.replace(/\\/i,"");
		clientname = clientname.replace(/\%21/g,"!");
		clientname = clientname.replace(/\%2C/g,",");
		clientname = clientname.replace(/\%26/g,"&");
		clientname = clientname.replace(/\%27/g,"'");
		clientname = clientname.replace(/\%28/g,"(");
		clientname = clientname.replace(/\%29/g,")");
		return clientname;
	};
	
	this.getClientID = function() {		
		return this.clientid;
	} ;
	
	this.getClientAddress = function() {
		var clientaddress;
		clientaddress = decodeURI(this.addr);
		clientaddress = clientaddress.replace(/\%2B/g,"+");
		clientaddress = clientaddress.replace(/\%2F/g,"/");
		clientaddress = clientaddress.replace(/\+/g," ");
		//clientaddress = clientaddress.replace(/\{2}\/g," ");
		clientaddress = clientaddress.replace(/\\/i,"");
		clientaddress = clientaddress.replace(/\%23/g,"#");
		clientaddress = clientaddress.replace(/\%2C/g,",");
		clientaddress = clientaddress.replace(/\%26/g,"&");
		clientaddress = clientaddress.replace(/\%27/g,"'");
		clientaddress = clientaddress.replace(/\%28/g,"(");
		clientaddress = clientaddress.replace(/\%29/g,")");
		return clientaddress;
	} ;
	
	this.getClientMailing = function() {
		var mailing;
		mailing = decodeURI(this.mailing);
		mailing = mailing.replace(/\%2B/g,"+");
		mailing = mailing.replace(/\%2F/g,"/");
		mailing = mailing.replace(/\+/g," ");
		mailing = mailing.replace(/\%23/g,"#");
		//mailing = mailing.replace(/\{2}\/g," ");
		mailing = mailing.replace(/\\/i,"");
		mailing = mailing.replace(/\%2C/g,",");
		mailing = mailing.replace(/\%26/g,"&");
		mailing = mailing.replace(/\%27/g,"'");
		mailing = mailing.replace(/\%28/g,"(");
		mailing = mailing.replace(/\%29/g,")");
		return mailing;
	} ;
	
	
	this.getAlternateName = function() {
		var alternatename = this.alternatename;
		//alternatename = decodeURI(this.alternatename);
		alternatename = alternatename.replace(/\%2B/g,"+");
		alternatename = alternatename.replace(/\%2F/g,"/");
		alternatename = alternatename.replace(/\+/g," ");
		//alternatename = alternatename.replace(/\{2}\/g," ");
		alternatename = alternatename.replace(/\\/i,"");
		alternatename = alternatename.replace(/\%2C/g,",");
		alternatename = alternatename.replace(/\%26/g,"&");
		alternatename = alternatename.replace(/\%27/g,"'");
		alternatename = alternatename.replace(/\%28/g,"(");
		alternatename = alternatename.replace(/\%29/g,")");
		return alternatename;
	} ;
	
	this.getLatitude = function() {
		return this.latitude;
	} ;
	
	this.getLongitude = function() {
		return this.longitude;
	} ;
	
	this.toString = function() {
		return this.latitude + " " + this.longitude;
	} ;
	
	this.getPostalCodeCityName = function() {
		//alert("getCityName : " + this.postalcodecityname);
		var postalcodecityname;
		postalcodecityname = decodeURI(this.postalcodecityname);
		postalcodecityname = postalcodecityname.replace(/\+/g," ");
		//postalcodecityname = postalcodecityname.replace(/  /g," ");
		postalcodecityname = postalcodecityname.replace(/\\/i,"");
		postalcodecityname = postalcodecityname.replace(/\%2C/g,",");
		postalcodecityname = postalcodecityname.replace(/\%26/g,"&");
		postalcodecityname = postalcodecityname.replace(/\%27/g,"'");
		postalcodecityname = postalcodecityname.replace(/\%28/g,"(");
		postalcodecityname = postalcodecityname.replace(/\%29/g,")");

		return postalcodecityname;
	} ;
	
	this.getPostalCodeCountyName = function() {
		//alert("getCityName : " + this.postalcodecountyname);
		var postalcodecountyname;
		postalcodecountyname = decodeURI(this.postalcodecountyname);
		postalcodecountyname = postalcodecountyname.replace(/\+/g," ");
		//postalcodecountyname = postalcodecountyname.replace(/  /g," ");
		postalcodecountyname = postalcodecountyname.replace(/\\/i,"");
		postalcodecountyname = postalcodecountyname.replace(/\%2C/g,",");
		postalcodecountyname = postalcodecountyname.replace(/\%26/g,"&");
		postalcodecountyname = postalcodecountyname.replace(/\%27/g,"'");
		postalcodecountyname = postalcodecountyname.replace(/\%28/g,"(");
		postalcodecountyname = postalcodecountyname.replace(/\%29/g,")");

		return postalcodecountyname;
	} ;
	
	this.getCityName = function() {
		//alert("getCityName : " + this.homecity);
		var homecity;
		homecity = decodeURI(this.homecity);
		homecity = homecity.replace(/\+/g," ");
		//homecity = homecity.replace(/  /g," ");
		homecity = homecity.replace(/\\/i,"");
		homecity = homecity.replace(/\%2C/g,",");
		homecity = homecity.replace(/\%26/g,"&");
		homecity = homecity.replace(/\%27/g,"'");
		homecity = homecity.replace(/\%28/g,"(");
		homecity = homecity.replace(/\%29/g,")");

		return homecity;
	} ;
	
	this.getCountyName = function() {
		var homecounty;
		homecounty = decodeURI(this.homecounty);
		homecounty = homecounty.replace(/\%2B/g,"+");
		homecounty = homecounty.replace(/\%2F/g,"/");
		homecounty = homecounty.replace(/\+/g," ");
		//homecounty = homecounty.replace(/  /g," ");
		homecounty = homecounty.replace(/\\/i,"");
		homecounty = homecounty.replace(/\%2C/g,",");
		homecounty = homecounty.replace(/\%26/g,"&");
		homecounty = homecounty.replace(/\%27/g,"'");
		homecounty = homecounty.replace(/\%28/g,"(");
		homecounty = homecounty.replace(/\%29/g,")");
		return homecounty;
	} ;
	
	this.getStateName = function() {
		return this.homestate;
	} ;
	
	this.getStateAbbreviation = function() {
		return this.stateabbreviation;
	} ;
	
	this.debug = function() {
		var lat = "";
		var lon = "";
		var url = "";
		var weblinkid = "";
		var cityname = "";
		var countyname = "";
		var statename = "";
		var stateabbreviation = "";
		var clientname = "";
		var alternatename = "";
		var string = "";

		if ((lat = this.getLatitude()) === "undefined") {
			lat = "Not Set";
		}
		
		if ((lon = this.getLongitude()) === "undefined") {
			lon = "Not Set";
		}
		
		if ((url = this.getURL()) === "undefined") {
			url = "Not Set";
		}
		
		if ((weblinkid = this.getWebLinkID()) === "undefined") {
			weblinkid = "Not Set";
		}
		
		if ((cityname = this.getCityName()) === "undefined") {
			cityname = "Not Set";
		}
		
		if ((countyname = this.getCountyName()) === "undefined") {
			countyname = "Not Set";
		}
		
		if ((statename = this.getStateName()) === "undefined") {
			statename = "Not Set";
		}
		
		if ((stateabbreviation = this.getStateAbbreviation()) === "undefined") {
			stateabbreviation = "Not Set";
		}
		
		if ((clientname = this.getClientName()) === "undefined") {
			getclientname = "Not Set";
		}
		
		if ((alternatename = this.getAlternateName()) === "undefined") {
			alternatename = "Not Set";
		}
		
		string = "Latitude : " + lat + " Longitude : " + lon + " URL : " + url + " WebLinkID : " + weblinkid + " CityName : " + cityname + " CountyName : " + countyname;
		string += " StateName : " + statename + " StateAbbreviation : " + stateabbreviation + " ClientName : " + clientname + " AlternateName : " + alternatename;

		return string;
	} ;

	this.showClientMap = function()
	{
		var lat;
		var lon;
		var zoom;
		
		var lsRegExp = /\+/g;

		var location;
		PinID++;
		var UpperLeftLat;
		var UpperLeftLon;
		var LowerRightLat;
		var LowerRightLon;
	
		lat = Web.getPostalCodeLatitude();
		lon = Web.getPostalCodeLongitude();
		var postalcode = Web.getPostalCode();
	
		if (postalcode == "") {
			//alert("We're empty!");
			return -1;
		}
	
		if (Locoolly.getDebug() )
			traceLocoolly("showLocoollyMap, lat : " + lat + ", lon " + lon + " , " + postalcode);
	
		//pin.Highlight = true;
		//pin.Highlight = false
	} ;
	/*
		After displaying the current Client (ala this.displayClient() ), then
		add the "click to continue" notation
	*/
		this.displayFooter = function(popups,type) {
		//alert("Client.displayFooter!");

		//var type = Web.getSelectType();
		var canceltext = "";
		var responsediv = document.createElement("div");
		responsediv.id = "selectfooter";
		var canceltextdiv = document.createElement("div");
	
		//alert("type : " + type);
		if (type == "view") {
			var responsetext = document.createTextNode("Click (clientclass) here to continue");
			responsediv.onclick = handleClientNode;
		}
		
		if (type == "edit") {
			var responsetext = document.createTextNode("Click (clientclass) here to update record");
			responsediv.onclick = handleClientNode;
			canceltext = document.createTextNode("Click (clientclass) here to cancel update");
			canceltextdiv.onclick = deleteFooter;
		}
		
		if (type == "delete") {
			var responsetext = document.createTextNode("Click (clientclass) here to delete record");
			responsediv.onclick = handleClientNode;
			canceltext = document.createTextNode("Click (clientclass) here to cancel update");
			canceltextdiv.onclick = deleteFooter;
		}
			
		responsetext.id = "action";
		responsediv.appendChild(responsetext);
		responsediv.className = "action";
		responsediv.style.cursor = "pointer";
		popups.appendChild(responsediv);
		
		if (canceltext != "") {
			canceltextdiv.appendChild(canceltext);
			canceltextdiv.className = "action"
			canceltextdiv.style.cursor = "pointer";
			popups.appendChild(canceltextdiv);
		}
	}
	
	this.displayClient = function(popups) {
		//alert("displayClient");
		//var popups = document.getElementById('entrypopups');
		if (!popups)
		{
			//alert("Whoops: can't open entrypopups");
			return false;
		}

		//alert("popups : " + popups);
		var clientnametext = document.createTextNode("Client Name");
		var clientmailingtext = document.createTextNode("Client Mailing");
		
		var clientcontacttext = document.createTextNode("Client Contact" );
		var clienttiertext = document.createTextNode("Client Tier");
		var clientaddresstext = document.createTextNode("Client Address" );
		var clientareacodetext = document.createTextNode("Client Area Code");
		var clientphonetext = document.createTextNode("Client Phone Number");
		
		var clientfaxareatext = document.createTextNode("Client Fax Code" );
		var clientfaxphonetext = document.createTextNode("Client Fax Number");
		var clientemailtext = document.createTextNode("Client Email");
		var latitudetext = document.createTextNode("Latitude");
		var longitudetext = document.createTextNode("Longitude");
		
		var citynametext = document.createTextNode("City Name");
		var countynametext = document.createTextNode("County Name");
		var stateabbreviationtext = document.createTextNode("State");
		var postalcodetext = document.createTextNode("PostalCode");
		var urltext = document.createTextNode("URL");
		var alternatenametext = document.createTextNode("Alternate Name");
		var nameoflinktext = document.createTextNode("Name of Link");
		var datemodifiedtext = document.createTextNode("Date Modified");
		var weblinkidtext = document.createTextNode("WebLinkID");

		var tempDiv = document.createElement("div");
		tempDiv.id = "adwrapper";

		var clientnamediv = document.createElement("div");
		clientnamediv.id = "ClientName";
		clientnamediv.className = "entryDisplay";

		var clientmailingdiv = document.createElement("div");
		clientmailingdiv.id = "ClientMailing";
		clientmailingdiv.className = "entryDisplay";

		var clientcontactdiv = document.createElement("div");
		clientcontactdiv.id = "ClientContact";
		clientcontactdiv.className = "entryDisplay";
		
		var clienttierdiv = document.createElement("div");
		clienttierdiv.id = "Tier";
		clienttierdiv.className = "entryDisplay";

		var clientaddressdiv = document.createElement("div");
		clientaddressdiv.id = "ClientAddress";
		clientaddressdiv.className = "entryDisplay";
		
		var clientmailingdiv = document.createElement("div");
		clientmailingdiv.id = "ClientMailing";
		clientmailingdiv.className = "entryDisplay";

		var clientareacodediv = document.createElement("div");
		clientareacodediv.id  = "ClientAreaCode";
		clientareacodediv.className = "entryDisplay";

		var clientphonediv = document.createElement("div");
		clientphonediv.id = "ClientPhone";
		clientphonediv.className = "entryDisplay";

		var clientfaxareadiv = document.createElement("div");
		clientfaxareadiv.id = "FaxArea";
		clientfaxareadiv.className = "entryDisplay";
		
		var clientfaxphonediv = document.createElement("div");
		clientfaxphonediv.id = "FaxPhone";
		clientfaxphonediv.className = "entryDisplay";

		var citynamediv = document.createElement("div");
		citynamediv.id = "CityName";
		citynamediv.className="entryDisplay";

		var stateabbreviationdiv = document.createElement("div");
		stateabbreviationdiv.id = "StateAbbreviation";
		stateabbreviationdiv.className = "entryDisplay";

		var postalcodediv = document.createElement("div");
		postalcodediv.id = "PostalCode";
		postalcodediv.className = "entryDisplay";
		
		var clientemaildiv = document.createElement("div");
		clientemaildiv.id = "ClientEmail";
		clientemaildiv.className = "entryDisplay";
		
		var countynamediv = document.createElement("div");
		countynamediv.id = "CountyName";
		countynamediv.className = "entryDisplay";
		
		var latitudediv = document.createElement("div");
		latitudediv.id = "Latitude";
		latitudediv.className = "entryDisplay"
		
		var longitudediv = document.createElement("div");
		longitudediv.id = "Longitude";
		longitudediv.className = "entryDisplay";
		
		var urldiv = document.createElement("div");
		urldiv.id = "URL";
		urldiv.className = "entryDisplay";
		
		var alternatenamediv = document.createElement("div");
		alternatenamediv.id = "AlternateName";
		alternatenamediv.className = "entryDisplay";
		
		var nameoflinkdiv = document.createElement("div");
		nameoflinkdiv.id = "NameOfLink";
		nameoflinkdiv.className = "entryDisplay";
		
		var datemodifieddiv = document.createElement("div");
		datemodifieddiv.id = "DateModified";
		datemodifieddiv.className = "entryDisplay";

		var weblinkiddiv = document.createElement("div");
		weblinkiddiv.id = "WebLinkID";  
		weblinkiddiv.className = "entryDisplay";
		
		var cityiddiv = document.createElement("div");
		cityiddiv.id = "CityID";
		
		var countyiddiv = document.createElement("div");
		countyiddiv.id = "CountyID";
		
		var stateiddiv = document.createElement("div");
		stateiddiv.id = "StateID";
		
		var postalcodeiddiv = document.createElement("div");
		postalcodeiddiv.id = "PostalCodeID";
		
		var mapdiv = document.createElement("div");
		mapdiv.id = "gMaps";
		
		if (Locoolly.getDebug())
			traceLocoolly("displayClient, ClientName : " + this.getClientName());

		//alert("ClientName :"+ClientName+":");
		popups.appendChild(tempDiv);

		clientnamediv.appendChild(clientnametext);
		var clientnameinput = document.createElement("input");
		clientnameinput.type = 'text';
		clientnameinput.value = this.getClientName();
		clientnameinput.name = "ClientNameInput";
		clientnameinput.id = "ClientNameInput";
		clientnameinput.className = "inputDisplay";
		clientnameinput.size = 80;
		clientnamediv.appendChild(clientnameinput);
		tempDiv.appendChild(clientnamediv);

		clientcontactdiv.appendChild(clientcontacttext);
		var clientcontactinput = document.createElement("input");
		clientcontactinput.type = "text";
		clientcontactinput.value = this.getClientContact();
		clientcontactinput.name = "ClientContact";
		clientcontactinput.id = "ClientContactInput"
		clientcontactinput.className = "inputDisplay";
		clientcontactinput.size = 80;
		clientcontactdiv.appendChild(clientcontactinput);
		tempDiv.appendChild(clientcontactdiv);
		
		clienttierdiv.appendChild(clienttiertext);
		var clienttierinput = document.createElement("input");
		clienttierinput.type = "text";
		clienttierinput.value = this.getTier();
		clienttierinput.name = "Tier";
		clienttierinput.id = "TierInput"
		clienttierinput.className = "inputDisplay";
		clienttierinput.size = 20;
		clienttierdiv.appendChild(clienttierinput);
		tempDiv.appendChild(clienttierdiv);

		clientmailingdiv.appendChild(clientmailingtext);
		var clientmailinginput = document.createElement("input");
		clientmailinginput.type = "text";
		clientmailinginput.value = this.getClientMailing();
		clientmailinginput.id = "ClientMailingInput";
		clientmailinginput.className = "inputDisplay";
		clientmailinginput.size = 80;
		clientmailingdiv.appendChild(clientmailinginput);
		tempDiv.appendChild(clientmailingdiv);

		clientaddressdiv.appendChild(clientaddresstext);
		var clientaddressinput = document.createElement("input");
		clientaddressinput.type = "text";
		clientaddressinput.value = this.getClientAddress();
		clientaddressinput.id = "ClientAddressInput";
		clientaddressinput.className = "inputDisplay";
		clientaddressinput.size = 80;
		clientaddressdiv.appendChild(clientaddressinput);
		tempDiv.appendChild(clientaddressdiv);

		clientareacodediv.appendChild(clientareacodetext);
		var clientareacodeinput = document.createElement("input");
		clientareacodeinput.type = "text";
		clientareacodeinput.value = this.getCityAreaCode();
		clientareacodeinput.id = "ClientAreaCodeInput";
		clientareacodeinput.className = "inputDisplay";
		clientareacodeinput.size = 6;
		clientareacodediv.appendChild(clientareacodeinput);
		tempDiv.appendChild(clientareacodediv);
		
		clientphonediv.appendChild(clientphonetext);
		var clientphoneinput = document.createElement("input");
		clientphoneinput.type = "text";
		clientphoneinput.value = this.getCityPhone();
		clientphoneinput.id = "ClientPhoneInput";
		clientphoneinput.className = "inputDisplay";
		clientphoneinput.size = 12;
		clientphonediv.appendChild(clientphoneinput);
		tempDiv.appendChild(clientphonediv);
		
		if (Locoolly.getDebug())
			traceLocoolly("displayClient, ClientAreaCode : " + this.getCityAreaCode());

		clientfaxareadiv.appendChild(clientfaxareatext);
		var clientfaxareainput = document.createElement("input");
		clientfaxareainput.type = "text";
		clientfaxareainput.value = this.getFaxAreaCode();
		clientfaxareainput.id = "ClientFaxAreaInput";
		clientfaxareainput.className = "inputDisplay";
		clientfaxareainput.size = 6;
		clientfaxareadiv.appendChild(clientfaxareainput);
		tempDiv.appendChild(clientfaxareadiv);
	
		clientfaxphonediv.appendChild(clientfaxphonetext);
		var clientfaxphoneinput = document.createElement("input");
		clientfaxphoneinput.type = "text";
		clientfaxphoneinput.value = this.getFaxPhone();
		clientfaxphoneinput.id = "ClientFaxPhoneInput";
		clientfaxphoneinput.className = "inputDisplay";
		clientfaxphoneinput.size = 12;
		clientfaxphonediv.appendChild(clientfaxphoneinput);
		tempDiv.appendChild(clientfaxphonediv);
		
		clientemaildiv.appendChild(clientemailtext);
		var clientemailinput = document.createElement("input");
		clientemailinput.type = "text";
		clientemailinput.value = this.getClientEmail();
		clientemailinput.id = "ClientEmailInput";
		clientemailinput.className = "inputDisplay";
		clientemailinput.size = 80;
		clientemaildiv.appendChild(clientemailinput);
		tempDiv.appendChild(clientemaildiv);

		latitudediv.appendChild(latitudetext);
		var latitudeinput = document.createElement("input");
		latitudeinput.type = "text";
		latitudeinput.value = this.getLatitude();
		latitudeinput.id = "LatitudeInput";
		latitudeinput.className = "inputDisplay";
		latitudeinput.size = 20;
		latitudediv.appendChild(latitudeinput);
		tempDiv.appendChild(latitudediv);
		
		longitudediv.appendChild(longitudetext);
		var longitudeinput = document.createElement("input");
		longitudeinput.type = "text";
		longitudeinput.value = this.getLongitude();
		longitudeinput.id = "LongitudeInput";
		longitudeinput.className = "inputDisplay";
		longitudeinput.size = 20;
		longitudediv.appendChild(longitudeinput);
		tempDiv.appendChild(longitudediv);
		
		citynamediv.appendChild(citynametext);
		var citynameinput = document.createElement("input");
		citynameinput.type = "text";
		citynameinput.value = this.getCityName();
		citynameinput.id = "CityNameInput";
		citynameinput.className = "inputDisplay";
		citynameinput.size = 80;
		citynamediv.appendChild(citynameinput);
		tempDiv.appendChild(citynamediv);
		
		countynamediv.appendChild(countynametext);
		var countynameinput = document.createElement("input");
		countynameinput.type = "text";
		countynameinput.value = this.getCountyName();
		countynameinput.id = "CountyNameInput";
		countynameinput.className = "inputDisplay";
		countynameinput.size = 80;
		countynamediv.appendChild(countynameinput);
		tempDiv.appendChild(countynamediv);
		
		if (Locoolly.getDebug())
			traceLocoolly("displayClient, StateAbbreviation : " + this.getStateAbbreviation());
		
		stateabbreviationdiv.appendChild(stateabbreviationtext);
		var stateabbreviationinput = document.createElement("input");
		stateabbreviationinput.type = "text";
		stateabbreviationinput.value = this.getStateAbbreviation();
		stateabbreviationinput.id = "StateAbbreviationInput";
		stateabbreviationinput.className = "inputDisplay";
		stateabbreviationinput.size = 4;
		stateabbreviationdiv.appendChild(stateabbreviationinput);
		tempDiv.appendChild(stateabbreviationdiv);
		
		postalcodediv.appendChild(postalcodetext);
		var postalcodeinput = document.createElement("input");
		postalcodeinput.type = "text";
		postalcodeinput.value = this.getPostalCode();
		//alert("PostalCode value is : " + this.getPostalCode());
		postalcodeinput.id = "PostalCodeInput";
		postalcodeinput.className = "inputDisplay";
		postalcodeinput.size = 12;
		postalcodediv.appendChild(postalcodeinput);
		tempDiv.appendChild(postalcodediv);

		urldiv.appendChild(urltext);
		var urlinput = document.createElement("input");
		urlinput.type = "text";
		urlinput.value = this.getURL();
		urlinput.id = "URLInput";
		urlinput.className = "inputDisplay";
		urlinput.size = 80;
		urldiv.appendChild(urlinput);
		tempDiv.appendChild(urldiv);
		
		alternatenamediv.appendChild(alternatenametext);
		var alternatenameinput = document.createElement("input");
		alternatenameinput.type = "text";
		alternatenameinput.value = this.getAlternateName();
		alternatenameinput.id = "AlternateNameInput";
		alternatenameinput.className = "inputDisplay";
		alternatenameinput.size = 80;
		alternatenamediv.appendChild(alternatenameinput);
		tempDiv.appendChild(alternatenamediv);
		
		nameoflinkdiv.appendChild(nameoflinktext);
		var nameoflinkinput = document.createElement("input");
		nameoflinkinput.type = "text";
		nameoflinkinput.value = this.getNameOfLink();
		nameoflinkinput.id = "NameOfLinkInput";
		nameoflinkinput.className = "inputDisplay";
		nameoflinkinput.size = 80;
		nameoflinkdiv.appendChild(nameoflinkinput);
		tempDiv.appendChild(nameoflinkdiv);
		
		datemodifieddiv.appendChild(datemodifiedtext);
		var datemodifiedinput = document.createElement("input");
		datemodifiedinput.type = "text";
		datemodifiedinput.value = this.getDateModified();
		datemodifiedinput.id = "DateModifiedInput";
		datemodifiedinput.className = "inputReadOnly";
		datemodifiedinput.size = 30;
		datemodifieddiv.appendChild(datemodifiedinput);
		tempDiv.appendChild(datemodifieddiv);
		
		if (Locoolly.getDebug())
			traceLocoolly("displayClient, datemodified : " + this.getDateModified());
		
		weblinkiddiv.appendChild(weblinkidtext);
		var weblinkidinput = document.createElement("input");
		weblinkidinput.type = "text";
		weblinkidinput.value = this.getWebLinkID();
		weblinkidinput.id = "WebLinkIDInput";
		weblinkidinput.className = "inputReadOnly";
		weblinkidinput.size = 10;
		weblinkiddiv.appendChild(weblinkidinput);
		tempDiv.appendChild(weblinkiddiv);
		
		var cityidinput = document.createElement("input");
		cityidinput.type = "hidden";
		cityidinput.id = "CityIDInput"
		cityidinput.value = this.getCityID();
		cityiddiv.appendChild(cityidinput);
		tempDiv.appendChild(cityiddiv);
		
		var countyidinput = document.createElement("input");
		countyidinput.type = "hidden";
		countyidinput.id = "CountyIDInput"
		countyidinput.value = this.getCountyID();
		countyiddiv.appendChild(countyidinput);
		tempDiv.appendChild(countyiddiv);
		
		var stateidinput = document.createElement("input");
		stateidinput.type = "hidden";
		stateidinput.id = "StateIDInput"
		stateidinput.value = this.getStateID();
		stateiddiv.appendChild(stateidinput);
		tempDiv.appendChild(stateiddiv);
		
		var postalcodeidinput = document.createElement("input");
		postalcodeidinput.type = "hidden";
		postalcodeidinput.id = "PostalCodeIDInput"
		postalcodeidinput.value = this.getPostalCodeID();
		postalcodeiddiv.appendChild(postalcodeidinput);
		tempDiv.appendChild(postalcodeiddiv);
		
		var weblinkinput = document.createElement("input");
		weblinkinput.type = "hidden";
		weblinkinput.id = "WebLinkIDInput";
		weblinkinput.value = this.getWebLinkID();
		weblinkiddiv.appendChild(weblinkinput);
		tempDiv.appendChild(weblinkiddiv);
		
		tempDiv.appendChild(mapdiv);

		if (this.getURL() != "") {
			var spanblue = document.createElement("span");
			var url = this.getURL();
			url = "http://" + url;
			spanblue.className = "bluetext";
			//alert(this.getURL());
			//alert(this.getAlternateName());
			var dummy = '<a href="' + url + '"' ;
			dummy += 'onmouseout = "this.style.cursor=\'default\';"';
			dummy += 'onmouseover = "this.style.cursor=\'pointer\';">';
			dummy += this.getAlternateName();
			dummy +=  '</a></div>';
		
			spanblue.innerHTML = dummy;
			tempDiv.appendChild(spanblue);
			}
			popups.appendChild(tempDiv);

		VEMap.prototype.setMapHeight = function(mapheight)
			{
				if (typeof mapheight == 'undefined') {
					var mapheight = 0;
				}
				this.mapheight = mapheight;
			}
		VEMap.prototype.getMapHeight = function()
			{
				return this.mapheight;
			}
		VEMap.prototype.setMapWidth = function(mapwidth)
			{
				if (typeof mapwidth == 'undefied') {
					var mapwidth = 0;
				}
				this.mapwidth = mapwidth;
			}
		VEMap.prototype.getMapWidth = function()
			{
				return this.mapwidth;
			}

		ClientMap = new VEMap('gMaps');
		if (Locoolly.getDebug())
			traceLocoolly("displayClient,ClientMap : " + ClientMap);
		
		//ClientMap.isSafari = false;
		//ClientMap.SetCredentials("Aja7b0LQmJva3eitxbMp1h08CVHrEi5GUnPdXqUSnwy-vmW3R3jxuPI-4VRM-y2U"); //SearchResults
		//ClientMap.setMapHeight(106);
		//ClientMap.setMapWidth(106);
		//ClientMap.getMapHeight();
		//ClientMap.getMapWidth();
/*
		setPostalCodeGeos();

		var UpperLeftLat;
		var UpperLeftLon;
		var LowerRightLat;
		var LowerRightLon;
		var lat;
		var lon;
		var PinID;
		var zoom = 8;
		
		UpperLeftLat = 179;
		UpperLeftLon = -179;
		LowerRightLat = -179;
		LowerRightLon = 179;
		
		postalcodelat = Web.getPostalCodeLatitude();
		postalcodelon = Web.getPostalCodeLongitude();
		lat = Web.getLatitude();
		lon = Web.getLongitude();
		
		if ( lat < UpperLeftLat ) {
			UpperLeftLat = lat;
		}

		if ( lon > UpperLeftLon ) {
			UpperLeftLon = lon;
		}

		if ( lat > LowerRightLat ) {
			LowerRightLat = lat;
		}

		if ( lon < LowerRightLon ) {
			LowerRightLon = lon;
		}
		
		UpperLeftLat = Math.max(UpperLeftLat, lat);
		LowerRightLat = Math.max(LowerRightLat, lat);
		UpperLeftLon = Math.max(UpperLeftLon, lon);
		LowerRightLon = Math.max(LowerRightLon, lon);
		var altitude = 100;
		
		var mydiv = document.getElementById('gMaps');
		if (mydiv) {
			alert("gMaps ok!");
			mydiv.className = 'inputError';
		} else {
			alert("Cannot open gMaps!");
		}
        //  ClientMap = new VEMap('gMaps');
	*/
 var LA = new VELatLong(34.0540, -118.2370, 100, VELatLong.RelativeToGround);
 		//ClientMap.LoadMap(LA);
	    
		//var LA = new VELatLong(34.0540, -118.2370, altitude, VELatLong.RelativeToGround);
		//ClientMap.LoadMap( LA, 14, VEMapStyle.Road, false, VEMapMode.Mode2D, true, 1);
		//PinID++;
		//var pin = new VEPushpin(PinID, new VELatLong(postalcodelat, postalcodelon), null, this.getPostalCodeCityName(), this.getPostalCodeCityName());
		//ClientMap.AddPushpin(pin);
		//PinID++;
	}

	/*
	Called from the JavaScript within the ViewClient.php-generated display with onclick
	*/
	this.queryClientEntry = function(ClientID, type) {
		//Client.setCityName("Yuba+City");
		//alert(Client.getCityName());
	
		var EntryXML = GetXmlHttpObject();
		var popups;
	
		if (type == "") {
			return false;
		}
	
		var url="/Production/getClientEntry.php";
		url=url+"?ClientID="+ClientID;
		url=url+"&type="+type;
		url=url+"&sid="+Math.random();
	
		if (Locoolly.getDebug()) {
			traceLocoolly("getClientEntry.php : " + url);
			traceLocoolly("getClientEntry.php : type : " + type);
		}
	
		EntryXML.onreadystatechange=dummy;
		EntryXML.open("GET",url,false);
		EntryXML.send(null);
	
		var popups;
		var results;
	
		var xmlDoc = EntryXML.responseXML;	
		if (xmlDoc) {
			var tempDiv;
			var myDiv;
			var myOption;
			var CategoryID;
			var CategoryName;
			var myText;
			//alert("entryQuery text : " + EntryXML.responseText);
			
			popups = document.getElementById('entrypopups');
			if (!popups) {
				alert("entryQuery : could not find entrypopups");
				return false;
			}
	
			var x = xmlDoc.getElementsByTagName('error');
			var err = x[0].firstChild.nodeValue;
	
			if (err!= 0) {
				alert("CategoryResults error: " + err);
				return;
			}
	
			var x = xmlDoc.getElementsByTagName('count');
			var count = x[0].firstChild.nodeValue;
			//alert("count : " + count);
	
			var tagClientID = xmlDoc.getElementsByTagName("ClientID");
			var tagClientName = xmlDoc.getElementsByTagName("ClientName");
			var tagClientMailing = xmlDoc.getElementsByTagName("ClientMailing");
			var tagClientContact = xmlDoc.getElementsByTagName("ClientContact");
			var tagTier = xmlDoc.getElementsByTagName("Tier");
			var tagClientAddress = xmlDoc.getElementsByTagName("ClientAddress");
			var tagCityAreaCode = xmlDoc.getElementsByTagName("CityAreaCode");
			var tagCityPhone = xmlDoc.getElementsByTagName("CityPhone");
			var tagFaxAreaCode = xmlDoc.getElementsByTagName("FaxAreaCode");
			var tagFaxPhone = xmlDoc.getElementsByTagName("FaxPhone");
			var tagClientEmail = xmlDoc.getElementsByTagName("ClientEmail");
			var tagLatitude = xmlDoc.getElementsByTagName("Latitude");
			var tagLongitude = xmlDoc.getElementsByTagName("Longitude");
			var tagCityID = xmlDoc.getElementsByTagName("CityID");
			var tagCityName = xmlDoc.getElementsByTagName("CityName");
			var tagCountyID = xmlDoc.getElementsByTagName("CountyID");
			var tagCountyName = xmlDoc.getElementsByTagName("CountyName");
			var tagStateID = xmlDoc.getElementsByTagName("StateID");
			var tagStateAbbreviation = xmlDoc.getElementsByTagName("StateAbbreviation");
			var tagPostalCodeID = xmlDoc.getElementsByTagName("PostalCodeID");
			var tagPostalCode = xmlDoc.getElementsByTagName("PostalCode");
			var tagWebLinkID = xmlDoc.getElementsByTagName("WebLinkID");
			var tagURL = xmlDoc.getElementsByTagName("URL");
			var tagAlternateName = xmlDoc.getElementsByTagName("AlternateName");
			var tagNameOfLink = xmlDoc.getElementsByTagName("NameOfLink");
			var tagDateModified = xmlDoc.getElementsByTagName('DateModified');
	
			for (i = 0; i< count; i++) {
					// id = wordsid[i].firstChild.nodeValue);
					Client.setSelectType(type);
	
					Client.setClientID(tagClientID[i].firstChild.nodeValue);
					(tagClientName[i].firstChild != null) ? value = tagClientName[i].firstChild.nodeValue : value = "" ;
					Client.setClientName(value);
					
					(tagClientMailing[i].firstChild != null) ? value = tagClientMailing[i].firstChild.nodeValue : value = "" ;
					Client.setClientMailing(value);
	
					(tagClientContact[i].firstChild != null) ? value = tagClientContact[i].firstChild.nodeValue : value = "" ;
					Client.setClientContact(value);
					
					(tagTier[i].firstChild != null) ? value = tagTier[i].firstChild.nodeValue : value = "";
					Client.setTier(value);
	
					(tagClientAddress[i].firstChild != null) ? value = tagClientAddress[i].firstChild.nodeValue : value = "" ;
					Client.setClientAddress(value);
	
					(tagCityAreaCode[i].firstChild != null) ? value = tagCityAreaCode[i].firstChild.nodeValue : value = "" ;
					Client.setCityAreaCode(value);
	
					(tagCityPhone[i].firstChild != null) ? value = tagCityPhone[i].firstChild.nodeValue : value = "" ;
					Client.setCityPhone(value);
					
					(tagFaxAreaCode[i].firstChild != null) ? value = tagFaxAreaCode[i].firstChild.nodeValue : value = "" ;
					Client.setFaxAreaCode(value);
	
					(tagFaxPhone[i].firstChild != null) ? value = tagFaxPhone[i].firstChild.nodeValue : value = "" ;
					Client.setFaxPhone(value);
					
					(tagClientEmail[i].firstChild != null) ? value = tagClientEmail[i].firstChild.nodeValue : value = "" ;
					Client.setClientEmail(value);
					
					(tagLatitude[i].firstChild != null) ? value = tagLatitude[i].firstChild.nodeValue : value = "" ;
					Client.setLatitude(value);
	
					(tagLongitude[i].firstChild != null) ? value = tagLongitude[i].firstChild.nodeValue : value = "" ;
					Client.setLongitude(value);
					
					(tagCityID[i].firstChild != null) ? value = tagCityID[i].firstChild.nodeValue : value = "";
					Client.setCityID(value);
					
					(tagCityName[i].firstChild != null) ? value = tagCityName[i].firstChild.nodeValue : value = "" ;
					Client.setCityName(value);
					
					(tagCountyID[i].firstChild != null) ? value = tagCountyID[i].firstChild.nodeValue : value = "";
					Client.setCountyID(value);
					
					(tagCountyName[i].firstChild != null) ? value = tagCountyName[i].firstChild.nodeValue : value = "" ;
					Client.setCountyName(value);
					
					(tagStateID[i].firstChild != null) ? value = tagStateID[i].firstChild.nodeValue : value = "";
					Client.setStateID(value);
					
					(tagStateAbbreviation[i].firstChild != null) ? value = tagStateAbbreviation[i].firstChild.nodeValue : value = "" ;
					Client.setStateAbbreviation(value);
	
					(tagPostalCodeID[i].firstChild != null) ? value = tagPostalCodeID[i].firstChild.nodeValue : value = "";
					//alert("   value of postalcodeid : 2  " + value);
					Client.setPostalCodeID(value);
	
					(tagPostalCode[i].firstChild != null) ? value = tagPostalCode[i].firstChild.nodeValue : value = "" ;
					Client.setPostalCode(value);
					
					(tagWebLinkID[i].firstChild != null) ? value = tagWebLinkID[i].firstChild.nodeValue : value = "" ;
					Client.setWebLinkID(value);
	
					(tagURL[i].firstChild != null) ? value = tagURL[i].firstChild.nodeValue : value = "" ;
					Client.setURL(value);
					
					(tagAlternateName[i].firstChild != null) ? value = tagAlternateName[i].firstChild.nodeValue : value = "" ;
					Client.setAlternateName(value);
	
					(tagNameOfLink[i].firstChild != null) ? value = tagNameOfLink[i].firstChild.nodeValue : value = "" ;
					Client.setNameOfLink(value);
					
					(tagDateModified[i].firstChild != null) ? value = tagDateModified[i].firstChild.nodeValue : value = "";
					Client.setDateModified(value);
	
					Client.displayClient(popups);
					}
				//displayFooter(popups,type,handleClientNode());
				Client.displayFooter(popups,type);
		}
	} ;
}
function setPostalCodeGeos()
{
	var zipXML = GetXmlHttpObject();
	var postalcode = Web.getPostalCode();
	var geo;

	geo = "/Production/getZipCodeGeosXML.php?";
	geo += "PostalCode="+postalcode;
	geo += "&sid="+Math.random();

	if (Locoolly.getDebug())
		traceLocoolly("getZipCodeGeosXML.php, url : " + geo);

	zipXML.onreadystatechange=dummy;
	zipXML.open("GET",geo,false);
	zipXML.send(null);

	var xmlDoc = zipXML.responseXML;
	var txt = zipXML.responseText;

	if (Locoolly.getDebug())
		console.log("getPostalCodeGeos, here's the response: " + txt);

	if (xmlDoc) {
		var x = xmlDoc.getElementsByTagName('error');
		var err = x[0].firstChild.nodeValue;
		//alert("error : " + err);
	
		if (err != 0) {
			alert("validateCoordinates error: " + err);
			valid = false;
			return valid;
		}

		var x = xmlDoc.getElementsByTagName('count');
		var count = x[0].firstChild.nodeValue;
		if (count == 0) {
			valid = false;
			return valid;
		}

		var tagLatitude    = xmlDoc.getElementsByTagName("Latitude");
		var tagLongitude   = xmlDoc.getElementsByTagName("Longitude");
		var tagCityName    = xmlDoc.getElementsByTagName("CityName");
		var tagCountyName  = xmlDoc.getElementsByTagName("CountyName");
		var latitudeReturned;
		var longitdeReturned;
		var cityReturned;
		var countyReturned;
			
		(tagLatitude[0].firstChild != null) ? latitudeReturned = tagLatitude[0].firstChild.nodeValue : latitudeReturned = "";
		(tagLongitude[0].firstChild != null) ? longitudeReturned = tagLongitude[0].firstChild.nodeValue : longitudeReturned = "";
		(tagCityName[0].firstChild != null) ? cityReturned = tagCityName[0].firstChild.nodeValue : cityReturned = "";
		(tagCountyName[0].firstChild != null) ? countyReturned = tagCountyName[0].firstChild.nodeValue : countyReturned = "";
			
		Web.setPostalCodeLatitude(latitudeReturned);
		Web.setPostalCodeLongitude(longitudeReturned);
		Web.setPostalCodeCityName(cityReturned);
		Web.setPostalCodeCountyName(countyReturned);

		return;
		}
}
// define DisplayAd; what the javascript side sees from the result of a biz search
function DisplayAd() {
	this.setShapeID = function(shapeid) {
		if (typeof shapeid == 'undefined') {
			var shapeid = "";
		}
		this.shapeid = shapeid;
	} ;

	this.setTier = function(tier) {
		if (typeof tier == 'undefined') {
			var tier = "";
		}
		this.tier = tier;
	} ;

	this.setAreaCode = function(areacode) {
		if (typeof areacode == 'undefined') {
			var areacode = "";
		}
		this.areacode = areacode;
	} ;
	
	this.setPhoneNumber = function(phonenumber) {
		if (typeof phonenumber == 'undefined') {
			var phonenumber = "";
		}
		this.phonenumber = phonenumber;
	} ;
	
	this.setPostalCode = function(postalcode) {
		if (typeof postalcode == 'undefined') {
			var postalcode = "";
		}
		//alert("DisplayAd, setPostalCode to : " + postalcode);
		this.postalcode = postalcode;
	} ;
	
	this.setPostalCodeID = function(postalcodeid) {
		if (typeof postalcodeid == 'undefined') {
			var postalcodeid = "";
		}
		this.postalcodeid = postalcodeid;
	} ;
	
	this.getTier = function() {
		return this.tier;
	} ;
	
	this.getShapeID = function() {
		return this.shapeid;
	} ;
	
	this.getAreaCode = function() {
		return this.areacode;
	} ;
	
	this.getPostalCode = function() {
		//alert("DisplayAd, getPostalCode : " + this.postalcode);
		return this.postalcode;
	} ;
	
	this.getPostalCodeID = function() {
		return this.postalcodeid;
	} ;
	
	this.getPhoneNumber = function() {
		return this.phonenumber;
	} ;
	
}
function HomePlace() {
	this.setPostalCodeID = function(postalcodeid) {
		if (typeof postalcodeid == 'undefined') {
			var postalcodeid = "";
		}
		this.postalcodeid = postalcodeid;
		//alert("HomePlace : " + postalcodeid);
	} ;

	this.setModule = function(module) {
		this.module = module;
	}

	this.getModule = function() {
		return this.module;
	}

	this.setPostalCode = function(postalcode) {
		if (typeof postalcode == 'undefined') {
			var postalcode = "";
		}
		this.postalcode = postalcode;
	} ;
	
	this.setStateID = function(stateid) {
		if (typeof stateid == 'undefined') {
			var stateid = 0;
		}
		this.stateid = stateid;
	}

	this.getPostalCode = function() {
		return this.postalcode;
	} ;     
	
	this.getPostalCodeID = function() {
		return this.postalcodeid;
	} ;
	
	this.getStateID = function() {
		return this.stateid;
	}
	
	this.toString = function() {
		return this.getPostalCode() + " , " + this.getCityName() + " , " + this.getCountyName() + " , " + this.getStateName() + " , " +  this.getStateID() + " , " + this.getPostalCodeID();
	} ;
	
}

function SearchAreaClass() {
	
	this.setSearchAreaDefaultRadius = function(defaultradius) {
		if (typeof defaultradius == 'undefined') {
			var defaultradius = "";
		}
		var tmp = defaultradius;
		if (!isNaN(tmp)) {
			tmp = "'" + defaultradius + "'";
		}
		
		this.defaultradius = tmp;
	} ;

	this.setSearchAreaQueryRadius = function(queryradius) {
		if (typeof queryradius == 'undefined') {
			var queryradius = "'10'";
		}
		this.queryradius = queryradius
	}
	
	this.getSearchAreaQueryRadius = function() {
		return this.queryradius;
	}

	/*
		Defines the CSS className for the "bold" font color; now is Green
	*/

	this.setSearchAreaBoldClass = function(boldclass) {
		if (typeof boldclass == 'undefined') {
			var boldclass = "";
		}
		this.boldclass = boldclass;
	} ;
	
	this.setSearchAreaDefCursor = function(defcursor) {
		if (typeof defcursor == 'undefined') {
			var defcursor = "";
		}
		this.defcursor = defcursor;
	} ;   
	
	this.setSearchAreaBoldCursor = function(boldcursor) {
		if (typeof boldcursor == 'undefined') {
			var boldcursor = "";
		}
		this.boldcursor = boldcursor;
	} ;
	
	/*
		Defines the css className for the "regular" font color;
	*/

	this.setSearchAreaDefClass = function(classvalue) {
		if (typeof classvalue == 'undefined') {
			var classvalue = "";
		}
		this.classvalue = classvalue;
	} ;
	
	this.returnSearchAreaRadiusMap = function(id) {
		if (typeof id == 'undefined') {
			var id = "";
		}

		//alert("returnSearchAreaRadiusMap, id : " + id);
		radius = 0;
		switch(id) {
			case 1:
				radius = '10';
				break;
			case 2:
				radius = '25';
				break;
			case 3:
				radius = '50';
				break;
			case 4:
				radius = '100';
				break;
			case 5:
				radius = '250';
				break;
			case 6:
				radius = 'state';
				break;
			case 7:
				radius = 'usa';
			}
		
		return radius;
	} ;
	
	this.setSearchAreaBoolean = function(ba) {
		if (typeof ba == 'undefined') {
			var ba = "";
		}
		this.ba = ba;
	} ;
	
	this.getSearchAreaDefaultRadius = function() {
		return this.defaultradius;
	} ;
	
	this.getSearchAreaBoldClass = function() {
		return this.boldclass;
	} ;
	
	this.getSearchAreaBoolean = function() {
		return this.ba;
	} ;
	
	this.getSearchAreaDefCursor = function() {
		return this.defcursor;
	} ; 
	
	this.getSearchAreaDefClass = function() {
		return this.classvalue;
	} ;
	
	this.getSearchAreaBoldCursor = function() {
		return this.boldcursor;
	} ;
}
/*
 <div id="search-area"> <!-- div search-area Open -->
        <a onMouseover="setGreen('radius1')" onMouseout="setNormal('radius1')" onclick="processLocoolly('10')" class = "boldRadiusText" id = "radius1">
     	Search Locoolly
     	</a>
         </span>
     <span class="TextMiles"> | </span>
     <span class="within">within</span></a>
     <a onMouseover="setGreen('radius2')" onMouseout="setNormal('radius2')" onclick="processLocoolly('25')"    class="boldRadiusText" id = "radius2">25 <span class="TextMiles">miles</span></a><span class="TextMiles">  | </span>
     <a onMouseover="setGreen('radius3')" onMouseout="setNormal('radius3')" onclick="processLocoolly('50')"    class="boldRadiusText" id = "radius3">50 <span class="TextMiles">miles</span></a><span class="TextMiles"> | </span>
     <a onMouseover="setGreen('radius4')" onMouseout="setNormal('radius4')" onclick="processLocoolly('100')"   class="boldRadiusText" id = "radius4">100 <span class="TextMiles">miles</span></a><span class="TextMiles"> | </span>
     <a onMouseover="setGreen('radius5')" onMouseout="setNormal('radius5')" onclick="processLocoolly('250')"   class="boldRadiusText" id = "radius5">250 <span class="TextMiles">miles</span></a><span class="TextMiles"> | </span>
     <a onMouseover="setGreen('radius6')" onMouseout="setNormal('radius6')" onclick="processLocoolly('state')" class="boldRadiusText" id = "radius6">State <span class="TextMiles"></span></a><span class="TextMiles"> | </span>
     <a onMouseover="setGreen('radius7')" onMouseout="setNormal('radius7')" onclick="processLocoolly('usa')" class="boldRadiusText" id = "radius7">National </a>
     </div> <!-- div search-area Closed -->
*/
// RaidusClass is a child of SearchAreaClass.
function RadiusClass() {
	this.setRadiusName = function(name) {
		if (typeof name == 'undefined') {
			var name = "";
		}

		if (arguments.length ==0) {
			alert("setRadiusName argument, name, missing!");
			return -1;
		}
		this.name = name;
	} ;
	
	this.setSearchAreaRadius = function(radius) {
		if (arguments.length ==0) {
			alert("setSearchAreaRadius argument, radius, missing!");
			return -1;
		}
		this.radius = radius;
	} ;
	/*
		Sets the radius id used by HTML; radius1, radisu2, etc.
	*/
	this.setSearchAreaRadiusId = function(id) {
		if (arguments.length ==0) {
			alert("setSearchAreaRadiusID argument, id, missing!");
			return -1;
		}
		this.id = id;
	} ;

	this.setSearchAreaValue = function(value) {
		if (arguments.length ==0) {
			alert("setSearchAreaValue argument, value, missing!");
			return -1;
		}
		this.value = value;
	} ;
	
	this.setSearchAreaRadius = function(radius) {
		if (arguments.length ==0) {
			alert("setSearchAreaRadius argument, radius, missing!");
			return -1;
		}
		this.radius = radius;
	} ;
	
	this.getSearchAreaRadiusId = function() {
		return this.id;
	} ;

	// getSearchAreaRadius returns the xxx
	this.getSearchAreaRadius = function() {
		return this.radius;
	} ;

	this.getSearchAreaValue = function() {
		return this.value;
	} ;
	
	this.getRadiusName = function() {
		return this.name;
	} ;
	
	this.toString = function() {
		var ret = "";
		var i;
		for (i = 1; i <= 7; i++) {
			ret += "radius" + i + ": " + this.returnSearchAreaRadiusMap(i) + "\n";
		}
		
		return ret;
	} ;
}

function LocoollyMap() {
	//var MapLink;
	//var PinID = 0;
	this.PinID = 0;
	this.MapLink = 0;
	this.Map = 0;

	this.setMapWidth = function(mapwidth) {
		if (typeof mapwidth == "undefined") {
			var mapwidth = 100;
		}
		this.mapwidth = mapwidth;
	} ;
	
	this.setMapHeight = function(mapheight) {
		if (typeof mapheight == "undefined") {
			var mapheight = 100;
		}
		this.mapheight = mapheight;
	} ;
	

	this.getMapWidth = function() {
		return this.mapwidth;
	} ;
	
	this.getMapHeight = function() {
		return this.mapheight;
	} ;
}
// define the SearchClass class
function SearchClass() {
	this.setHTMLref = function(inputelement) {
		if (arguments.length ==0) {
			alert("setHTLMref argument, inputelement, missing!");
			return -1;
		}
		this.inputelement = inputelement;
	} ;
	/*
	InputSearchWords.CompletedSearchPhrase = false;
		InputSearchWords.removeSearch = false;
		//InputSearchWords.defvalue = "business names, brands, products or services";
		//InputSearchWords.defclassName = "searchwords";
		//InputSearchWords.successfulSearch = -1; oops! Set in php.
	*/
	this.setDOMref = function(domref) {
		if (arguments.length ==0) {
			alert("setDOMref argument, domref, missing!");
			return -1;
		}
		this.domref = domref;
	} ;
	
	this.setClassName = function(classname) {
		if (arguments.length ==0) {
			alert("setClassName argument, classname, missing!");
			return -1;
		}
		this.setclassname = classname;
	} ;
	
	this.setDefClassName = function(defclassname) {
		if (arguments.length ==0) {
			alert("setDefClassName argument, defclassname, missing!");
			return -1;
		}
		this.defclassname = defclassname;
	} ;
	
	this.setErrorClassName = function(errorclassname) {
		if (arguments.length ==0) {
			alert("setErrorClassName argument, errorclassname, missing!");
			return -1;
		}
		this.errorclassname = errorclassname;
	} ;
	
	this.setDefValue = function(defvalue) {
		if (arguments.length ==0) {
			alert("setDefValue argument, defvalue, missing!");
			return -1;
		}
		this.defvalue = defvalue;
	} ;
	
	this.setCompletedSearch = function(completedsearch) {
		if (arguments.length ==0) {
			alert("gsetCompletedSearch argument, completedsearch, missing!");
			return -1;
		}
		this.completedsearch = completedsearch;
	} ;
	
	this.setRemoveSearch = function(removesearch) {
		if (arguments.length ==0) {
			alert("setRemoveSearch argument, removesearch, missing!");
			return -1;
		}
		this.removesearch = removesearch;
	} ;
	
	this.setSuccessfulSearch = function(successfulsearch) {
		if (arguments.length ==0) {
			alert("setSuccessfulSearch argument, successfulsearch, missing!");
			return -1;
		}
		this.successfulsearch = successfulsearch;
	} ;
	
	this.setSearchWordsID = function(searchwordsid) {
		if (arguments.length ==0) {
			alert("setSearchWordsID argument, searchwordsid, missing!");
			return -1;
		}
		this.searchwordsid = searchwordsid;
	} ;
	
	this.setSearchCategoryID = function(searchcategoryid) {
		if (arguments.length ==0) {
			alert("setSearchCategoryID argument, searchcategoryid, missing!");
			return -1;
		}
		this.searchcategoryid = searchcategoryid;
	} ;
	
	this.setPostalCodeID = function(postalcodeid) {
		if (arguments.length ==0) {
			alert("setPostalCodeID argument, postalcodeid, missing!");
			return -1;
		}
		this.postalcodeid = postalcodeid;
	} ;
	
	this.getHTMLref = function() {
		return this.inputelement;
	} ;
	
	this.getDOMref = function() {
		return this.domref;
	} ;
	
	this.getClassName = function() {
		return this.classname;
	} ;
	
	this.getDefClassName = function() {
		return this.defclassname;
	} ;
	
	this.getDefValue = function() {
		return this.defvalue;
	} ;
	
	this.getErrorClassName = function() {
		return this.errorclassname;
	} ;
	
	this.getCompletedSearch = function() {
		return this.completedsearch;
	} ;
	
	this.getRemoveSearch = function() {
		return this.removesearch;
	} ;
	
	this.getSuccessfulSearch = function() {
		return this.successfulsearch;
	} ;
	
	this.getSearchWordsID = function() {
		//console.log("SearchClass, searchwordsid : " + this.searchwordsid);
		return this.searchwordsid;
	} ;
	
	this.getSearchCategoryID = function() {
		return this.searchcategoryid;
	} ;
	
	this.getPostalCodeID = function() {
		return this.postalcodeid;
	} ;
	
	this.toString = function() {
		return "HTMLref : " + this.inputelement + " DOMref : " + this.domref + " defclassname : " + this.defclassname + " errorclassname : " + this.errorlcassname + " defvalue : " + this.defvalue;
	} ;
	
}

// define the SearchWordsClass class
function SearchWordsClass() {
	this.setSelectType = function(select) {
		if (typeof select == 'undefined') {
			var select;
		}
		this.select = trimSpaces(select);
	}

	this.setSearchWordsID = function(searchwordsid) {
		if (arguments.length ==0) {
			alert("setSearchWordsID argument, searchwordsid, missing!");
			return -1;
		}
		this.searchwordsid = searchwordsid;
	} ;
	
	this.setPriorSearchWordsID = function(priorsearchwordsid) {
		if (arguments.length ==0) {
			alert("setPriorSearchWordsID argument, priorsearchwordid, missing!");
			return -1;
		}
		this.priorsearchwordsid = priorsearchwordsid;
	} ;
	
	this.setSearchWordsName = function(wordsname) {
		if (arguments.length ==0) {
			alert("setSearchWordsName argument, wordsname, missing!");
			return -1;
		}
		wordsname = escape(wordsname);
		this.wordsname = wordsname;
	} ;
	
	this.setSearchWordsCount = function(count) {
		if (arguments.length ==0) {
			alert("setSearchWordsCount argument, count, missing!");
			return -1;
		}
		this.count = count;
	} ;
	
	this.setDateModified = function(datemodified) {
		if (typeof datemodified == 'undefined') {
			var datemodified = "";
		}
		
		this.datemodified = datemodified;
	} ;
	this.setSearchWordsQuery = function(query) {
		this.query = query;
	} ;
	
	this.getDateModified = function() {
		return this.datemodified;
	} ;
	
	this.getSearchWordsName = function() {
		var wordsname;
		wordsname = unescape(this.wordsname);
		wordsname = wordsname.replace(/\%2B/g,"+");
		wordsname = wordsname.replace(/\%2F/g,"/");
		wordsname = wordsname.replace(/\+/g," ");
		//wordsname = wordsname.replace(/  /g," ");
		wordsname = wordsname.replace(/\\/i,"");
		wordsname = wordsname.replace(/\%2C/g,",");
		wordsname = wordsname.replace(/\%26/g,"&");
		wordsname = wordsname.replace(/\%27/g,"'");
		wordsname = wordsname.replace(/\%28/g,"(");
		wordsname = wordsname.replace(/\%29/g,")");
	
		return wordsname;
	} ;
	
	this.getSearchWordsID = function() {
		//console.log("SearchWordsClass, getSearchWordsID : " + this.searchwordsid);
		return this.searchwordsid;
	} ;
	
	this.getSelectType = function() {
		return this.select;
	} ;
	this.getPriorSearchWordsID = function() {
		return this.priorsearchwordsid;
	} ;
	
	this.getSearchWordsCount = function() {
		return this.count;
	} ;
	
	this.toString = function() {
		//return "words id : " + this.searchwordsid + " words name : " + this.getSearchWordsName();
		return "words id : " + this.getSearchWordsID() + " words name : " + this.getSearchWordsName() + "words count : " + this.getSearchWordsCount();
		//return this.getSearchWords() + this.searchwordsid;
	} ;
		
	this.debug = function() {
		//return "words id : " + this.searchwordsid + " words name : " + this.getSearchWordsName();
		return "words id : " + this.getSearchWordsID() + " words name : " + this.getSearchWordsName();
		//return this.getSearchWords() + this.searchwordsid;
	} ;
	
	this.getSearchWordsQuery = function() {
		if (typeof this.query == 'undefined') {
			this.query = "No query set for this session";
		}
		if (this.query == '') {
			this.query = "No query set for this session";
		}
		return this.query;
	}

	/*
		After displaying the current Client (ala this.displayClient() ), then
		add the "click to continue" notation
	*/
	this.displayFooter = function(popups,type) {
		//alert("SearchWords.displayFooter");

		//var type = Web.getSelectType();
		var canceltext = "";
		var responsediv = document.createElement("div");
		responsediv.id = "selectfooter";
		var canceltextdiv = document.createElement("div");
	
		//alert("type : " + type);
		if (type == "insert") {
			var responsetext = document.createTextNode("Click here to insert");
			responsediv.onclick = handleSearchWordsNode;
		}
		
		if (type == "view") {
			var responsetext = document.createTextNode("Click here to continue");
			responsediv.onclick = handleSearchWordsNode;
		}
		
		if (type == "edit") {
			var responsetext = document.createTextNode("Click here to update record");
			responsediv.onclick = handleSearchWordsNode;
			canceltext = document.createTextNode("Click here to cancel update");
			canceltextdiv.onclick = deleteFooter;
		}
		
		if (type == "delete") {
			var responsetext = document.createTextNode("Click here to delete record");
			responsediv.onclick = handleSearchWordsNode;
			canceltext = document.createTextNode("Click here to cancel update");
			canceltextdiv.onclick = deleteFooter;
		}
			
		responsetext.id = "action";
		responsediv.appendChild(responsetext);
		responsediv.className = "action";
		responsediv.style.cursor = "pointer";
		popups.appendChild(responsediv);
		
		if (canceltext != "") {
			canceltextdiv.appendChild(canceltext);
			canceltextdiv.className = "action"
			canceltextdiv.style.cursor = "pointer";
			popups.appendChild(canceltextdiv);
		}
	}

	
	/*
	Called from the JavaScript within the ViewSearchWords.php-generated display with onclick
	*/
	this.querySearchWordsEntry = function(SearchWordsID, type) {
		//Web.setCityName("Yuba+City");
		//alert(Web.getCityName());
	
		SearchWords = new SearchWordsClass();
		var popups = document.getElementById('entrypopups');
		
		if (Locoolly.getDebug())
			traceLocoolly("querySearchWordsEntry , type : " + type);
		if (type == "insert") {
			SearchWords.setSearchWordsID(0);
			SearchWords.setSearchWordsName("");
			SearchWords.setSelectType(type);
			SearchWords.setDateModified("");
			SearchWords.displaySearchWords(popups);
			//handleSearchWordsNode();
		}
		var popups;
		//alert("type : " + type);
		
		if (!SearchWords) {
			alert("querySearchWordsEntry : Cannot open class SearchWordsClass!");
			return false;
		}
	
		if (type == "") {
			return false;
		}
	
		var url="/Production/getSearchWordsEntry.php";
		url=url+"?SearchWordsID="+SearchWordsID;
		url=url+"&type="+type;
		url=url+"&sid="+Math.random();
	
		if (Locoolly.getDebug())
			traceLocoolly("getSearchWordsEntry.php : " + url);
	
		EntryXML.onreadystatechange=dummy;
		EntryXML.open("GET",url,false);
		EntryXML.send(null);
	
		var popups;
		var results;
	
		var xmlDoc = EntryXML.responseXML;	
		if (xmlDoc) {
			var tempDiv;
			var myDiv;
			var myOption;
			var CategoryID;
			var CategoryName;
			var myText;
			//alert("entryQuery text : " + EntryXML.responseText);
			
			popups = document.getElementById('entrypopups');
			if (!popups) {
				alert("entryQuery : could not find entrypopups");
				return false;
			}
	
			var x = xmlDoc.getElementsByTagName('error');
			var err = x[0].firstChild.nodeValue;
	
			if (err!= 0) {
				alert("CategoryResults error: " + err);
				return;
			}
	
			var x = xmlDoc.getElementsByTagName('count');
			var count = x[0].firstChild.nodeValue;
			//alert("count : " + count);
	
			var tagSearchWordsID = xmlDoc.getElementsByTagName("SearchWordsID");
			var tagSearchWordsName = xmlDoc.getElementsByTagName("SearchWordsName");
			var tagDateModified = xmlDoc.getElementsByTagName('DateModified');
	
			for (i = 0; i< count; i++) {
					SearchWords.setSelectType(type);
					SearchWords.setSearchWordsID(tagSearchWordsID[i].firstChild.nodeValue);
					(tagSearchWordsName[i].firstChild != null) ? value = tagSearchWordsName[i].firstChild.nodeValue : value = "" ;
					SearchWords.setSearchWordsName(value);
	
					(tagDateModified[i].firstChild != null) ? value = tagDateModified[i].firstChild.nodeValue : value = "";
					SearchWords.setDateModified(value);
					//alert("setdatemodified!");
	
					SearchWords.displaySearchWords(popups);
					}
			SearchWords.displayFooter(popups,type);
		}
	}

	this.displaySearchWords = function(popups) {
		if (!popups)
		{
			alert("Whoops: can't open entrypopups");
			return false;
		}

		if (Locoolly.getDebug())
			traceLocoolly("displaySearchWords, starting");

		//alert("popups : " + popups);

		var tempDiv = document.createElement("div");
		tempDiv.id = "adwrapper";
		popups.appendChild(tempDiv);

		/*
			Block for SearchWords
		*/

		var searchwordsnametext = document.createTextNode("SearchWords");
		var searchwordsnamediv = document.createElement("div");
		searchwordsnamediv.id = "SearchWordsName";
		searchwordsnamediv.className = "entryDisplay";
		searchwordsnamediv.appendChild(searchwordsnametext);
		tempDiv.appendChild(searchwordsnamediv);
		searchwordsnamediv.appendChild(searchwordsnametext);
		var searchwordsnameinput = document.createElement("input");
		searchwordsnameinput.type = 'text';
		searchwordsnameinput.value = this.getSearchWordsName();
		searchwordsnameinput.name = "SearchWordsNameInput";
		searchwordsnameinput.id = "SearchWordsNameInput";
		searchwordsnameinput.className = "inputDisplay";
		searchwordsnameinput.size = 80;
		searchwordsnamediv.appendChild(searchwordsnameinput);
		tempDiv.appendChild(searchwordsnamediv);


		
		/*
			Block for DateModified
		*/

		var datemodifiedtext = document.createTextNode("DateModified");
		var datemodifieddiv = document.createElement("div");
		datemodifieddiv.id = "SearchWordsName";
		datemodifieddiv.className = "entryDisplay";
		datemodifieddiv.appendChild(datemodifiedtext);
		tempDiv.appendChild(datemodifieddiv);
		datemodifieddiv.appendChild(datemodifiedtext);
		var datemodifiedinput = document.createElement("input");
		datemodifiedinput.type = 'text';
		datemodifiedinput.value = this.getDateModified();
		datemodifiedinput.name = "SearchWordsNameInput";
		datemodifiedinput.id = "SearchWordsNameInput";
		datemodifiedinput.className = "inputDisplay";
		datemodifiedinput.size = 20;
		datemodifieddiv.appendChild(datemodifiedinput);
		tempDiv.appendChild(datemodifieddiv);
		
		/*
			Block for SearchWordsID Ref
		*/

		var searchwordsidreftext = document.createTextNode("SearchWordsID Ref");
		var searchwordsidrefdiv = document.createElement("div");
		searchwordsidrefdiv.id = "SearchWordsName";
		searchwordsidrefdiv.className = "entryDisplay";
		searchwordsidrefdiv.appendChild(searchwordsidreftext);
		tempDiv.appendChild(searchwordsidrefdiv);
		searchwordsidrefdiv.appendChild(searchwordsidreftext);
		var searchwordsidrefinput = document.createElement("input");
		searchwordsidrefinput.type = 'text';
		searchwordsidrefinput.value = this.getSearchWordsID();
		searchwordsidrefinput.name = "SearchWordsNameInput";
		searchwordsidrefinput.id = "SearchWordsNameInput";
		searchwordsidrefinput.className = "inputDisplay";
		searchwordsidrefinput.size = 20;
		searchwordsidrefdiv.appendChild(searchwordsidrefinput);
		tempDiv.appendChild(searchwordsidrefdiv);

		var searchwordsiddiv = document.createElement("div");
		searchwordsiddiv.id = "SearchWordsID";
		searchwordsidinput = document.createElement("input");
		searchwordsidinput.type = "hidden";
		searchwordsidinput.id = "SearchWordsIDInput"
		searchwordsidinput.value = this.getSearchWordsID();
		searchwordsiddiv.appendChild(searchwordsidinput);
		tempDiv.appendChild(searchwordsiddiv);
	}
}

//define the SearchCategoryClass class
function SearchCategoryClass() {
	this.setSearchCategoryID = function(searchcategoryid) {
		if (arguments.length ==0) {
			alert("setSearchCategoryID argument, searchcategoryid, missing!");
			return -1;
		}
		this.searchcategoryid = searchcategoryid;
	} ;
	
	this.setSearchCategoryName = function(categoryname) {
		if (arguments.length ==0) {
			alert("setSearchCategoryName argument, categoryname, missing!");
			return -1;
		}
		categoryname = escape(categoryname);
		this.categoryname = categoryname;
	} ;
	
	this.setSearchCategoryCount = function(count) {
		if (arguments.length ==0) {
			alert("setSearchCategoryCount argument, count, missing!");
			return -1;
		}
		this.count = count;
	} ;
	
	this.setSelectType = function(select) {
		if (typeof select == 'undefined') {
			var select;
		}
		this.select = trimSpaces(select);
	}
	
	this.setDateModified = function(datemodified) {
		if (typeof datemodified == 'undefined') {
			var datemodified = "";
		}
		
		this.datemodified = trimSpaces(datemodified);
	} ;
	
	this.getSearchCategoryName = function() {
		var categoryname;
		categoryname = unescape(this.categoryname);
		categoryname = categoryname.replace(/\%2B/g,"+");
		categoryname = categoryname.replace(/\%2F/g,"/");
		categoryname = categoryname.replace(/\+/g," ");
		//categoryname = categoryname.replace(/  /g," ");
		categoryname = categoryname.replace(/\\/i,"");
		categoryname = categoryname.replace(/\%2C/g,",");
		categoryname = categoryname.replace(/\%26/g,"&");
		categoryname = categoryname.replace(/\%27/g,"'");
		categoryname = categoryname.replace(/\%28/g,"(");
		categoryname = categoryname.replace(/\%29/g,")");
	
		return categoryname;
	} ;
	
	this.getSearchCategoryID = function() {
		return this.searchcategoryid;
	} ;
	
	this.getSearchCategoryCount = function() {
		return this.count;
	} ;
	
	this.getSelectType = function() {
		return this.select;
	}
	
	this.getDateModified = function() {
				
		return this.datemodified;
	} ;
	
	this.toString = function() {
		return "category id : " + this.searchcategoryid + " category name : " + this.getSearchCategoryName();
		//return this.getCategoryWords() + this.searchcategoryid;
	} ;
	
		/*
	Called from the JavaScript within the ViewSearchWords.php-generated display with onclick
	*/
	this.querySearchCategoryEntry = function(SearchCategoryID, type) {
		//Web.setCityName("Yuba+City");
		//alert(Web.getCityName());
	
		SearchCategory = new SearchCategoryClass();
		var popups = document.getElementById('entrypopups');
		
		if (Locoolly.getDebug())
			traceLocoolly("querySearchCategoryEntry , type : " + type);
		if (type == "insert") {
			SearchCategory.setSearchCategoryID(0);
			SearchCategory.setSearchCategoryName("");
			SearchCategory.setSelectType(type);
			SearchCategory.setDateModified("");
			SearchCategory.displaySearchCategory(popups);
			//handleSearchCategoryNode();
		}
		var popups;
		//alert("type : " + type);
		
		if (!SearchCategory) {
			alert("querySearchCategoryEntry : Cannot open class SearchCategoryClass!");
			return false;
		}
	
		if (type == "") {
			return false;
		}
	
		var url="/Production/getSearchCategoryEntry.php";
		url=url+"?SearchCategoryID="+SearchCategoryID;
		url=url+"&type="+type;
		url=url+"&sid="+Math.random();
	
		if (Locoolly.getDebug())
			traceLocoolly("getSearchCategoryEntry.php : " + url);
	
		EntryXML.onreadystatechange=dummy;
		EntryXML.open("GET",url,false);
		EntryXML.send(null);
	
		var popups;
		var results;
	
		var xmlDoc = EntryXML.responseXML;	
		if (xmlDoc) {
			var tempDiv;
			var myDiv;
			var myOption;
			var CategoryID;
			var CategoryName;
			var myText;
			//alert("entryQuery text : " + EntryXML.responseText);
			
			popups = document.getElementById('entrypopups');
			if (!popups) {
				alert("entryQuery : could not find entrypopups");
				return false;
			}
	
			var x = xmlDoc.getElementsByTagName('error');
			var err = x[0].firstChild.nodeValue;
	
			if (err!= 0) {
				alert("CategoryResults error: " + err);
				return;
			}
	
			var x = xmlDoc.getElementsByTagName('count');
			var count = x[0].firstChild.nodeValue;
			//alert("count : " + count);
	
			var tagSearchCategoryID = xmlDoc.getElementsByTagName("SearchCategoryID");
			var tagSearchCategoryName = xmlDoc.getElementsByTagName("SearchCategoryName");
			var tagDateModified = xmlDoc.getElementsByTagName('DateModified');
	
			for (i = 0; i< count; i++) {
					SearchCategory.setSelectType(type);
					SearchCategory.setSearchCategoryID(tagSearchCategoryID[i].firstChild.nodeValue);
					(tagSearchCategoryName[i].firstChild != null) ? value = tagSearchCategoryName[i].firstChild.nodeValue : value = "" ;
					SearchCategory.setSearchCategoryName(value);
	
					(tagDateModified[i].firstChild != null) ? value = tagDateModified[i].firstChild.nodeValue : value = "";
					SearchCategory.setDateModified(value);
					//alert("setdatemodified!");
	
					SearchCategory.displaySearchCategory(popups);
					}
			SearchCategory.displayFooter(popups,type);
		}
	}
	
	this.displaySearchCategory = function(popups) {
		if (!popups)
			{
				alert("Whoops: can't open entrypopups");
				return false;
			}
	
			if (Locoolly.getDebug())
				traceLocoolly("displaySearchCategory, starting");
	
			//alert("popups : " + popups);
	
			var tempDiv = document.createElement("div");
			tempDiv.id = "adwrapper";
			popups.appendChild(tempDiv);
	
			/*
				Block for SearchCategory
			*/
	
			var searchwordsnametext = document.createTextNode("SearchCategory");
			var searchwordsnamediv = document.createElement("div");
			searchwordsnamediv.id = "SearchCategoryName";
			searchwordsnamediv.className = "entryDisplay";
			searchwordsnamediv.appendChild(searchwordsnametext);
			tempDiv.appendChild(searchwordsnamediv);
			searchwordsnamediv.appendChild(searchwordsnametext);
			var searchwordsnameinput = document.createElement("input");
			searchwordsnameinput.type = 'text';
			searchwordsnameinput.value = this.getSearchCategoryName();
			searchwordsnameinput.name = "SearchCategoryNameInput";
			searchwordsnameinput.id = "SearchCategoryNameInput";
			searchwordsnameinput.className = "inputDisplay";
			searchwordsnameinput.size = 80;
			searchwordsnamediv.appendChild(searchwordsnameinput);
			tempDiv.appendChild(searchwordsnamediv);
	
	
			
			/*
				Block for DateModified
			*/
	
			var datemodifiedtext = document.createTextNode("DateModified");
			var datemodifieddiv = document.createElement("div");
			datemodifieddiv.id = "SearchCategoryName";
			datemodifieddiv.className = "entryDisplay";
			datemodifieddiv.appendChild(datemodifiedtext);
			tempDiv.appendChild(datemodifieddiv);
			datemodifieddiv.appendChild(datemodifiedtext);
			var datemodifiedinput = document.createElement("input");
			datemodifiedinput.type = 'text';
			datemodifiedinput.value = this.getDateModified();
			datemodifiedinput.name = "SearchCategoryNameInput";
			datemodifiedinput.id = "SearchCategoryNameInput";
			datemodifiedinput.className = "inputDisplay";
			datemodifiedinput.size = 20;
			datemodifieddiv.appendChild(datemodifiedinput);
			tempDiv.appendChild(datemodifieddiv);
			
			/*
				Block for SearchCategoryID Ref
			*/
	
			var searchwordsidreftext = document.createTextNode("SearchCategoryID Ref");
			var searchwordsidrefdiv = document.createElement("div");
			searchwordsidrefdiv.id = "SearchCategoryName";
			searchwordsidrefdiv.className = "entryDisplay";
			searchwordsidrefdiv.appendChild(searchwordsidreftext);
			tempDiv.appendChild(searchwordsidrefdiv);
			searchwordsidrefdiv.appendChild(searchwordsidreftext);
			var searchwordsidrefinput = document.createElement("input");
			searchwordsidrefinput.type = 'text';
			searchwordsidrefinput.value = this.getSearchCategoryID();
			searchwordsidrefinput.name = "SearchCategoryNameInput";
			searchwordsidrefinput.id = "SearchCategoryNameInput";
			searchwordsidrefinput.className = "inputDisplay";
			searchwordsidrefinput.size = 20;
			searchwordsidrefdiv.appendChild(searchwordsidrefinput);
			tempDiv.appendChild(searchwordsidrefdiv);
	
			var searchwordsiddiv = document.createElement("div");
			searchwordsiddiv.id = "SearchCategoryID";
			searchwordsidinput = document.createElement("input");
			searchwordsidinput.type = "hidden";
			searchwordsidinput.id = "SearchCategoryIDInput"
			searchwordsidinput.value = this.getSearchCategoryID();
			searchwordsiddiv.appendChild(searchwordsidinput);
			tempDiv.appendChild(searchwordsiddiv);
		}
		
			/*
	/*
		After displaying the current Client (ala this.displayClient() ), then
		add the "click to continue" notation
	*/
	this.displayFooter = function(popups,type) {
		//alert("SearchCategory.displayFooter");

		//var type = Web.getSelectType();
		var canceltext = "";
		var responsediv = document.createElement("div");
		responsediv.id = "selectfooter";
		var canceltextdiv = document.createElement("div");
	
		//alert("type : " + type);
		if (type == "insert") {
			var responsetext = document.createTextNode("Click here to insert");
			responsediv.onclick = handleSearchCategoryNode;
		}
		
		if (type == "view") {
			var responsetext = document.createTextNode("Click here to continue");
			responsediv.onclick = handleSearchCategoryNode;
		}
		
		if (type == "edit") {
			var responsetext = document.createTextNode("Click here to update record");
			responsediv.onclick = handleSearchCategoryNode;
			canceltext = document.createTextNode("Click here to cancel update");
			canceltextdiv.onclick = deleteFooter;
		}
		
		if (type == "delete") {
			var responsetext = document.createTextNode("Click here to delete record");
			responsediv.onclick = handleSearchCategoryNode;
			canceltext = document.createTextNode("Click here to cancel update");
			canceltextdiv.onclick = deleteFooter;
		}
			
		responsetext.id = "action";
		responsediv.appendChild(responsetext);
		responsediv.className = "action";
		responsediv.style.cursor = "pointer";
		popups.appendChild(responsediv);
		
		if (canceltext != "") {
			canceltextdiv.appendChild(canceltext);
			canceltextdiv.className = "action"
			canceltextdiv.style.cursor = "pointer";
			popups.appendChild(canceltextdiv);
		}
	}
	}
function CityZipClass() {

	var cityname = "";
	var countyname = "";
	var statename = "";

	this.setCityZipName = function(cityn) {
		if (arguments.length ==0) {
			alert("setCityZipName argument, cityn, missing!");
			return -1;
		}
		cityname = escape(cityn);
		this.cityn = cityname;
	} ;

	this.setCountyZipName = function(countyn) {
		if (arguments.length ==0) {
			alert("setCountyZipName argument, countyn, missing!");
			return -1;
		}
		this.countyn = escape(countyn);
	} ;
	
	this.setStateZipName = function(staten) {
		if (arguments.length ==0) {
			alert("setStateZipName argument, staten, missing!");
			return -1;
		}
		this.staten = staten;
	} ;
	
	this.setClassName = function(classname) {
		if (arguments.length ==0) {
			alert("setClassName argument, classname, missing!");
			return -1;
		}
		this.setclassname = classname;
	} ;

	this.setZipFlag = function(zipflag) {
		if (arguments.length ==0) {
			alert("setZipFlag argument, zipflag, missing!");
			return -1;
		}
		this.zipflag = zipflag;
	} ;
	
	// method used to "escape" value set to InputCityZip that is passed to TravelTo!
	this.setInputCityZip = function(inputcityzip) {
		if (arguments.length ==0) {
			alert("setInputCityZIp argument, inputcityzip, missing!");
			return -1;
		}
		inputcityzip = unescape(inputcityzip);
		inputcityzip = inputcityzip.replace(/\%20/g," ");
		inputcityzip = inputcityzip.replace(/\%2C/g,",");
		//alert("setInputCityZip : " + inputcityzip);
		this.inputcityzip = escape(inputcityzip);
	} ;
	// method used to set InputCityZip (must be escaped since it is passed as value to TravelTo!
	this.getInputCityZip = function() {
		var inputcityzip;
		inputcityzip = unescape(this.inputcityzip);
		return inputcityzip;
	}
	
	this.setvalidZipFlag = function(validzipflag) {
		if (arguments.length ==0) {
			alert("setvalidZipFlag argument, validzipflag, missing!");
			return -1;
		}
		this.validzipflag = validzipflag;
	} ;
	
	this.getCityZipName = function() {
		var tmp;
		tmp = unescape(this.cityn);
		tmp = tmp.replace(/\%2B/g,"+");
		tmp = tmp.replace(/\%2F/g,"/");
		tmp = tmp.replace(/\+/g," ");
		//cityname = cityname.replace(/  /g," ");
		tmp = tmp.replace(/\\/i,"");
		tmp = tmp.replace(/\%20/g," ");
		tmp = tmp.replace(/\%2C/g,",");
		tmp = tmp.replace(/\%26/g,"&");
		tmp = tmp.replace(/\%27/g,"'");
		tmp = tmp.replace(/\%28/g,"(");
		tmp = tmp.replace(/\%29/g,")");

		return tmp;
	} ;

	this.getCountyZipName = function() {
		var tmp;
		tmp = unescape(this.countyn);
		tmp = tmp.replace(/\%2B/g,"+");
		tmp = tmp.replace(/\%2F/g,"/");
		tmp = tmp.replace(/\+/g," ");
		//countyname = countyname.replace(/  /g," ");
		tmp = tmp.replace(/\\/i,"");
		tmp = tmp.replace(/\%2C/g,",");
		tmp = tmp.replace(/\%26/g,"&");
		tmp = tmp.replace(/\%27/g,"'");
		tmp = tmp.replace(/\%28/g,"(");
		tmp = tmp.replace(/\%29/g,")");
	
		return tmp;
	} ;
	
	this.getStateZipName = function() {
		return this.staten;
	} ;
	
	this.getZipFlag = function() {
		return this.zipflag;
	} ;
	
	this.getvalidZipFlag = function() {
		return this.validzipflag;
	} ;
	
	this.toString = function() {
		return "Cityname : " + this.getCityZipName() + " countyname : " + this.getCountyZipName() + " state: " + this.getStateZipName() + " zipflag : " + this.getZipFlag() + " validzipflag : " + this.getvalidZipFlag();
	} ;
	
	this.getClassName = function() {
		return this.classname;
	} ;

}

// define the Client class
function Client () {
	this.setPostalCode = function(postalcode) {
		if (typeof postalcode == 'undefined') {
			var postalcode = "";
		}
		this.postalcode = postalcode;
	};
	
	this.getPostalCode = function() {
		return this.postalcode;
	}
}

function Ad() {
	;
}
// define the Employee class
function Employee(num) {
	this.getNum = function() {
		return num;
	};
}

function Locoolly() {
	this.resetMessage = function() {
		this.message = "";
	} ;

	this.setProduction = function(production) {
		if (typeof production == "undefined")
			var production = "";
		this.production = production
	} ;
	
	this.setImageWidth = function(imagewidth) {
		if (arguments.length ==0) {
			alert("setImageWidth argument, imagewidth, missing!");
			return -1;
		}
		this.imaqewidth = imagewidth;
	} ;
	
	
	this.setVersion = function(version) {
		if (arguments.length ==0) {
			alert("setVersion argument, version, missing");
			return -1;
		}
		
		if (typeof version == 'undefined') {
			var version = "";
		}
		
		this.version = version;
	}
	this.setImageHeight = function(imageheight) {
		if (arguments.length ==0) {
			alert("setImageHeight argument, imageheight, missing!");
			return -1;
		}
		this.imageheight = imageheight;
	} ;
	
	this.rstSearchCount = function() {
		this.searchcount = 0;
	} ;
	
	this.incSearchCount = function() {
		this.searchcount++;
	} ;
	
	this.getSearchCount = function() {
		return this.searchcount;
	} ;
	
	this.setLinks = function (links) {
		if (arguments.length ==0) {
			alert("setLinks argument, links, missing!");
			return -1;
		}
		var temp;

		temp = document.getElementById(links);

		if (temp) {
			temp.className = "boldLinksTextHover";
		} else {
			alert("setLinks failed!");
			return false;
		}
	} ;

	this.clearLinks = function (links) {
		if (arguments.length ==0) {
			alert("clearLinks argument, links, missing!");
			return -1;
		}
		var temp;
		
		temp = document.getElementById(links);
	
		if (temp) {
			temp.className = "boldLinksText";
		} else {
			alert("clearLinks failed!");
			return false;
		}
	} ;

	this.setMessage = function(message) {
		if (arguments.length ==0) {
			alert("setMessage argument, message, missing!");
			return -1;
		}
		this.message = message;
	} ;
	
	this.addMessage = function(message) {
		if (arguments.length ==0) {
			alert("addMessage argument, message, missing!");
			return -1;
		}
		this.message += message + "\n";
	} ;
	
	this.setDomain = function(domain) {
		if (arguments.length ==0) {
			alert("setDomain argument, domain, missing!");
			return -1;
		}
		this.domain = domain;
	} ;
	
	this.setDebug = function(debugvalue) {
		if (arguments.length ==0) {
			alert("setDebug argument, debugvalue, missing!");
			return -1;
		}
		//alert("setDebu is : " + debugvalue);
		if (debugvalue == "true" || debugvalue)
			debugvalue = true;
		else debugvalue = false;

		//alert("setDebug setting to : " + debugvalue);
		this.debugvalue = debugvalue;
	} ;
	
	this.getImageWidth = function() {
		return this.imaqewidth;
	} ;
	
	this.getImageHeight = function() {
		return this.imageheight;
	} ;
	
	this.getProduction = function() {
		return this.production;
	} ;

	this.debugmsg = function() {
		var str = "InputSearchWords = document.getElementById('Input-search-words')\n";
		str += "WordsClass.setDOMref(InputSearchWords)\n";
		str += "WordsClass = new SearchWordsClass();\n";
		str += "SearchCategoryArray[0].getSearchCategoryName()\n";
		str += "SearchWordsArray[0].getSearchWordsName()";
		str += "CategoryClass = new SearchCategoryClass()\n";
		str += "InputSearchCategoryID = document.getElementById('Input-search-categoryID')\n";
		str += "CategoryClass.setDOMref(InputSearchCategory)\n";
		str += "WordsClass.getSearchWordsName()\n";
		str += "CategoryClass.getSearchWordsName()\n";
		str += "Locoolly.getVersion()\n";
		
		return str;
	} ;

	this.getMessage = function() {
		return this.message;
	} ;
	
	this.getDomain = function() {
		return this.domain;
	} ;
	
	this.alertMessage = function() {
		alert ("Locoolly, Inc : " + this.message);
	} ;
	
	this.getDebug = function() {
		return this.debugvalue;
	} ;
	
	this.getVersion = function() {
		return this.version;
	}

	this.toString = function() {
		return "Locoolly, Inc\nLocoolly.debugmsg()";
	} ;
}

function PageClass() {
	var currentpage = 1;
	var lastpage = 1;
	var firstpage = 1;
	var totalpages = 0;
	
		this.resetSearchObjects = function() {
		//alert("Doing resetSearchObjects!");
		Page.setCurrentPage(1);
		//Page.getNextPage(1);
		Page.getPrevPage();
		Page.setLastPage(1);
		Page.setTotalPages(1);
		Page.setTierCount(0);
		Page.setTier1Count(0);
		Page.setTier2Count(0);
		Page.setTier3Count(0);
	
		if ((PriorRadius == 0) || (PriorRadius == "")) { 
			AreaClass.setSearchAreaDefaultRadius('10');
			setGreen('radius1');
		}
		
		//alert("resetSearchObjects, InputSearchWords.value : " + InputSearchWords.value);
		
		//deletePopups();
	} ;

	this.ResetPage = function () {

		if (Page) {
			Page.setTierCount(0);
			Page.setTier1Count(0);
			Page.setTier2Count(0);
			Page.setTier3Count(0);
			Page.setCurrentPage(1);
			//Page.getNextPage(1);
			Page.getPrevPage();
			Page.setLastPage(1);
			Page.setTotalPages(1);
			Page.setTierCount(0);
			Page.setTier1Count(0);
			Page.setTier2Count(0);
			Page.setTier3Count(0);
		}
	} ;

	this.getSilly = function() {
		var i;
		if (this.silly !== undefined) {
			alert("ooops");
		}

		i = silly;
		return i;
	} ;

	this.setButtons = function(buttons) {
		if (arguments.length ==0) {
			alert("setButtons argument, buttons, missing!");
			return -1;
		}
		this.buttons = buttons;
	} ;

	this.getButtons = function() {
		return this.buttons;
	} ;
	
	this.setTotalPages = function(pages) {
		if (arguments.length ==0) {
			alert("setTotalPages argument, pages, missing!");
			return -1;
		}
		var tmp;
		totalpages = pages;
		tmp = Math.round (totalpages / 12);

		if (tmp == 0) {
			tmp = 1;
		}

		//alert("totalpages, totalpages : " + pages + ", " + tmp);
		this.setLastPage(tmp);
	} ;
	
	this.setTierCount = function(tiercount) {
		if (typeof tiercount == 'undefined') {
			var tiercount = "";
		}
		this.tiercount = tiercount;
	} ;
	
	this.setTier1Count = function(tier1count) {
		if (typeof tier1count == 'undefined') {
			var tier1count = "";
		}
		this.tier1count = tier1count;
	} ;
	
	this.setTier2Count = function(tier2count) {
		if (typeof tier2count == 'undefined') {
			var tier2count = "";
		}
		this.tier2count = tier2count;
	} ;
	
	this.setTier3Count = function(tier3count) {
		if (typeof tier3count == 'undefined') {
			var tier3count = "";
		}
		this.tier3count = tier3count;
	} ;

	this.setCurrentPage = function(cp) {
		if (arguments.length ==0) {
			alert("setCurrentPage argument, cp, missing!");
			return -1;
		}
		currentpage = cp;
		//alert("setCurrentPage set to : " + cp);
		return cp;
	} ;

	this.setLastPage = function(lp) {
		if (typeof lp == 'undefined') {
			var lp = 1;
		}
		lastpage = lp;
		return lp;
	} ;

	this.getCurrentPage = function() {
		return currentpage;
	} ;

	this.getFirstPage = function() {
		return firstpage;
	} ;

	this.getLastPage = function() {
		return lastpage;
	} ;

	this.getPrevPage = function() {
		//alert("getPrevPage");
		var i = this.getCurrentPage() - 1;
		
		if (i < this.getFirstPage() ) {
			i = 1;
		}
		
		//this.setCurrentPage(i);
		return i;
	} ;

	this.getNextPage = function() {
		//alert("getNextPage");
		var i;
		
		i = this.getCurrentPage() + 1;
		
		if (i > this.getLastPage() ) {
			i--;
		}
		
		//this.setCurrentPage(i);
		return i;
	} ;
	
	this.getTotalPages = function() {
		return totalpages;
	} ;
	
	this.getTierCount = function() {
		return this.tiercount;
	} ;

	this.getTier1Count = function() {
		return this.tier1count;
	} ;
	
	this.getTier2Count = function() {
		return this.tier2count;
	} ;
	
	this.getTier3Count = function() {
		return this.tier3count;
	} ;

	this.clearPagesBlack = function(pages) {
		if (Locoolly.getDebug())
			traceLocoolly("clearPageBlack, pages : " + pages);

		//alert("clearPagesBlack : " + pages);
		/*
			pages: nav1, nav2, ....
		*/
		if (arguments.length ==0) {
			alert("clearPagesBlack argument, pages, missing!");
			return -1;
		}

		if (pages == "") {
			alert("clearPagesBlack : pages is null");
			return -1;
		}
		if (pages === undefined) {
			alert("clearPagesBlack : pages is undefined");
			return -1;
		}

		//console.log("clearPagesBlack, pages: " + pages + " currentpage: " + currentpage);
		var comp = pages.indexOf("nav");
		//alert("Comp is : " + comp);
		if (comp != 0) {
			alert("clearPagesBlack, nav not defined: " + pages);
			return -1;
		}
		
		var idarray = pages.split("nav");
		var id = idarray[1];
		// id contains the number of the nav#
		/*
			Values of "id", action
			Next
			Prev
			1,2,3,4
		*/
		//alert("id : " + id);

		var temp;
		
		var y;
		temp = document.getElementById(pages);

		var i;
	
		var comp
		comp = 'nav' + Page.getLastPage();

		//alert("clearPagesBlack, comparing " + pages + " with " + comp);
		if (pages == 'nav' + Page.getLastPage() ) {
			//console.log("clearPagesBlack, setting to redtext, getTotalPages() : " + Page.getTotalPages() );
			//alert("clearPagesBlack, found last page!");
			if (temp) {
				if (Locoolly.getDebug())
					traceLocoolly("clearPageBlack, setting redtext");

				temp.className = "redtext";
			}
			return;
		}
	
		if (temp) {
			//alert("pages : " + pages);   
			//alert("temp.className : " + temp.className);
			if (Locoolly.getDebug())
					traceLocoolly("clearPageBlack, setting bluetext");

				if ((pages == "navPrevious") || (pages == "navNext")) {
					temp.className = "blacktext";
				} else {
					temp.className = "bluetext";
				}
			//temp.style.cursor = "pointer";
			temp.style.cursor = "default";
		} else {
			alert("clearPages failed!");
			return false;
		}
		
		if (pages == currentpage) {
			//console.log("clearPages, setting greentexthover");
			temp.className = "greentexthover";
		}
	} ;

	this.clearPages = function(pages) {
		//alert("clearPages : " + clearPages);
		if (arguments.length ==0) {
			alert("clearPages argument, pages, missing!");
			return -1;
		}

		if (pages === "") {
			alert("clearPages : pages is null");
			return -1;
		}

		if (pages === undefined) {
			alert("clearPages : pages is undefined");
			return -1;
		}
		
		var temp;
		var y;
		temp = document.getElementById(pages);

		//var x = document.getElementsByTagName('a');
		//alert("x.length : " + x.length);
		//alert("totalpages : " + totalpages);
		//alert("this.getCurrentPage() : " + this.getCurrentPage() );
		//console.log("clearPages, pages: " + pages + " currentpage : " + currentpage + "totalpages : " + totalpages);
		var i;
	
		if (pages == 'nav' + totalpages) {
			//alert("setting to redtext");
	
			if (temp) {
				temp.className = "redtext";
				temp.style.cursor = "default";
			}
			return;
		}
	
	/*
		for (i = 0; i < x.length;i++) {
			y = document.getElementByTagName('a')[i];
		}
	*/
		if (temp) {
			//alert("pages : " + pages);   
			//alert("temp.className : " + temp.className);
			//console.log("clearPages, setting blacktext");
			temp.className = "blacktext";
			temp.className = "bluetext";
			//temp.style.cursor = "pointer";
			temp.style.cursor = "default";
		} else {
			alert("clearPages failed!");
			return false;
		}
	
		if (pages == currentpage) {
			//console.log("clearPages, setting greentexthover");
			temp.className = "greentexthover";
		}
	} ;

	this.setPagesBlack = function(pages) {
		if (arguments.length ==0) {
			alert("setPagesBlack argument, pages, missing!");
			return -1;
		}
		//alert("setPagesBlack, pages : " + pages);
		/*
		pages	1,2,3, etc, navNext, navPrevious
		*/
		if (pages === "") {
			alert("clearPagesBlack : pages is null");
			return -1;
		}
		if (pages === undefined) {
			alert("clearPagesBlack : pages is undefined");
			return -1;
		}
		
		var temp;
		var y;

		temp = document.getElementById(pages);
		//alert("x.length : " + x.length);
		//console.log("setPagesBlack pages: " + pages + " currentpage : " + currentpage);
	
		var i;
	
		//alert("setPages : " + pages);
		if (pages == 'nav' + totalpages) {
			//alert("setting to redtext");

			if (temp) {
				//console.log("setPagesBlack, setting to redtext");
				temp.className = "redtext";
			}
			return;
		}
	
		if (temp) {
			//alert("pages : " + pages);   
			//alert("temp.className : " + temp.className);
			//temp.className = "greentexthover";
			//console.log("setPagesBlack, setting greentexthover");
			temp.className = "greentexthover";
			temp.style.cursor = "pointer";
			//temp.style.cursor = "default";
		} else {
			;
			//alert("setPages failed!");
		}
	} ;

	this.setPages = function(pages) {
		//alert("setPages : " + pages);
		/*
			pages: nav1, nav2, etc
		*/

		if (arguments.length ==0) {
			alert("setPages argument, pages, missing!");
			return -1;
		}

		var temp;
		var y;

		/*
			pages navFirst, navLast, navPrevious, navNext, nav1, nav2, nav3, ...
		*/

		if (Locoolly.getDebug())
			traceLocoolly("setPages, pages : " + pages);

		if (pages === "") {
			alert("setPages : pages is null");
			return -1;
		}

		if (pages === undefined) {
			alert("setPages : pages is undefined");
			return -1;
		}
	
		temp = document.getElementById(pages);

		//console.log("setPages: pages, " + pages + " currentpage" + currentpage);
	
		var i;
	
		//alert("setPages : " + pages);
		if (pages == 'nav' + totalpages) {
			//alert("setting to redtext");
	
			if (temp) {
				if (Locoolly.getDebug())
					traceLocoolly("setPages, setting redtext");

				temp.className = "redtext";
				temp.style.cursor = "pointer";
			}
			return;
		}
	
		if (temp) {
			//alert("pages : " + pages);   
			//alert("temp.className : " + temp.className);
			//temp.className = "greentexthover";
			//console.log("setPages, setting greentexthover");

			if (Locoolly.getDebug())
				traceLocoolly("setPages, setting greentexthover");

			temp.className = "greentexthover";
			temp.style.cursor = "pointer";
			//temp.style.cursor = "default";
		} else {
			;
			//alert("setPages failed!");
		}
	} ;
	// function getLookupPageDiv returns the one-based number of the id representing the
	// box number of current page
	/*
	 page 1:
	 	1 2 3 4
	 	5 6 7 8
	 	9 10 11 12
	 	
	 page 2:
	 	13 14 15 16
	 	17 18 19 20
	 	21 22 23 24
	 	
	 page 3:
	 	25 26 27 28
	 	29 30 31 32
	 	33 34 35 36
	 */
	 
	this.getLookupPageID = function(id) {
		if (arguments.length ==0) {
			alert("getLookupPageID argument, id, missing!");
			return -1;
		}

		var val;
		//alert("id for lookup is : " + id);
		//alert("currentpage : " + currentpage);
		val = parseInt(currentpage - 1, 10) * 12;
		val += parseInt(id, 10);
		return val;
	} ;
	
	this.getStartIndex = function() {
		var currentpage = this.getCurrentPage();
		var endingpage = this.getLastPage();
		var remainder = currentpage % 20;

		if (remainder == 0) {
			remainder = 20;
		}

		var start = currentpage - remainder + 1;

		if (start < 1) {
			start = 1;
		}

		//console.log("getStartIndex, currentpage : " + currentpage + ", start : " + start);
		return start;
	} ;
	
	this.toString = function() {
		var str
		str = "Page, getFirstPage() : " + Page.getFirstPage() + " , getNextPage()" + Page.getNextPage() + " , getLastPage() " + Page.getLastPage();
		str += ", getTotalPages() : " + Page.getTotalPages() + " , getTierCount() : " + Page.getTierCount() + " , getTier1Count() " + Page.getTier1Count();
		str += ", getTier2Count() : " + Page.getTier2Count() + ", getTier3Count() : " + Page.getTier3Count();
	}
}

// create custom method for InputSearchWords
function CheckEmptyPhrase() {
	var str;

	if (InputSearchWords.pendingDeletePopups) {
		;
		/*
		InputSearchWords.value = WordsClass.getDefValue();
		InputSearchWords.className = WordsClass.getDefClassName();
		WordsClass.setSearchWordsName("");
		WordsClass.setSearchWordsID(0);
		var index;

		for (index = 0; index < 16; index++) 
			SearchWordsArray[index] = "";
		*/
	}
	
	if (InputSearchWords.resetSearchPhrase) {
		;
		/*
		Friday, March 2, 2012, this .value was set!
		*/

		if (Locoolly.getDebug())
			traceLocoolly("queryWords : resetSearchPhrases was set!");

		InputSearchWords.value = WordsClass.getDefValue();
		InputSearchWords.className = WordsClass.getDefClassName();
		WordsClass.setSearchWordsName("");
		WordsClass.setSearchWordsID(0);
		var index;

		for (index = 0; index < 16; index++) 
			SearchWordsArray[index] = "";
		InputSearchWords.value = WordsClass.getDefValue();
		InputSearchWords.resetSearchPhrase = false;
	}

	//alert("locoollyClass!:");
	//SearchWords = document.getElementById('Input-search-words');
	InputSearchWords.pendingDeletePopups = true;
	str = InputSearchWords.value;
	InputSearchWords.radiusword = str;
	InputSearchWords.className = WordsClass.getDefClassName();
	//alert("CheckEmptyPhrase, InputSearchWords.value : " + InputSearchWords.value);

	/*
		With the case "tree " select radius, we have InputSearchWords.value set to 'tree'
	*/

	if (BrowserType == "IE8flag" || BrowserType == "IE7flag") {
		InputSearchWords.detachEvent("onblur", CheckEmptyPhrase);
		InputSearchWords.attachEvent("onblur", CheckEmptyPhrase);
	} else {
		InputSearchWords.addEventListener("blur", CheckEmptyPhrase, false);
	}
	
	//alert("str : " + str + str.length );

	if (InputSearchWords.value == "") {
		InputSearchWords.value = WordsClass.getDefValue();
		InputSearchWords.className = WordsClass.getDefClassName();
		var index;

		for (index = 0; index < 16; index++) 
			SearchWordsArray[index] = "";
	}

	if (InputSearchWords.pendingDeletePopups) {
		return true;
	}

	// May 18, removed the str.length conditional!
	if ((str.length <  2) || (WordsClass.getSearchWordsID() == 0)) {
		//alert("Input search phrases is empty!");
		deletePopups();
		InputSearchWords.value = WordsClass.getDefValue();
		InputSearchWords.className = WordsClass.getDefClassName();
		var index;

		for (index = 0; index < 16; index++) 
			SearchWordsArray[index] = "";
	}
	
	var tempDiv = document.getElementById('WordsPopups');
	//alert("CheckEmptyPhrase : tempDiv.innerHTML " + tempDiv.innerHTML);

	if (tempDiv.innerHTML == "") {
	//if (WordsClass.getSearchWordsName() == "0") {
		//alert("Input search phrases is empty!");
		deletePopups();
		InputSearchWords.hold = InputSearchWords.value;
		//alert("CheckEmptyPhrase, InputSearchWords.hold is : " + InputSearchWords.hold);
		InputSearchWords.value = WordsClass.getDefValue();
		InputSearchWords.className = WordsClass.getDefClassName();
	}

	if (BrowserType == "IE8flag" || BrowserType == "IE7flag") {
		InputSearchWords.detachEvent("onkeyup", setWordsQuery);
		InputSearchWords.attachEvent("onkeyup", setWordsQuery);
	} else {
		InputSearchWords.removeEventListener("blur", CheckEmptyPhrase, false);
		InputSearchWords.addEventListener("keyup", setWordsQuery, false);
	}
}

/*
	Use setWordsClick to be the target of a "click"; always delete any searchword
	in InputSearchWords.value
*/
function setWordsClick() {
	if (InputSearchWords) {
		if (Locoolly.getDebug())
			traceLocoolly("setWordsClick");

		if (!CityClass.getvalidZipFlag()) {
		//alert("setWordsQuery invalid zip flag");
			if (Locoolly.getDebug() )
				traceLocoolly("setWordsQuery, invalid ZipFlag()!");
			setZipFocus();
			deletePopups();
	
			InputSearchWords.value = WordsClass.getDefValue();
			InputSearchWords.className = WordsClass.getDefClassName();
			return;
		}

		InputSearchWords.value = "";
		WordsClass.setSearchWordsName("");
		WordsClass.setSearchWordsID(0);
		WordsClass.setSearchWordsCount(0);
		deletePopups();

		var index;
		for (index = 0; index < 16; index++)
			SearchWordsArray[index] = 0;

		if (Locoolly.getDebug())
			traceLocoolly("setWordsClick, calling setWordsQuery");

		setWordsQuery();
	}
}
function resetWordsQuery() {
	//alert("resetWordsQuery!");

	clearResults();
	AreaClass.setSearchAreaQueryRadius("'10'");
	if (BrowserType == "IE8flag" || BrowserType == "IE7flag") {
		//InputSearchWords.onkeyup = resetWordsQuery;
		InputSearchWords.detachEvent("onkeyup", resetWordsQuery);
		InputSearchWords.attachEvent("onkeyup", resetWordsQuery);
		InputSearchWords.detachEvent("onclick", ClearSearchWords);
		InputSearchWords.detachEvent("onclick", resetWordsQuery);

	} else {
		InputSearchWords.addEventListener("keyup", resetWordsQuery, false);
		InputSearchWords.removeEventListener("click", ClearSearchWords, false);
		InputSearchWords.removeEventListener("click", resetWordsQuery, false);
	}

	InputSearchWords.value = "";
	InputSearchWords.focus();
	InputSearchWords.select();
	setWordsQuery();
}

function clearResults() {
	if (!document.getElementById)
		return -1;

	if (!InputSearchWords) {
		return;
	}

	for (var index = 0; index < 16; index++) {
		SearchWordsArray[index] = "";
	}

	WordsClass.setSearchWordsCount(0);

	InputSearchWords.removeSearch = false;
	InputSearchWords.resetSearchPhrase = false;

	var tempDiv = document.getElementById('bubble_text1');
	if (tempDiv) {
		var results = tempDiv.hasChildNodes();
 
		if (results) {
			while (tempDiv.hasChildNodes()) {
				//alert("removing Last Child");
				tempDiv.removeChild(tempDiv.lastChild);
			}
		}
	}

	var tempDiv = document.getElementById('variable_bubble_text1');
	if (tempDiv) {
		var results = tempDiv.hasChildNodes();

		if (results) {
			while (tempDiv.hasChildNodes()) {
				//alert("removing Last Child");
				tempDiv.removeChild(tempDiv.lastChild);
			}
		}
	}

	var tempDiv = document.getElementById('bubble_text2');
	if (tempDiv) {
		var results = tempDiv.hasChildNodes();
		if (results) {
			while (tempDiv.hasChildNodes()) {
				tempDiv.removeChild(tempDiv.lastChild);
			}
		}
	}

	var tempDiv = document.getElementById('bubble');
	if (tempDiv) {
		var results = tempDiv.hasChildNodes();
		if (results) {
			while (tempDiv.hasChildNodes()) {
				tempDiv.removeChild(tempDiv.lastChild);
			}
		}
	}

	var tempDiv = document.getElementById('notFound');
	if (tempDiv) {
		var results = tempDiv.hasChildNodes();
		if (results) {
			while (tempDiv.hasChildNodes()) {
				tempDiv.removeChild(tempDiv.lastChild);
			}
		}
	}

	if (WordsClass.getSearchWordsID() == 0) {
		if (BrowserType == "IE8flag" || BrowserType == "IE7flag") {
			InputSearchWords.detachEvent("onclick", ClearSearchWords);
			InputSearchWords.detachEvent("onblur", CheckEmptyPhrase);
			InputSearchWords.attachEvent("onclick", ClearSearchWords);
			InputSearchWords.attachEvent("onblur", CheckEmptyPhrase);
		} else {
			InputSearchWords.addEventListener("keyup", setWordsQuery, false);
			InputSearchWords.addEventListener("click", ClearSearchWords, false);
			InputSearchWords.addEventListener("blur", CheckEmptyPhrase, false);
		}
	}

	deletePopups();
}
function handleClientNode() {
	var type = Client.getSelectType();
	var ret;
	if (type == "view") {
		//alert("calling deleteFooter, type : " + type);
		deleteFooter();
	}

	if (type == "edit") {
		//alert("handleClientNode, calling editClient");
		ret = editClient(Client.getClientID());
	}

	if (type == "delete") {
		ret = deleteClient(Client.getClientID());
	}

	var production = Locoolly.getProduction();
return false;
	if (production != "") {
		if (ret)
			window.location = production;
	}
}
function handleSearchWordsNode() {
	var type = SearchWords.getSelectType();
	var ret;
	var check;

	//alert("handleSearchWordsName, type : " + type);
	if (Locoolly.getDebug())
		traceLocoolly("handleSearchWordsName, type : " + type);

	if (type == "insert") {
		var tmp = document.getElementById("SearchWordsNameInput");
		if (Locoolly.getDebug())
			traceLocoolly("handleSearchWordsNode, insert, tmp.value : " + tmp.value);

		SearchWords.setSearchWordsName(tmp.value);
		if (tmp.value == "")
			return false;
		ret = createSearchWords();
	}
	
	if (type == "view") {
		deleteFooter();
	}

	if (type == "edit") {
		//alert("handleClientNode, calling editClient");
		ret = editSearchWords(SearchWords.getSearchWordsID());
	}

	if (type == "delete") {
		ret = deleteSearchWords(SearchWords.getSearchWordsID());
	}

	var production = Locoolly.getProduction();

	if (production != "") {
		if (ret)
			window.location = production;
	}
}
function handleSearchCategoryNode() {
	var type = SearchCategory.getSelectType();
	var ret;
	var check;

	//alert("handleSearchCategoryName, type : " + type);
	if (Locoolly.getDebug())
		traceLocoolly("handleSearchCategoryName, type : " + type);

	if (type == "insert") {
		var tmp = document.getElementById("SearchCategoryNameInput");
		if (Locoolly.getDebug())
			traceLocoolly("handleSearchCategoryNode, insert, tmp.value : " + tmp.value);

		SearchCategory.setSearchCategoryName(tmp.value);
		if (tmp.value == "")
			return false;
		ret = createSearchCategory();
	}
	
	if (type == "view") {
		deleteFooter();
	}

	if (type == "edit") {
		//alert("handleClientNode, calling editClient");
		ret = editSearchCategory(SearchCategory.getSearchCategoryID());
	}

	if (type == "delete") {
		ret = deleteSearchCategory(SearchCategory.getSearchCategoryID());
	}

	var production = Locoolly.getProduction();
	if (production != "") {
		if (ret)
			window.location = production;
	}
}
function editClient(ClientID) {
	if (ClientID == 0)
		return false;

	if (ClientID == "")
		return false;

	var div = document.getElementById("selectfooter");
	if (!div) {
		alert("editClient, can't open selectfooter!");
		return false;
	}

	//div.onclick = "";
	var ret = validateClient(ClientID);
	if (ret) {
		//alert("validateClient is true");
		updateClient(ClientID);
		deleteFooter();
		return true;
	} else {
		alert("validateClient is not true");
		return false;
	}

	deleteFooter();
}
function updateClient(ClientID)
{
	if (ClientID == "") {
		return false;;
	}

	var cityXML = GetXmlHttpObject();
	var ClientName = Client.getClientName();
	var ClientContact = Client.getClientContact();
	var Tier = Client.getTier();
	var ClientAddress = Client.getClientAddress();
	var ClientMailing = Client.getClientMailing();
	var CityAreaCode = Client.getCityAreaCode();
	var CityPhone = Client.getCityPhone();
	var FaxAreaCode = Client.getFaxAreaCode();
	var FaxPhone = Client.getFaxPhone();
	var ClientEmail = Client.getClientEmail();
	var Latitude = Client.getLatitude();
	var Longitude = Client.getLongitude();
	var CityID = Client.getCityID();
	var CityName = Client.getCityName();
	var CountyID = Client.getCountyID();
	var CountyName = Client.getCountyName();
	var StateID = Client.getStateID();
	var StateAbbreviation = Client.getStateAbbreviation();
	var PostalCodeID = Client.getPostalCodeID();
	//alert("PostalCodeID : 3 " + PostalCodeID);
	var PostalCode = Client.getPostalCode();
	var WebLinkID = Client.getWebLinkID();
	var URL = Client.getURL();
	var AlternateName = Client.getAlternateName();
	var NameOfLink = Client.getNameOfLink();

	ClientName = encodeURI(ClientName);
	ClientContact = encodeURI(ClientContact);
	ClientAddress = encodeURI(ClientAddress);
	ClientEmail = encodeURI(ClientEmail);
	CityName = encodeURI(CityName);
	CountyName = encodeURI(CountyName);
	Latitude = encodeURI(Latitude);
	Longitude = encodeURI(Longitude);
	URL = encodeURI(URL);
	AlternateName = encodeURI(AlternateName);
	NameOfLink = encodeURI(NameOfLink);
	
	//alert("updateClient, alternatename : " + AlternateName);

	var url="/Production/updateClientXML.php";
	//var args = "CityName="+city+"&CountyName="+county+"&StateAbbreviation="+state+"&PostalCode="+postalcode;
	//var args="CityName=Marysville&CountyName=Yuba&StateAbbreviation=CA&PostalCode=95901";
	var args = "";
	args += "ClientID="+ClientID;
	args += "&ClientName="+ClientName;
	args += "&ClientContact="+ClientContact;
	args += "&Tier="+Tier;
	args += "&ClientAddress="+ClientAddress;
	args += "&ClientMailing="+ClientMailing;
	args += "&CityAreaCode="+CityAreaCode;
	args += "&CityPhone="+CityPhone;
	args += "&FaxAreaCode="+FaxAreaCode;
	args += "&FaxPhone="+FaxPhone;
	args += "&ClientEmail="+ClientEmail;
	args += "&Latitude="+Latitude;
	args += "&Longitude="+Longitude;
	args += "&CityID="+CityID;
	args += "&CityName="+CityName;
	args += "&CountyID="+CountyID;
	args += "&CountyName="+CountyName;
	args += "&StateID="+StateID;
	args += "&StateAbbreviation="+StateAbbreviation
	args += "&PostalCodeID="+PostalCodeID;
	args += "&PostalCode="+PostalCode;
	args += "&WebLinkID="+WebLinkID;
	args += "&URL="+URL;
	args += "&AlternateName="+AlternateName;
	args += "&NameOfLink="+NameOfLink;

	if (Locoolly.getDebug()) {
		traceLocoolly("updateClient : url, " + url);
		traceLocoolly("updateClient, args  : " + args);
	}

	cityXML.onreadystatechange=dummy;
	cityXML.open("POST",url,false);
	cityXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cityXML.setRequestHeader("Content-length", args.length);
	cityXML.setRequestHeader("Connection", "close");
	cityXML.send(args);

	var popups;
	var results;
	var xmlDoc = cityXML.responseXML;
	var txt = cityXML.responseText;

	if (Locoolly.getDebug())
		console.log("here's the response: " + txt);
	
	var xmlDoc = cityXML.responseXML;
}
function createSearchWords(type)
{
	//alert("createSearchWords");
	var ret;
	var popups = document.getElementById('entrypopups');

	var SearchXML = GetXmlHttpObject();
	var SearchWordsName = SearchWords.getSearchWordsName();
	SearchWordsName = encodeURI(SearchWordsName);

	var url="/Production/insertSearchWords.php";
	var args = "";
	args += "SearchWordsName="+SearchWordsName;

	if (Locoolly.getDebug()) {
		traceLocoolly("createSearchWords : url, " + url);
		traceLocoolly("createSearchWords, args  : " + args);
	}

	SearchXML.onreadystatechange=dummy;
	SearchXML.open("POST",url,false);
	SearchXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	SearchXML.setRequestHeader("Content-length", args.length);
	SearchXML.setRequestHeader("Connection", "close");
	SearchXML.send(args);

	var popups;
	var results;
	var xmlDoc = SearchXML.responseXML;
	var txt = SearchXML.responseText;

	if (Locoolly.getDebug())
		console.log("here's the response: " + txt);
	
	var xmlDoc = SearchXML.responseXML;
}
function editSearchWords(SearchWordsID)
{
	if (SearchWordsID == 0)
		return false;
	if (SearchWordsID == "")
		return false;

	var ret = validateSearchWords(SearchWordsID);
	if (ret) {
		updateSearchWords(SearchWordsID);
		deleteFooter();
		return true;
	} else {
		alert("validateSearchWords is not true");
		return false;
	}
	deleteFooter();
}
function updateSearchWords(SearchWordsID)
{
	if (SearchWordsID == "") {
		return false;
	}

	var SearchXML = GetXmlHttpObject();
	
	var input = document.getElementById('SearchWordsNameInput');
	var SearchWordsName = input.value;
	SearchWords.setSearchWordsName(SearchWordsName);
	SearchWordsName = encodeURI(SearchWordsName);

	var url="/Production/updateSearchWords.php";
	//var args = "CityName="+city+"&CountyName="+county+"&StateAbbreviation="+state+"&PostalCode="+postalcode;
	//var args="CityName=Marysville&CountyName=Yuba&StateAbbreviation=CA&PostalCode=95901";
	var args = "";
	args += "SearchWordsID="+SearchWordsID;
	args += "&SearchWordsName="+SearchWordsName;

	if (Locoolly.getDebug()) {
		traceLocoolly("updateSearchWords : url, " + url);
		traceLocoolly("updateSearchWords, args  : " + args);
	}

	SearchXML.onreadystatechange=dummy;
	SearchXML.open("POST",url,false);
	SearchXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	SearchXML.setRequestHeader("Content-length", args.length);
	SearchXML.setRequestHeader("Connection", "close");
	SearchXML.send(args);

	var popups;
	var results;
	var xmlDoc = SearchXML.responseXML;
	var txt = SearchXML.responseText;

	if (Locoolly.getDebug())
		console.log("here's the response: " + txt);
	
	var xmlDoc = SearchXML.responseXML;
}
function editSearchCategory(SearchCategoryID)
{
	if (SearchCategoryID == 0)
		return false;
	if (SearchCategoryID == "")
		return false;

	var ret = validateSearchCategory(SearchCategoryID);
	if (ret) {
		updateSearchCategory(SearchCategoryID);
		deleteFooter();
		return true;
	} else {
		alert("validateSearchCategory is not true");
		return false;
	}
	deleteFooter();
}
function validateSearchWords(SearchWordsID)
{
	var valid = true;
	if (SearchWordsID == 0)
		return false;
	if (SearchWordsID == "")
		return false;
	
	var SearchWordsName = document.getElementById("SearchWordsNameInput");
	if (SearchWordsName.value == "")
		{
		valid = false;
		SearchWordsName.className = "inputError";
		}

	return valid;
}
function updateSearchCategory(SearchCategoryID)
{
	if (SearchCategoryID == "") {
		return false;
	}

	var SearchXML = GetXmlHttpObject();
	
	var input = document.getElementById('SearchCategoryNameInput');
	var SearchCategoryName = input.value;
	SearchCategory.setSearchCategoryName(SearchCategoryName);
	SearchCategoryName = encodeURI(SearchCategoryName);

	var url="/Production/updateSearchCategory.php";
	//var args = "CityName="+city+"&CountyName="+county+"&StateAbbreviation="+state+"&PostalCode="+postalcode;
	//var args="CityName=Marysville&CountyName=Yuba&StateAbbreviation=CA&PostalCode=95901";
	var args = "";
	args += "SearchCategoryID="+SearchCategoryID;
	args += "&SearchCategoryName="+SearchCategoryName;

	if (Locoolly.getDebug()) {
		traceLocoolly("updateSearchCategory : url, " + url);
		traceLocoolly("updateSearchCategory, args  : " + args);
	}

	SearchXML.onreadystatechange=dummy;
	SearchXML.open("POST",url,false);
	SearchXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	SearchXML.setRequestHeader("Content-length", args.length);
	SearchXML.setRequestHeader("Connection", "close");
	SearchXML.send(args);

	var popups;
	var results;
	var xmlDoc = SearchXML.responseXML;
	var txt = SearchXML.responseText;

	if (Locoolly.getDebug())
		console.log("here's the response: " + txt);
	
	var xmlDoc = SearchXML.responseXML;
}
function validateSearchCategory(SearchCategoryID)
{
	var valid = true;
	if (SearchCategoryID == 0)
		return false;
	if (SearchCategoryID == "")
		return false;
	
	var SearchCategoryName = document.getElementById("SearchCategoryNameInput");
	if (SearchCategoryName.value == "")
		{
		valid = false;
		SearchCategoryName.className = "inputError";
		}

	return valid;
}
function validateClient(ClientID)
{
	
	if (ClientID == "")
		return false;

	var valid = true;
	var dirty = false;

	var ClientName = document.getElementById("ClientNameInput");
	if (!ClientName) {
		valid = false;
		return valid;
	}

	if (ClientName.value == "") {
		alert("ClientName.value is bad: " + ClientName.value);
		valid = false;
		return valid;
	}
	
	var ClientContact = document.getElementById("ClientContactInput");
	if (!ClientContact) {
		alert("ClientContact not found");
		valid = false;
		return valid;
	}
	ClientContact.className = "inputDisplay";
	
	var Tier = document.getElementById("TierInput");
	if (!Tier) {
		alert("Tier not found");
		valid = false;
		return valid;
	}
	Tier.className = "inputDisplay";
	//alert("Tier.value : " + Tier.value);

	if (Tier.value == "") {
		Client.setTier(3);
		Tier.value = 3;
	}
	
	if (Tier.value < 1 || Tier.value > 3) {
		Client.setTier(3);
		Tier.value = 3;
	}

	var ClientMailing = document.getElementById("ClientMailingInput");
	if (!ClientMailing) {
		alert("ClientMailing not found");
		valid = false;
		return valid;
	}
	ClientMailing.className = "inputDisplay";
	
	var ClientAddress = document.getElementById("ClientAddressInput");
	if (!ClientAddress) {
		alert("ClientAddress not found");
		valid = false;
		return valid;
	}
	ClientAddress.className = "inputDisplay";

	/*
		Possibly could do a check of the three digit value with ZipCodes?
	*/
	var ClientAreaCode = document.getElementById("ClientAreaCodeInput");
	if (!ClientAreaCode) {
		alert("ClientAreaCode not found");
		valid = false;
		return valid;
	}
	
	ClientAreaCode.className = "inputDisplay";
	if (ClientAreaCode.value == "----") {
		ClientAreaCode.value = "";
		Client.setClientAreaCode(ClientAreaCode.value);
	}

	if (ClientAreaCode.value == "----") {
		ClientAreaCode.value = "";
		Client.setClientAreaCode(ClientAreaCode.value);
	}
	
	if (ClientAreaCode.value == "---") {
		ClientAreaCode.value = "";
		Client.setClientAreaCode(ClientAreaCode.value);
	}
	if (ClientAreaCode.value == "--") {
		ClientAreaCode.value = "";
		Client.setClientAreaCode(ClientAreaCode.value);
	}
	if (ClientAreaCode.value == "-") {
		ClientAreaCode.value = "";
		Client.setClientAreaCode(ClientAreaCode.value);
	}
	
	var pattern = /^\d{3}$/;

	if (ClientAreaCode.value != "") {
		if (!pattern.test(ClientAreaCode.value)) {
			//alert("test of PostalCode : " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("Error with ClientAreaCode");
			ClientAreaCode.className = "inputError";
			valid = false;
		}
	}

	var ClientPhone = document.getElementById("ClientPhoneInput");
	if (!ClientPhone) {
		alert("ClientPhone not found");
		valid = false;
		return valid;
	}

	ClientPhone.className = "inputDisplay";
	if (ClientPhone.value == "--------") {
		ClientPhone.value = "";
		Client.setClientPhone(ClientPhone.value);
	}
	if (ClientPhone.value == "---") {
		ClientPhone.value = "";
		Client.setClientPhone(ClientPhone.value);
	}
	if (ClientPhone.value == "--") {
		ClientPhone.value = "";
		Client.setClientPhone(ClientPhone.value);
	}
	if (ClientPhone.value == "-") {
		ClientPhone.value = "";
		Client.setClientPhone(ClientPhone.value);
	}
	
	//var pattern = /^\d{7}$/;
	var pattern = /(\d{3})[-]?(\d{4})$/;
	if (ClientPhone.value != "") {
		if (!pattern.test(ClientPhone.value)) {
			//alert("test of PostalCode : " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("error with ClientPhone");
			ClientPhone.className = "inputError";
			valid = false;
		}
	}
	
	/*
		Possibly could do a check of the three digit value with ZipCodes?
	*/
	var FaxAreaCode = document.getElementById("ClientFaxAreaInput");
	if (!FaxAreaCode) {
		alert("ClientFaxArea not found");
		valid = false;
		return valid;
	}

	FaxAreaCode.className = "inputDisplay";
	if (FaxAreaCode.value == "----") {
		FaxAreaCode.value = "";
		Client.setFaxAreaCode(FaxAreaCode.value);
	}
	if (FaxAreaCode.value == "---") {
		FaxAreaCode.value = "";
		Client.setClientFaxArea(FaxAreaCode.value);
	}
	if (FaxAreaCode.value == "--") {
		FaxAreaCode.value = "";
		Client.setClientFaxArea(FaxAreaCode.value);
	}
	if (FaxAreaCode.value == "-") {
		FaxAreaCode.value = "";
		Client.setClientFaxArea(FaxAreaCode.value);
	}
	
	var pattern = /^\d{3}$/;

	if (FaxAreaCode.value != "") {
		if (!pattern.test(FaxAreaCode.value)) {
			//alert("test of PostalCode : " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("error with ClientFaxArea");
			FaxAreaCode.className = "inputError";
			valid = false;
		}
	}
	
	var FaxPhone = document.getElementById("ClientFaxPhoneInput");
	if (!FaxPhone) {
		alert("ClientFaxPhone not found");
		valid = false;
		return valid;
	}

	FaxPhone.className = "inputDisplay";
	if (FaxPhone.value == "-------") {
		FaxPhone.value = "";
		Client.setFaxPhone(FaxPhone.value);
	}
	if (FaxPhone.value == "----") {
		alert("----");
		FaxPhone.value = "";
		Client.setFaxPhone(FaxPhone.value);
	}
	if (FaxPhone.value == "---") {
		//alert("---");
		FaxPhone.value = "";
		Client.setFaxPhone(FaxPhone.value);
	}
	if (FaxPhone.value == "--") {
		//alert("--");
		FaxPhone.value = "";
		Client.setFaxPhone(FaxPhone.value);
	}
	if (FaxPhone.value == "-") {
		//alert("--");
		FaxPhone.value = "";
		Client.setFaxPhone(FaxPhone.value);
	}
	
	var pattern = /^\d{7}$/;
	var pattern = /(\d{3})[-]?(\d{4})$/;
	if (FaxPhone.value != "") {
		if (!pattern.test(FaxPhone.value)) {
			//alert("test of ClientFaxPhone: " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("error with ClientFaxPhone");
			FaxPhone.className = "inputError";
			valid = false;
		}
	}
	
	/*
		Possibly could do a reg expression check
	*/
	var ClientEmail = document.getElementById("ClientEmailInput");
	if (!ClientEmail) {
		alert("ClientEmail not found");
		valid = false;
		return valid
	}
	ClientEmail.className = "inputDisplay";
	
	var pattern = /^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/;

	if (ClientEmail.value != "") {
		if (!pattern.test(ClientEmail.value)) {
			//alert("test of PostalCode : " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("error with Email");
			ClientEmail.className = "inputError";
			valid = false;
		}
	}
	
	var ClientLatitude = document.getElementById("LatitudeInput");
	if (!ClientLatitude) {
		alert("ClientLatitude not found");
		valid = false;
		return valid;
	}
	ClientLatitude.className = "inputDisplay";
	
	var ClientLongitude = document.getElementById("LongitudeInput");
	if (!ClientLongitude) {
		alert("ClientLongitude not found");
		valid = false;
		return valid;
	}

	ClientLongitude.className = "inputDisplay";
	
	var CityName = document.getElementById("CityNameInput");
	if (!CityName) {
		alert("CityName not found");
		valid = false;
		return valid;
	}

	CityName.className = "inputDisplay";

	var CountyName = document.getElementById("CountyNameInput");
	if (!CountyName) {
		alert("CountyName not found");
		valid = false;
		return valid;
	}

	CountyName.className = "inputDisplay";
	
	var StateAbbreviation = document.getElementById("StateAbbreviationInput");
	if (!StateAbbreviation) {
		alert("StateAbbreviation not found");
		valid = false;
		return valid;
	}

	StateAbbreviation.className = "inputDisplay";
	
	var PostalCodeID = document.getElementById("PostalCodeIDInput");
	if (!PostalCodeID) {
		alert("PostalCodeID not found 5 ");
		valid = false;
		return valid;
	}

	var PostalCode = document.getElementById("PostalCodeInput");
	if (!PostalCode) {
		alert("PostalCode not found");
		valid = false;
		return valid;
	}

	PostalCode.className = "inputDisplay";
	var pattern = /^\d{5}$/;

	if (PostalCode.value != "") {
		if (!pattern.test(PostalCode.value)) {
			//alert("test of PostalCode : " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("error with PostalCode");
			PostalCode.className = "inputError";
			valid = false;
		}
	}
	
	var URL = document.getElementById("URLInput");
	if (!URL) {
		alert("URL not found");
		valid = false;
		return valid;
	}
	URL.className = "inputDisplay";
	
	var NameOfLink = document.getElementById("NameOfLinkInput");
	if (!NameOfLink) {
		alert("NameOfLink not found");
		valid = false;
		return valid;
	}
	NameOfLink.className = "inputDisplay";
	
	var AlternateName = document.getElementById("AlternateNameInput");
	if (!AlternateName) {
		alert("AlternateName not found");
		valid = false;
		return valid;
	}
	//alert("AlternateName : " + AlternateName.value);
	AlternateName.className = "inputDisplay";
	
	var WebLinkID = document.getElementById("WebLinkIDInput");
	if (!WebLinkID) {
		alert("WebLinkID not found");
		valid = false;
		return valid;
	}
	WebLinkID.className = "inputDisplay";
	
	var CityID = document.getElementById("CityIDInput");
	if (!CityID) {
		alert("CityID not found");
		valid = false;
		return valid;
	}
	
	var CountyID = document.getElementById("CountyIDInput");
	if (!CountyID) {
		alert("CountyID not found");
		valid = false;
		return valid;
	}
	
	var StateID = document.getElementById("StateIDInput");
	if (!StateID) {
		alert("StateID not found");
		valid = false;
		return valid;
	}
	
	var PostalCodeID = document.getElementById("PostalCodeIDInput");
	if (!PostalCodeID) {
		alert("PostalCodeID not found");
		valid = false;
		return valid;
	}

	var ret = validateLocation(CityName, CountyName, StateAbbreviation, PostalCode);
	if (!ret) {
		alert("validateLocation is false");
		valid = false;
		return false;
	}
	
	if (URL.value != "") {
		//alert("URL.value is : " + URL.value);
		ret = validateWeb(URL, AlternateName, NameOfLink);
		if (!ret) {
			alert("validateWeb is false");
			valid = false;
			return false;
		}
	}
	
	//var geos = validateCoordinates(CityName, CountyName, Latitude, Longitude);
	geos = true;
	if (!geos) {
		alert("validateCoordinates is false");
		valid = false;
		return false;
	}
	
	//alert("CityName.value : " + CityName.value);
	CityID.value = Client.getCityID();
	CountyID.value = Client.getCountyID();
	StateID.value = Client.getStateID();
	PostalCodeID.value = Client.getPostalCodeID();
	
	WebLinkID.value = Client.getWebLinkID();
	URL.value = Client.getURL();
	AlternateName.value = Client.getAlternateName();
	NameOfLink.value = Client.getNameOfLink();

	//alert("Final WebLinkID : " + WebLinkID.value);
	/*
		Reload all Web attributes since one or more may have changed.
	*/
	
	Client.setClientName(ClientName.value);
	Client.setClientContact(ClientContact.value);
	Client.setTier(Tier.value);
	Client.setClientAddress(ClientAddress.value);
	Client.setClientMailing(ClientMailing.value);
	Client.setCityAreaCode(ClientAreaCode.value);
	Client.setCityPhone(ClientPhone.value);
	Client.setFaxAreaCode(FaxAreaCode.value);
	Client.setFaxPhone(FaxPhone.value);
	Client.setClientEmail(ClientEmail.value);
	Client.setLatitude(Latitude.value);
	Client.setLongitude(Longitude.value);
	Client.setCityID(CityID.value);
	Client.setCityName(CityName.value);
	Client.setCountyID(CountyID.value);
	Client.setCountyName(CountyName.value);
	Client.setStateID(StateID.value);
	Client.setPostalCodeID(PostalCodeID.value);
	//alert("PostalCodeID.value : 1  " + PostalCodeID.value);
	Client.setPostalCode(PostalCode.value);
	Client.setURL(URL.value);
	Client.setAlternateName(AlternateName.value);
	//alert("Client.getAlternateName() : " + Client.getAlternateName());
	Client.setNameOfLink(NameOfLink.value);

	return valid;
}
function validateCoordinates(CityName, CountyName, Latitude, Longitude)
{
	var valid;
	var geo;
	valid = true;
	var latitude = Latitude.value;
	var longitude = Longitude.value;
	
	if (Locoolly.getDebug())
		traceLocoolly("entering validateCoordinates");
	
	var GeoXML = GetXmlHttpObject();

	var address = Web.getClientAddress();
	var mailing = Web.getClientMailing();
	var postalcode = Web.getPostalCode();
	var cityname = Web.getCityName();
	var countyname = Web.getCountyName();
	var stateabbreviation = Web.getStateAbbreviation();
	var postalcode = Web.getPostalCode();

	if (address == "")
		address == mailing;

	/*
		No address or mailing? Just use the postal coordinates and quietly leave
	*/
	if (address == "") {
		geo = "getZipCodeGeosXML.php?";
		geo += "PostalCode="+postalcode;
		geo += "&sid="+Math.random();

		if (Locoolly.getDebug())
			traceLocoolly("getZipCodeGeosXML.php, url : " + geo);

		GeoXML.onreadystatechange=dummy;
		GeoXML.open("GET",geo,false);
		GeoXML.send(null);

		var xmlDoc = GeoXML.responseXML;
		var txt = GeoXML.responseText;

		if (Locoolly.getDebug())
			console.log("validateWeb, here's the response: " + txt);

		if (xmlDoc) {
			var x = xmlDoc.getElementsByTagName('error');
			var err = x[0].firstChild.nodeValue;
			//alert("error : " + err);
	
			if (err != 0) {
				alert("validateCoordinates error: " + err);
				valid = false;
				return valid;
			}

			var x = xmlDoc.getElementsByTagName('count');
			var count = x[0].firstChild.nodeValue;
			if (count == 0) {
				valid = false;
				return valid;
			}

			var tagLatitude    = xmlDoc.getElementsByTagName("Latitude");
			var tagLongitude   = xmlDoc.getElementsByTagName("Longitude");
			var latitudeReturned;
			var longitdeReturned;
			
			(tagLatitude[0].firstChild != null) ? latitudeReturned = tagLatitude[0].firstChild.nodeValue : latitudeReturned = "";
			(tagLongitude[0].firstChild != null) ? longitudeReturned = tagLongitude[0].firstChild.nodeValue : longitudeReturned = "";
			
			Latitude.value = latitudeReturned;
			Longitude.value = longitudeReturned;

			if (Latitude.value == "")
				Latitude.className = "inputError";
			
			if (Longitude.value == "")
				Longitude.className = "inputError";
			
			return valid;
		}
	}

	//alert("Now doing address geos!");
	address = encodeURI(address);
	cityname = encodeURI(cityname);
	geo = "http://where.yahooapis.com/geocode?location=";
	geo += address
	geo += ",";
	geo += cityname;
	geo += ",";
	geo += stateabbreviation;
	//geo += " ";
	//geo += postalcode;
	//CharterPostalCode
	geo += "&appid=iQSZdM58";
	//alert("geo call to Yahoo: " + geo);


	if (Locoolly.getDebug())
		traceLocoolly(geo);

	GeoXML.onreadystatechange=dummy;
	GeoXML.open("GET",geo,false);
	GeoXML.send(null);

	var xmlDoc = GeoXML.responseXML;
	var txt = GeoXML.responseText;

	if (Locoolly.getDebug())
		console.log("validateWeb, here's the response: " + txt);

	if (xmlDoc) {
		var x = xmlDoc.getElementsByTagName('Error');
		var err = x[0].firstChild.nodeValue;
		//alert("error : " + err);
	
		if (err != 0) {
			alert("validateCoordinates error: " + err);
			valid = false;
			return valid;
		}

		var x = xmlDoc.getElementsByTagName('Found');
		var count = x[0].firstChild.nodeValue;
		if (count == 0) {
			valid = false;
			return valid;
		}

		var x = xmlDoc.getElementsByTagName('Quality');
		var quality = x[0].firstChild.nodeValue;

		if (quality < 70) {
			valid = false;
			return valid;
		}

		var tagLatitude    = xmlDoc.getElementsByTagName("latitude");
		var tagLongitude   = xmlDoc.getElementsByTagName("longitude");
		var tagcounty      = xmlDoc.getElementsByTagName("county");
		var tagcity        = xmlDoc.getElementsByTagName("city");
		var latitudeReturned;
		var longitdeReturned;
		var cityReturned;
		var countyReturned;
			
		(tagLatitude[0].firstChild != null) ? latitudeReturned = tagLatitude[0].firstChild.nodeValue : latitudeReturned = "";
		(tagLongitude[0].firstChild != null) ? longitudeReturned = tagLongitude[0].firstChild.nodeValue : longitudeReturned = "";
		(tagcity[0].firstChild != null) ? cityReturned = tagcity[0].firstChild.nodeValue : cityReturned = "";
		(tagcounty[0].firstChild != null) ? countyReturned = tagcounty[0].firstChild.nodeValue : countyReturned = "";
			
		Latitude.value = latitudeReturned;
		Longitude.value = longitudeReturned;
		if (Latitude.value == "")
			Latitude.className = "inputError";
			
		if (Longitude.value == "")
			Longitude.className = "inputError";
		
		if (CityName.value != cityReturned)
			CityName.className = "inputError";
		
		if (CountyName.value != countyReturned)
			CountyName.className = "inputError";

		return valid;
	}
}
/*
	All arguments are Input objects of type: document.getElementById
*/
function validateWeb(URL, AlternateName, NameOfLink) {
	var urlname = URL.value;
	var alternatename = AlternateName.value;
	var nameoflink = NameOfLink.value;

	var valid;
	valid = true;
	
	if (Locoolly.getDebug())
		traceLocoolly("validateWeb, entering");
	
	//alert("validateWeb!");

	/*
	Primarily as a reminder, as they were already set!
	*/
	
	URL.className = "inputDisplay";
	AlternateName.className = "inputDisplay";
	NameOfLink.className = "inputDisplay";

	/*
		Special case; if URL.value is not null, test for valid url
	*/

	if (!testWebLink(URL)) {
		alert("validateWeb, URL not valid : " + URL.value);
	}

	var urlXML = GetXmlHttpObject();
	urlname = encodeURI(urlname);
	alternatename = encodeURI(alternatename);
	nameoflink = encodeURI(nameoflink);

	var url="/Production/validateClientURL.php";
	var args = "URL="+urlname+"&AlternateName="+alternatename+"&NameOfLink="+nameoflink;
	//var args="URL=Marysville&AlternateName=Yuba&NameOfLink=CA";

	if (Locoolly.getDebug()) {
		traceLocoolly("validateWeb : url, " + url);
		traceLocoolly("validateWeb, args  : " + args);
	}

	urlXML.onreadynameoflinkchange=dummy;
	urlXML.open("POST",url,false);
	urlXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	urlXML.setRequestHeader("Content-length", args.length);
	urlXML.setRequestHeader("Connection", "close");
	urlXML.send(args);

	var popups;
	var results;
	var xmlDoc = urlXML.responseXML;
	var txt = urlXML.responseText;

	if (Locoolly.getDebug())
		console.log("validateWeb, here's the response: " + txt);

	if (xmlDoc) {
		var x = xmlDoc.getElementsByTagName('count');
		var count = x[0].firstChild.nodeValue;
		//alert("count : " + count);
		
		var x = xmlDoc.getElementsByTagName('error');
		var err = x[0].firstChild.nodeValue;
		//alert("error : " + err);

		if (err != 0) {
			alert("validateWeb error: " + err);
			valid = false;
			return valid;
		}

		var x = xmlDoc.getElementsByTagName('count');
		var count = x[0].firstChild.nodeValue;

		if (count == 0) {
			/*
			Special case: there was no location data provided at all, so
			must just let through (i.e.: country-wide business, etc.
			*/
			//alert("validateWeb, count is 0");
			if (url == "" && alternatename == "" && nameoflink == "") {
				alert("special case");
				return true;
			}
			
			if (url != "") {
				if (Locoolly.getDebug())
					traceLocoolly("validateWeb, Adding new url");
				alert("validateWeb, Adding new url");
				Web.setWebLinkID(0);
				addWebLink(URL, AlternateName, NameOfLink);

				if (Web.getWebLinkID() > 0) {
					alert("adding!");
				}
			}

			//alert("validateWeb, no location found!");
			valid = false;
			URL.className = "inputError";
			AlternateName.className = "inputError";
			NameOfLink.className = "inputError";
			valid = false;
			return valid;
			//return false;
		}

		//alert("validateWeb, count NOT 0");
		var tagweblinkID        = xmlDoc.getElementsByTagName("WebLinkID");
		var tagURL              = xmlDoc.getElementsByTagName("URL");
		var tagAlternateName    = xmlDoc.getElementsByTagName("AlternateName");
		var tagNameOfLink       = xmlDoc.getElementsByTagName("NameOfLink");

		var urlidReturned;
		var urlReturned;
		var weblinkidReturned;
		var alternatenameidReturned;
		var alternatenameReturned;
		var nameoflinkidReturned;
		var nameoflinkReturned;
		var x = xmlDoc.getElementsByTagName('error');
		var err = x[0].firstChild.nodeValue;
		var valid = true;

		for (i = 0; i< count; i++) {
			(tagweblinkID[i].firstChild != null) ? weblinkidReturned = tagweblinkID[i].firstChild.nodeValue : weblinkidReturned = "";
			(tagURL[i].firstChild != null) ? urlReturned = tagURL[i].firstChild.nodeValue : urlReturned = "" ;
			(tagAlternateName[i].firstChild != null) ? alternatenameReturned = tagAlternateName[i].firstChild.nodeValue : alternatenameReturned = "" ;
			(tagNameOfLink[i].firstChild != null) ? nameoflinkReturned = tagNameOfLink[i].firstChild.nodeValue : nameoflinkReturned = "";
			
			//alert("validateClientULR : alternatenameReturned : " + alternatenameReturned);

			if (Locoolly.getDebug())
				traceLocoolly(urlReturned + " , " + alternatenameReturned + " , " + nameoflinkReturned );
			
			/*
				For each iteration, check to see if the returned values match exactly with those provided by user.
			*/
			if (url == urlReturned && alternatename == alternatenameReturned && nameoflink == nameoflinkReturned) {
				alert("positive URL match!");
				if (Locoolly.getDebug())
					traceLocoolly("validateLocation, matched exactly!");

				return true;
			}
		}
		
		if (url == "") {
			//alert("url is null");
			valid = false;
			URL.className = "inputError";
		}
		
		if (alternatename == "") {
			valid = false;
			AlternateName.className = "inputError";
		}
		
		if (nameoflink == "") {
			valid = false;
			NameOfLink.className = "inputError";
		}
		
		//alert("validateWeb, valid is : " + valid);
		if (valid) {
			//alert("Setting web ids! " + weblinkidReturned);
			alternatenameReturned = AlternateName.value;
			nameoflinkReturned = NameOfLink.value;
			Client.setWebLinkID(weblinkidReturned);
			Client.setURL(urlReturned);
			Client.setAlternateName(alternatenameReturned);
			Client.setNameOfLink(nameoflinkReturned);

			if (Locoolly.getDebug()) {
				traceLocoolly("geturlID() : " + Client.getWebLinkID());
				traceLocoolly("getURL() : " + Client.getURL());
				traceLocoolly("getAlternateNameID() : " + Client.getAlternateName());
				traceLocoolly("getNameOfLink() : " + Client.getNameOfLink());
			}
		} else {
			if (urlReturned != "") {
				Client.setWebLinkID(weblinkidReturned);
				Client.setURL(urlReturned);
				Client.setAlternateName(alternatenameReturned);
				Client.setNameOfLink(nameoflinkReturned);

				URL.value = Client.getURL();
				AlternateName.value = Client.getAlternateName();
				NameOfLink.value = Client.getNameOfLink();

				URL.className = "inputDisplay";
				AlternateName.className = "inputDisplay";
				NameOfLink.className = "inputDisplay";
				valid = true;
			};
		}
		
		
		return valid;
	}
}
function testWebLink(URL)
{
	var valid = true;
	var pattern = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/;

	if (URL.value != "") {
		if (!pattern.test(URL.value)) {
			//alert("test of PostalCode : " + result);
			//"^\d{5}(\-\d{4})?$"
			//alert("Error with ClientAreaCode");
			URL.className = "inputError";
			//valid = false;
		}
		return valid;
	}
}
function addWebLink(URL, AlternateName, NameOfLink)
{
	var urlXML = GetXmlHttpObject();
	var url = URL.value;
	var alternatename = AlternateName.value;
	var nameoflink = NameOfLink.value;
	var valid = true;

	if (!testWebLink(URL))
	{
		alert("addWebLink : " +URL.value);
		valid = false
		return valid;
	}

	
	var string="/Production/validateClientURL.php";
	var args = "URL="+url+"&AlternateName="+alternatename+"&NameOfLink="+nameoflink;
	//var args="URL=Marysville&AlternateName=Yuba&NameOfLink=CA";

	if (Locoolly.getDebug()) {
		traceLocoolly("validateClient : url, " + url);
		traceLocoolly("validateClient, args  : " + args);
	}

	urlXML.onreadynameoflinkchange=dummy;
	urlXML.open("POST",string,false);
	urlXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	urlXML.setRequestHeader("Content-length", args.length);
	urlXML.setRequestHeader("Connection", "close");
	urlXML.send(args);

	var popups;
	var results;
	var xmlDoc = urlXML.responseXML;
	var txt = urlXML.responseText;

	if (Locoolly.getDebug()) {
		traceLocoolly("addWebLink, results of validateClientURL : " + txt);
	}
	
	alert("addWebLink");
	
	if (xmlDoc) {
		var x = xmlDoc.getElementsByTagName('error');
		var err = x[0].firstChild.nodeValue;

		if (err!= 0) {
			alert("validateLocation error: " + err);
			valid = false;
			return valid;
		}

		var x = xmlDoc.getElementsByTagName('count');
		var count = x[0].firstChild.nodeValue;
		
		alert("addWebLink count : " + count);
		
		if (count == 0)
			return false;
		
		var tagWebLinkID = xmlDoc.getElementsByTagName("WebLinkID");
		var weblinkidReturned;
		
		for (i = 0; i< count; i++) {
			(tagWebLinkID[i].firstChild != null) ? weblinkidReturned = tagWebLinkID[i].firstChild.nodeValue : weblinkidReturned = "";
		}
		
		Client.webWebLinkID(weblinkidReturned);
		
	}

	return valid;
}
/*
	All arguments are Input objects of type: document.getElementById
*/
function validateLocation(CityName, CountyName, StateAbbreviation, PostalCode) {
	var city = CityName.value;
	var county = CountyName.value;
	var state = StateAbbreviation.value;
	var postalcode = PostalCode.value;
	var valid;
	valid = true;

	/*
	Primarily as a reminder, as they were already set!
	*/
	
	CityName.className = "inputDisplay";
	CountyName.className = "inputDisplay";
	StateAbbreviation.className = "inputDisplay";
	PostalCode.className = "inputDisplay";

	var cityXML = GetXmlHttpObject();
	city = encodeURI(city);
	county = encodeURI(county);

	var url="/Production/validateClientGeo.php";
	var args = "CityName="+city+"&CountyName="+county+"&StateAbbreviation="+state+"&PostalCode="+postalcode;
	//var args="CityName=Marysville&CountyName=Yuba&StateAbbreviation=CA&PostalCode=95901";

	if (Locoolly.getDebug()) {
		traceLocoolly("validateClient : url, " + url);
		traceLocoolly("validateClient, args  : " + args);
	}

	cityXML.onreadystatechange=dummy;
	cityXML.open("POST",url,false);
	cityXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	cityXML.setRequestHeader("Content-length", args.length);
	cityXML.setRequestHeader("Connection", "close");
	cityXML.send(args);

	var popups;
	var results;
	var xmlDoc = cityXML.responseXML;
	var txt = cityXML.responseText;

	if (Locoolly.getDebug())
		console.log("here's the response: " + txt);
	
	var xmlDoc = cityXML.responseXML;
	if (xmlDoc) {
		var x = xmlDoc.getElementsByTagName('error');
		var err = x[0].firstChild.nodeValue;

		if (err!= 0) {
			alert("validateLocation error: " + err);
			valid = false;
			return valid;
		}

		var x = xmlDoc.getElementsByTagName('count');
		var count = x[0].firstChild.nodeValue;

		if (count == 0) {
			/*
			Special case: there was no location data provided at all, so
			must just let through (i.e.: country-wide business, etc.
			*/
			if (city == "" && county == "" && state == "" & postalcode == "") {
				alert("special case");
				return true;
			}

			//alert("validateLocation, no location found!");
			valid = false;
			CityName.className = "inputError";
			CountyName.className = "inputError";
			StateAbbreviation.className = "inputError";
			PostalCode.className = "inputError";
			valid = false;
			return valid;
			//return false;
		}

		var tagCityID            = xmlDoc.getElementsByTagName("CityID");
		var tagCityName          = xmlDoc.getElementsByTagName("CityName");
		var tagCountyID          = xmlDoc.getElementsByTagName("CountyID");
		var tagCountyName        = xmlDoc.getElementsByTagName("CountyName");
		var tagStateID           = xmlDoc.getElementsByTagName("StateID");
		var tagStateAbbreviation = xmlDoc.getElementsByTagName("StateAbbreviation");
		var tagPostalCodeID      = xmlDoc.getElementsByTagName("PostalCodeID");
		var tagPostalCode        = xmlDoc.getElementsByTagName("PostalCode");

		var cityidReturned;
		var cityReturned;
		var countyidReturned;
		var countyReturned;
		var stateidReturned;
		var stateReturned;
		var postalcodeidReturned;
		var postalcodeReturned;
		var x = xmlDoc.getElementsByTagName('error');
		var err = x[0].firstChild.nodeValue;
		var valid = true;

		for (i = 0; i< count; i++) {
			(tagCityID[i].firstChild != null) ? cityidReturned = tagCityID[i].firstChild.nodeValue : cityidReturned = "";
			(tagCityName[i].firstChild != null) ? cityReturned = tagCityName[i].firstChild.nodeValue : cityReturned = "" ;
			(tagCountyID[i].firstChild != null) ? countyidReturned = tagCountyID[i].firstChild.nodeValue : countyidReturned = "";
			(tagCountyName[i].firstChild != null) ? countyReturned = tagCountyName[i].firstChild.nodeValue : countyReturned = "" ;
			(tagStateID[i].firstChild != null) ? stateidReturned = tagStateID[i].firstChild.nodeValue : stateidReturned = "";
			(tagStateAbbreviation[i].firstChild != null) ? stateReturned = tagStateAbbreviation[i].firstChild.nodeValue : stateReturned = "";
			(tagPostalCodeID[i].firstChild != null) ? postalcodeidReturned = tagPostalCodeID[i].firstChild.nodeValue : postalcodeidReturned = "";
			(tagPostalCode[i].firstChild != null) ? postalcodeReturned = tagPostalCode[i].firstChild.nodeValue : postalcodeReturned = "";

			if (Locoolly.getDebug())
				traceLocoolly(cityReturned + " , " + countyReturned + " , " + stateReturned + " , " + postalcodeReturned);
			
			/*
				For each iteration, check to see if the returned values match exactly with those provided by user.
			*/
			if (city == cityReturned && county == countyReturned && state == stateReturned && postalcode == postalcodeReturned) {
				//alert("positive location match!");
				if (Locoolly.getDebug())
					traceLocoolly("validateLocation, matched exactly!");

				return true;
			}
		}
		
		if (city == "") {
			//alert("city is null");
			valid = false;
			CityName.className = "inputError";
		}
		
		if (county == "") {
			valid = false;
			CountyName.className = "inputError";
		}
		
		if (state == "") {
			valid = false;
			StateAbbreviation.className = "inputError";
		}
		
		if (postalcode == "") {
			valid = false;
			PostalCode.className = "inputError";
		}

		//alert("validateLocation, valid is : " + valid);
		if (valid) {
			//alert("Setting ids!");
			Client.setCityID(cityidReturned);
			Client.setCountyID(countyidReturned);
			Client.setStateID(stateidReturned);
			Client.setPostalCodeID(postalcodeidReturned);

			if (Locoolly.getDebug()) {
				traceLocoolly("getCityID() : " + Client.getCityID());
				traceLocoolly("getCountyID() : " + Client.getCountyID());
				traceLocoolly("getStateID() : " + Client.getStateID());
				traceLocoolly("getPostalCodeID() : " + Client.getPostalCodeID());
			}
		}
		return valid;
	}
}
function deleteClient(ClientID)
{
	//alert("deleteClient");
	var ClientXML = GetXmlHttpObject();
	if (ClientID == 0)
		return false;

	if (ClientID == "")
		return false;

	var url="/Production/deleteClientEntry.php";
	url=url+"?ClientID="+ClientID;
	url=url+"&sid="+Math.random();
	//alert("entryQuery : url, " + url);

	ClientXML.onreadystatechange=dummy;
	ClientXML.open("GET",url,false);
	ClientXML.send(null);

	var popups;
	var results;

	var xmlDoc = ClientXML.responseXML;
	//alert("ClientXML.responseText : " + ClientXML.responseText);
	
	if (Locoolly.getDebug())
		traceLocoolly("deleteClient : " + ClientXML.responseText);
}
function deleteSearchWords(SearchWordsID)
{
	//alert("deleteSearchWords");
	var SearchWordsXML = GetXmlHttpObject();
	if (SearchWordsID == 0)
		return false;

	if (SearchWordsID == "")
		return false;

	var url="/Production/DeleteSearchWords.php";
	url=url+"?SearchWordsID="+SearchWordsID;
	url=url+"&sid="+Math.random();
	//alert("entryQuery : url, " + url);

	SearchWordsXML.onreadystatechange=dummy;
	SearchWordsXML.open("GET",url,false);
	SearchWordsXML.send(null);

	var popups;
	var results;

	var xmlDoc = SearchWordsXML.responseXML;
	if (Locoolly.getDebug())
		traceLocoolly("SearchWordsXML.responseText : " + SearchWordsXML.responseText);
	
	return true;
}
function deleteMainSelect()
{
	
	if (!document.hasChildNodes) {
		//alert("deletePopups : Unable to get popups");
		return false;
	}

	if (document.getElementById) {
		popups = document.getElementById('MainSelect');
		if (popups) {
			results = popups.hasChildNodes();

			if (results) {
				while (popups.hasChildNodes()) {
					//alert("removing Last Child");
					popups.removeChild(popups.lastChild);
				}
			}
		}
	}
}
function deleteSearchCategory(SearchCategoryID)
{
	//alert("deleteSearchCategory");
	var SearchCategoryXML = GetXmlHttpObject();
	if (SearchCategoryID == 0)
		return false;

	if (SearchCategoryID == "")
		return false;

	var url="/Production/DeleteSearchCategory.php";
	url=url+"?SearchCategoryID="+SearchCategoryID;
	url=url+"&sid="+Math.random();
	//alert("entryQuery : url, " + url);

	SearchCategoryXML.onreadystatechange=dummy;
	SearchCategoryXML.open("GET",url,false);
	SearchCategoryXML.send(null);

	var popups;
	var results;

	var xmlDoc = SearchCategoryXML.responseXML;
	if (Locoolly.getDebug())
		traceLocoolly("SearchCategoryXML.responseText : " + SearchCategoryXML.responseText);
	
	return true;
}
function deleteFooter() {
	//alert("deleteFooter");

	var popups = document.getElementById('selectfooter');
	popups = document.getElementById('entrypopups');

	if (!popups)
	{
		alert("deleteFooter, could not find selectfooter");
		return false;
	}

	if (!document.hasChildNodes) {
	//alert("deletePopups : Unable to get popups");
		return false;
	}

	if (document.getElementById) {
		if (popups) {
			results = popups.hasChildNodes();
	
			if (results) {
				while (popups.hasChildNodes()) {
					//alert("removing Last Child");
					popups.removeChild(popups.lastChild);
				}
			}
		}
	}
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
function trimSpaces(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s;
}
function dummy()
{
	;
}
function traceLocoolly(string) {
	if (this.console && typeof console.log != "undefined")
		console.log(string);
}


// ie:   InputSearchWords = document.getElementById('Input-search-words');
// let Employee inherit from Human
Employee.prototype = new Human();
Client.prototype = new Human();

SearchWordsClass.prototype = new SearchClass();
SearchCategoryClass.prototype = new SearchClass();
RadiusClass.prototype = new SearchAreaClass();
CityZipClass.prototype = new SearchClass();
ClientClass.prototype = new WebNames();
//MasterClass.prototype = new 
Master = new MasterClass();

HomePlace.prototype = new ClientClass();
DisplayAd.prototype = new ClientClass();

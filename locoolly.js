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

function traceLocoolly(string) {
	if (this.console && typeof console.log != "undefined")
		console.log(string);
}

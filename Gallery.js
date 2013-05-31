 var galleryModule = function () {
        
        // private property
	var index =  0;
	var defaultimage = "http://locoolly.com/images/locoolly/communitypage_art/placeholder-1.jpg";

	var testdata = {
	    imagecount: 10,
	    description: ["City of Live Oak",
	    "Compass Icon",
	    "Fox News",
	    "Government",
	    "Harris Professional Services",
	    "Mall Placeholder",
	    "Network art",
	    "Network Member photo",
	    "News-homepage",
	    "oovoo_logo"],
	    httpname: ["http://www.locoolly.com/images/CityOfLiveOak.png",
	    "http://www.locoolly.com/images/compass-icon.jpg",
	    "http://www.locoolly.com/images/fox-news.jpg",
	    "http://www.locoolly.com/images/government.jpg",
	    "http://www.locoolly.com/images/hgs.jpg",
	    "http://www.locoolly.com/images/Mall Placeholder.jpg",
	    "http://www.locoolly.com/images/network art.jpg",
	    "http://www.locoolly.com/images/Network Member photo.jpg",
	    "http://www.locoolly.com/images/News-homepage.jpg",
	    "http://www.locoolly.com/images/oovoo_logo.jpg"],
	    position: 0,
	    view: 0,
	    available: [true, true,true, true, true, true, true, true, true,true],
	    id: [0,0,0,0,0,0,0,0,0,0]
	} ;
        var config = {
	    imagecount: 3,
            colors: [ "#F63", "#CC0", "#CFF" ]
        } ;

	/*
		Pictures are NOT added via addImage until
		they have been downloaded from the server!
		photo is a private data!
	*/
	var photo = {
		//gridsize: number of photos displayed at once
		// default for fitness.php, sports.php, and community.php: 5
		gridsize: 5,
		// transitions: true, means fade in/out when photos swap
		transitions: false,

		//imagecount: total number of photos
		imagecount: 0,
		position: 0,
		view: 0,
		description: [],
		available: [],
		httpname: [],
		id: []
	} ;

	// this is a private method
        // can be accessed within Module
        // cannot be accessed from outside

	function setDefault(image) {
		//alert("setDefault! : " + image);
		defaultimage = image;
	};
	
	function getDefault() {
		return defaultimage;
	};

	function txImages() {
		    //alert("txImages!");
		    // console.log("txImages, photo.imagecount : " + photo.imagecount);
		    var max = photo.gridsize;
		    var start = photo.view;

		    //console.log("txImages, start : " + start + ", max: " + max);

		    photo.odown = 1;
		    photo.oup = 0;
		    if (photo.available[start]) {
			    	setTimeout(oDown, photo.display * 1000);
				//setTimeout(bumpImage,2000);
		    } else {
				photo.view = 0;
				setTimeout(bumpImage, photo.display * 1000);
		    }

	    };

	    function oDown() {
		var id = "photo1";
		//console.log("oDown, photo.odown : " + photo.odown);
		var div = document.getElementById(id);
		div.style.opacity = photo.odown;
		div.style.filter = "alpha(opacity:" + photo.odown * 100+")";
		photo.odown = photo.odown - .1;
		
		if (photo.odown > 0)
			setTimeout(oDown, (photo.fade / 10 + 20));
		if (photo.odown < 0)
			photo.odown = 0;
		if (photo.odown == 0)
		{
			photo.odown = 1;
			photo.oup = 0;
			bumpImage();
			//opacityUp();
		}
	    }

	    function oUp() {
		var id = "photo1";
		//console.log("oUp, photo.oup : " + photo.oup);
		var div = document.getElementById(id);
		div.style.opacity = photo.oup;
		div.style.filter = "alpha(opacity:" + photo.oup * 100+")";
		photo.oup = photo.oup + .1;
		
		if (photo.oup > 1) {
			photo.odown = 1;
			photo.oup = 0;
			setTimeout(oDown, photo.display * 1000);
			return false;
		}
		setTimeout(oUp, (photo.fade / 10 + 80));
	    }

	    function bumpImage() {
		//console.log("bumpImage");
		photo.view++;

		photo.odown = 1;
		photo.oup = 0.01;

		if (photo.view >= photo.imagecount)
			photo.view = 0;

		var id = "photo1";
		var div = document.getElementById(id);
		if (photo.httpname[photo.view] == "undefined")
			alert("src is undefined!");
		div.src = photo.httpname[photo.view];
		//console.log("bumpImage, src is now : " + div.src);
		div.alt = photo.description[photo.view];
		div.style.opacity = photo.oup;
		div.style.filter = "alpha(opacity:" + photo.oup * 100+")";

		//xyzzy
		setTimeout(oUp,photo.fade);
	}
	function ldImages() {
		    //alert("ldImages!");
		    //console.log("ldImages, photo.imagecount : " + photo.imagecount);
		    var max = photo.gridsize;
		    //console.log("max : " + max);
		    var divpos = 1;
		    if (photo.imagecount < max)
			    max = photo.imagecount;

		    var start = photo.position;
		    var end = start + max;
		    if (end > photo.imagecount)
			    end = photo.imagecount;

		    //console.log("start : " + start);
		    //console.log("end : " + end);

		    for (var i=start; i < end; i++) {
			    var id = "photo" + divpos++;
			    //console.log("id : " + id);
			    var div = document.getElementById(id);

			    if (div) {
				    //console.log("img div exists");
				    if (photo.available[i]) {
					    if (photo.httpname[i] == "undefined")
						    alert("undefined, 2");
					 div.src = photo.httpname[i];
					 div.alt = photo.description[i];
				    }
			    }
		    }
		    
		    end++;
		    if (end <= max) {
			    for (i = end; i <= max; i++) {
				     var id = "photo" + i;
				     var div = document.getElementById(id);

				     if (div) {
					     div.src = defaultimage;
				     }
			    }
		    }
	    };

        return {
            // public method
            // can be accessed from outside

	    setDefaultImage: function(image) {
		    setDefault(image);
	    },

	    getDefaultImage: function() {
		    return getDefault();
	    },

	    /*
		Pictures are NOT added via addImage until
		they have been downloaded from the server!
	    */
	    addImage: function(name, desc, avail, id) {
		    /*
		    	Has the image with the unique ID already been added?
			If so, quietly ignore it!
		    */
		    if (galleryModule.checkKey(id)) {
			//console.log("checkKey found a match!");
			return false;
		    }
		    photo.imagecount++;

		    if (name == "undefined")
			    alert("undefined, 3");

		    photo.httpname.push(name);
		    photo.description.push(desc);
		    photo.available.push(avail);
		    photo.id.push(id);
		   // console.log("addImage, id : " + id + " name : " + name + " count : " + photo.imagecount);
	    },

	    // index is HobbyShotsID!
	    markAvailable: function(index) {
		    var i;

		    for (i = 0; i < photo.imagecount; i++) {
			   // console.log("comparing " + index + " with " + photo.id[i] + " i = " + i);
			    if (photo.id[i] == index) {
				    photo.available[i] = true;
				    //console.log("marked " + i + " id = " + index + " as available, photo.imagecount : " + photo.imagecount);
				    return true;
			    }
		    }

		    return false;
	    },
	    /*
	    	function checkKey compares the given key to all entries in the id array;
		if a match is found, then that is an "error" of trying add the same id twice.
	    */
	    checkKey: function(key) {
		    var i;
		    for (i = 0; i < photo.imagecount; i++) {
			   // console.log("compare checkKey photo.id[i] : " + photo.id[i] + " to " + key);
			    if (photo.id[i] == key) {
				     //console.log("checkKey, matched :" + key + " on : " + i);
				     return true;
			     }
		    }

		  //  console.log("checkKey, return false");
		    return false;
	    },

	    getFirstAvailable: function() {
		    var i;
		    for (i = 0; i < photo.imagecount; i++) {
		
			    // console.log("avail: " + photo.available[i] + " i " + i);

			     if (photo.available[i] == "false" || photo.available[i] == false) {
				     var next = i;
				     if (next <= photo.gridsize) {
					    // console.log("getFirstAvailable, calling loadImages!");
					     galleryModule.loadImages();
				     }

				     //console.log("getFirstAvailable, returning : " + next);
				     return next;
			     }
		    }
		   // console.log("getFirstAvailable, return -1");
		    return -1;
	    },

	    /*
	    	Display is the number seconds each photo is displayed
	    */

	    setDisplay: function(display) {
		    photo.display = display;
	    },

	    getDisplay: function() {
		    return photo.display;
	    }, 

	    /*
	    	Fade is the number of milliseconds each photo is up/down
	    */

	    setFade: function(fade) {
		    photo.fade = fade;
	    },

	    getFade: function() {
		    return photo.fade;
	    },
	    /*
	    	Transitions is set true to run the photos is order
	    */
	    setTransitions: function(transitions) {
		    photo.transitions = transitions;
	    },
	 
	    getTransitions: function() {
		    return photo.transitions;
	    },

	    getImageName: function(index) {
		    if (index > photo.imagecount)
			    return 0;

		    if (index < 0)
			    return 0;

		    return photo.httpname[index];
	    },

	    getImageDesc: function(index) {
		     if (index > photo.imagecount)
			    return 0;
		     if (index < 0)
			    return 0;

		    return photo.description[index];
	    },

	    getImageID: function(index) {
		     if (index > photo.imagecount)
			    return 0;
		     if (index < 0)
			    return 0;

		    return photo.id[index];
	    },

            // public method
            // can be accessed from outside
	    initTest: function() {

		    for (var i = 0; i < testdata.imagecount; i++) {
			    photo.description[i] = testdata.description[i];
			    photo.httpname[i] = testdata.httpname[i];
			    photo.imagecount = i + 1;
			    photo.available[i] = testdata.available[i];
			    
			    //console.log("des : " + photo.description[i]);
			    //console.log("name : " + photo.httpname[i]);
			    //console.log("count : " + photo.imagecount);
			    //console.log("avail : " + photo.available[i]);
		    }

		    return false;
	    },

	    init: function() {
		    //galleryModule
		    var TransferXML;
		    var ImagesXML;
		    TransferXML = GetXmlHttpObject();
		    ImagesXML = GetXmlHttpObject();
		    galleryModule.TransferXML = TransferXML;
		    galleryModule.ImagesXML = ImagesXML;
		    //alert("initing away!");
	    },
	    
	    imageCount: function() {
		    return photo.imagecount;
	    }, 

	    transitionImages: function() {
		    txImages();
	    },

	    loadImages: function() {
		    //alert("doing loadImages!");
		    ldImages();
	    } ,

	    moveLeft: function() {
		    ;
		    photo.position--;
		    if (photo.position < 0)
			    photo.position = 0;
		    //console.log("moveLeft, new position : " + photo.position);
		    ldImages();
	    },

	    moveRight: function() {
		    ;
		    photo.position++;

		    if (photo.position > (photo.imagecount - photo.gridsize))
			    photo.position--;
		    //console.log("moveRight, new position : " + photo.position);
		    ldImages();
	    },

	    logHttpname: function() {
		    for (var i = 0; i < photo.imagecount; i++) {
			    console.log(photo.httpname[i]);
		    }
	    },

	    logDescription: function() {
		    for (var i = 0; i < photo.imagecount; i++) {
			    console.log(photo.description[i]);
		    }
	    },

	    logPosition: function() {
		    console.log("photo.Position: " + photo.position);
	    },

	    getImageCount: function() {
		    console.log("imagecount : " + photo.imagecount);
	    },

	    setGridSize: function(gridsize) {
		    photo.gridsize = gridsize;
	    },

	    getGridSize: function() {
		    console.log("gridsize : " + photo.gridsize);
	    },

        };
    }();

'use strict';

App.factory("SocialMediaService", function(AjaxService) {
	var sm = {
		// "facebook": "https://www.facebook.com/alex.deibold",
		twitter: "https://twitter.com/trevorjacob93",
		instagram: "http://instagram.com/gkc4life#",
		youtube: "http://www.youtube.com/whatsupbrodudehi"
	};

	return {
		getLinks: function() {
			// var serviceUrl = "db/SocialMedia.json";
			// return AjaxService.makeCall(serviceUrl);
			return sm;
		}
	};
});
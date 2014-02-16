define([
	'backbone'
],
function( Backbone ) {
	'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Causemap model");
		},

		defaults: {
		},

	 	mapOptions:  {
				zoom: 15,
				center: new google.maps.LatLng(35.6903, 139.7006),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
		},

  });
});

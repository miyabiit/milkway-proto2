define([
	'backbone',
	'hbs!tmpl/item/causemap_tmpl'
],
function( Backbone, CausemapTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Causemap ItemView");
		},
		
		template: CausemapTmpl,
		el: "#causemap",

		ui: {
			mapContainer: "#map",
		},

		/* on render callback */
		onRender: function() {
			var mapOptions = {
				center: new google.maps.LatLng(35.6903, 139.7006),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};

			var map = new google.maps.Map(this.el, mapOptions);
			this.ui.mapContainer.html(this.el);
			console.log("render a Causemap ItemView");

			google.maps.event.addListener(map, "idle", function(){
				map.setCenter(mapOptions.center);
				google.maps.event.trigger(map, 'resize');
			});
		}
	});
});

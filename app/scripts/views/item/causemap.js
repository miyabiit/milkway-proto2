define([
	'backbone',
	'hbs!tmpl/item/causemap_tmpl',
	'models/causemap'
],
function( Backbone, CausemapTmpl,Causemap) {
	'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
		},
		
		template: CausemapTmpl,
		el: "#causemap",

		ui: {
			mapContainer: "#map",
		},

		/* on render callback */
		onRender: function() {
			var cause = new Causemap();
			var markers = [];

			var map = new google.maps.Map(this.el, cause.mapOptions);
			//this.ui.mapContainer.html(this.el); //不要?

			google.maps.event.addListener(map, 'click', clickMap);
			
			function clickMap(event){
				createMarker(event.latLng, map);
			};

			function createMarker(latLng, map){
				var infoWindow = new google.maps.InfoWindow();
				var marker = new google.maps.Marker({
					position: latLng,
					draggable: true,
					map: map
				});

				google.maps.event.addListener(marker, 'click', function() {
					var info = '緯度:' + Math.round(marker.getPosition().lat() * 100)/100 + ' 経度:' + Math.round(marker.getPosition().lng() * 100)/100;
					infoWindow.setContent(info);
					infoWindow.open(map, marker);
				});
			};
		},
	});
});

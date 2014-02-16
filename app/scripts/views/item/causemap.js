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
			var marker;

			var map = new google.maps.Map(this.el, cause.mapOptions);
			//this.ui.mapContainer.html(this.el); //不要?

			google.maps.event.addListener(map, 'click', clickMap);

			function clickMap(event){
				if(marker){marker.setMap(null)};
				marker = new google.maps.Marker({
					position: event.latLng,
					draggable: true,
					map: map
				});
			}
		},
	});
});

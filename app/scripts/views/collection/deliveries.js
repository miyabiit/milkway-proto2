define([
	'backbone',
	'views/item/delivery'
],
function( Backbone, Delivery ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({
		itemView: Delivery,
		tagName: "ul"
	});
});

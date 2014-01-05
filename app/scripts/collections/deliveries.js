define([
	'backbone',
	'models/delivery'
],
function( Backbone, Delivery ) {
	'use strict';

	return Backbone.Collection.extend({
		url: "/api/v1/deliveries",
		model: Delivery
	});
});

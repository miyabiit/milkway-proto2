define([
	'backbone',
	'communicator',
	'views/new_delivery',
	'views/collection/deliveries',
	'views/item/causemap',
	'collections/deliveries',
	'routers/deliveries',
	'controllers/deliveries'
],

function(
	Backbone, 
	Communicator, 
	NewDeliveryView, 
	DeliveriesCollectionView, 
	CausemapView,
	DeliveriesCollection, 
	DeliveriesRouter, 
	DeliveriesController
){
    'use strict';

	var App = new Backbone.Marionette.Application();

	App.addRegions({
		newDelivery: "#new-delivery",
		deliveries: "#deliveries",
		causemap: "#causemap"
	});

	/* Add initializers */
	App.addInitializer( function () {
		this.collection = new DeliveriesCollection();
		this.collection.fetch();
	});

	App.addInitializer( function () {
		App.newDelivery.attachView(new NewDeliveryView({el: App.newDelivery.el, collection: this.collection}));
		App.deliveries.show(new DeliveriesCollectionView({collection: this.collection}));
		//
		var causemapView = new CausemapView();
		App.causemap.show(causemapView);
	});

	App.addInitializer( function () {
		new DeliveriesRouter({controller: new DeliveriesController({collection: App.collection })});
		Backbone.history.start();
	});

	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});

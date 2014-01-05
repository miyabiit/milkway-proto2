define([
	'backbone',
	'communicator',
	'models/delivery'
],
function(Backbone, Communicator, Delivery){
	'use strict';

	return Backbone.View.extend({
		el: "#new-delivery",
		events: {
			"keypress": "postDelivery"
		},

		postDelivery: function(event){
			if(event.keyCode == 13){
				var delivery = new Delivery({address: this.$el.val()});
				delivery.save();
				this.collection.add(delivery);
				this.$el.val('');
			}
		}
	});
});

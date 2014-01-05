define([
	'backbone',
	'hbs!tmpl/item/delivery_tmpl'
],
function( Backbone, DeliveryTmpl  ) {
	'use strict';
	
	return Backbone.Marionette.ItemView.extend({
		tagName:"li",

		initialize: function() {
			this.changeFinishedStyle();
			this.model.on('sync', this.changeFinishedStyle, this);
		},
		
		template: DeliveryTmpl,
		
		events: {
			"click": "onClickDelivery"
		},

		onClickDelivery: function(event) {
			if(this.model.get('finished')){
				this.model.save({"finished": false});
			}else{
				this.model.save({"finished": true});
			}
		},
		changeFinishedStyle: function() {
			if(this.model.get('finished')){
				this.$el.attr('style', 'text-decoration: line-through;');
			}else{
				this.$el.attr('style', 'text-decoration: none;');
			}
		}
	});
});

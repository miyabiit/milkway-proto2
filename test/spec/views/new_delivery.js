(function() {
	'use strict';

	var root = this;

	root.define([
		'views/new_delivery'
		],
		function( NewDelivery ) {

			describe('NewDelivery View', function () {

				it('should be an instance of NewDelivery View', function () {
					var new_delivery = new NewDelivery();
					expect( new_delivery ).to.be.an.instanceof( NewDelivery );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
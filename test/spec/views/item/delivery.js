(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/delivery'
		],
		function( Delivery ) {

			describe('Delivery Itemview', function () {

				it('should be an instance of Delivery Itemview', function () {
					var delivery = new Delivery();
					expect( delivery ).to.be.an.instanceof( Delivery );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
(function() {
	'use strict';

	var root = this;

	root.define([
		'models/delivery'
		],
		function( Delivery ) {

			describe('Delivery Model', function () {

				it('should be an instance of Delivery Model', function () {
					var delivery = new Delivery();
					expect( delivery ).to.be.an.instanceof( Delivery );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
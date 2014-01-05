(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/deliveries'
		],
		function( Deliveries ) {

			describe('Deliveries Collection', function () {

				it('should be an instance of Deliveries Collection', function () {
					var deliveries = new Deliveries();
					expect( deliveries ).to.be.an.instanceof( Deliveries );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
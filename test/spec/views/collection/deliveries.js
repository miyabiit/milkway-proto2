(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/deliveries'
		],
		function( Deliveries ) {

			describe('Deliveries Collectionview', function () {

				it('should be an instance of Deliveries Collectionview', function () {
					var deliveries = new Deliveries();
					expect( deliveries ).to.be.an.instanceof( Deliveries );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
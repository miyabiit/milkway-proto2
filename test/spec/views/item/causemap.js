(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/causemap'
		],
		function( Causemap ) {

			describe('Causemap Itemview', function () {

				it('should be an instance of Causemap Itemview', function () {
					var causemap = new Causemap();
					expect( causemap ).to.be.an.instanceof( Causemap );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
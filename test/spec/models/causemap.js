(function() {
	'use strict';

	var root = this;

	root.define([
		'models/causemap'
		],
		function( Causemap ) {

			describe('Causemap Model', function () {

				it('should be an instance of Causemap Model', function () {
					var causemap = new Causemap();
					expect( causemap ).to.be.an.instanceof( Causemap );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
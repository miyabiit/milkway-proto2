define([
	'backbone'
],
function(Backbone){
    'use strict';

	return Backbone.Marionette.AppRouter.extend({
		appRoutes: {
			"all" : "all",
			"finished" : "finished"
		},
	});
});

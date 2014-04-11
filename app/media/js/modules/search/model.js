define(['backbone'], function(Backbone) {
	
	var SearchModel = Backbone.Model.extend({
		defaults: {
			content: 'Search view content'
		}
	});
	
	return SearchModel;
});
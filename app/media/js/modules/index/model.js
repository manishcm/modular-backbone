define(['backbone'], function(Backbone) {
	
	var IndexModel = Backbone.Model.extend({
		defaults: {
			content: "Index View Content"
		}
	});
	
	return IndexModel;
});
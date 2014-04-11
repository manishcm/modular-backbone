define(['backbone'], function(Backbone) {
	
	var OrderModel = Backbone.Model.extend({
		defaults: {
			"content": "Order Views Content"
		}
	});
	
	return OrderModel;
});
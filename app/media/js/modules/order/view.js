define(['backbone', 'modules/order/model'], function(Backbone, OrderModel) {
	
	var OrderView = Backbone.View.extend({
		initialize: function(options) {
			this.model = new OrderModel();
		},
		render: function() {
			this.$el.html(this.model.get('content'));
			return this;
		}
	});
	
	return OrderView;
});

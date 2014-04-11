define(['backbone', 'modules/index/model'], function( Backbone, IndexModel){
	
	var IndexView = Backbone.View.extend({
		initialize: function(options) {
			this.model = new IndexModel();
		},
		render: function() {
			this.$el.html(this.model.get('content'));
			return this;
		}
	});
	
	return IndexView;
});
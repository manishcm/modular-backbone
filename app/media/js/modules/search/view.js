define(['backbone', 'modules/search/model'], function(Backbone, SearchModel) {
	var SearchView = Backbone.View.extend({
		initialize: function(options) {
			this.model = new SearchModel();
		},
		render: function() {
			this.$el.html(this.model.get('content'));
		}
	});
	
	return SearchView;
});
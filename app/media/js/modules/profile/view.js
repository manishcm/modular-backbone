define(['backbone', 'modules/profile/model'], function(Backbone, ProfileModel) {
	
	var ProfileView = Backbone.View.extend({
		initialize: function(options) {
			this.model = new ProfileModel();
		},
		render: function() {
			this.$el.html(this.model.get('content'));
		}
	});
	
	return ProfileView;
});
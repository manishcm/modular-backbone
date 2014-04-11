define(['backbone'], function(Backbone) {
	
	var ProfileModel = Backbone.Model.extend({
		defaults: {
			content: 'Profile View Content'
		}
	});
	
	return ProfileModel;
});
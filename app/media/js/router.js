define([
    'jquery',
    'underscore',
    'backbone',
    ], function($, _, Backbone) {
	
	var AppRouter = Backbone.Router.extend({
		initialize:function(){
            _.bindAll(this, 'index', 'order', 'profile', 'search');
        },
        routes:{
            "":'index',
            "order": 'order',
            "profile": 'profile',
            "search": 'search'
        },
        index:function(){
        	/* 
        	 * In build.js, main module is defined to include the modules/index/view. Hence this require checks whether main.js is downloaded.
        	 * If not loads it and then executes the callback to render the view.
        	 */
        	require(['modules/index/view'], function(IndexView) { 
        		this.indexView = new IndexView({el: '.container'});
                this.indexView.render();
        	});
        },
        order: function() {
        	/* 
        	 * In build.js, main module is defined to include the modules/order/view. Hence this require checks whether main.js is downloaded.
        	 * If not loads it and then executes the callback to render the view.
        	 */
        	require(['modules/order/view'],  function(OrderView) {
        		this.orderView = new OrderView({el: '.container'});
            	this.orderView.render();
        	});
        },
        profile: function() {
        	/* 
        	 * In build.js, other module is defined to include the modules/profile/view. Hence this require checks whether other.js is downloaded.
        	 * If not loads it and then executes the callback to render the view.
        	 */
        	require(['modules/profile/view'], function(ProfileView) {
        		this.profileView = new ProfileView({el: '.container'});
            	this.profileView.render();
        	});
        },
        search: function() {
        	/* 
        	 * In build.js, other module is defined to include the modules/search/view. Hence this require checks whether other.js is downloaded.
        	 * If not loads it and then executes the callback to render the view.
        	 */
        	require(['modules/search/view'], function(SearchView) {
        		this.searchView = new SearchView({el: '.container'});
        		this.searchView.render();
        	});
        }
	});
	
	var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
        
        $(document).on('click', 'a:not([data-bypass])', function (evt) {
            var href = $(this).attr('href');
            if(href){
                var protocol = this.protocol + '//';
                if (href.slice(protocol.length) !== protocol && href != '#') {
                    evt.preventDefault();
                    app_router.navigate(href, { trigger: true});
                }
            }else{
            }
        });
    };
    
    return {
        initialize:initialize
    }
});
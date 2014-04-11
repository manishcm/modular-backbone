require.config({
    paths:{
        jquery: 'lib/jquery/jquery-min',
        underscore: 'lib/underscore/underscore-min',
        backbone:'lib/backbone/backbone-min',
        text: 'lib/requirejs/text',
    },
    waitSeconds: 30,
    shim:{
        'underscore':{
            exports: '_'
        },
        'backbone':{
            deps:[ 'underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
        	exports: '$'
        }
    },
    bundles: { // Bundles allows multiple module IDs to be found in another script. For this to work, use require.js version > 2.1.10.
    	'other': ['modules/order/view', 'modules/search/view'] // other.js will contain order and search view.js files including their dependcies.
    }
});

require([
	'app', // Load only app.js here. Rest other js files will be loaded as and when needed.
], function(App){
    App.initialize();
});

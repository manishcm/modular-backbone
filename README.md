This application demonstrates how to build single page modular web applicaton using require.js and backbone.js.

Using build.js, the application is broken down into 2 modules: 
'main' : 'modules/index/view' and 'modules/profile/view'
'other' : 'modules/order/view' and 'modules/search/view'

So whenever you request for 'modules/index/view' or 'modules/profile/view', main.js is downloaded if not downloaded yet.
Similarly when we request for 'modules/order/view' or 'modules/search/view', other.js is downloaded if not downloaded yet.

This application has been return in response to a stackoverflow.com request. 
This application can be futher modularized just by modifying build.js script and defining order, search, profile as independent modules.

This ensures only those files related to a view which user is requesting for is downloaded.

Build steps:
$ node r.js -o app/media/js/build.js

Output will be stored in 'build' folder. You need to create a soft link from Apache folder /var/www to this specific folder.

When you execute above command following output will be displayed, which gives you an indication how files are concatenated.
While accessing the web app via browser, keep an eye on Network tab, to see how files are downloaded.

Tracing dependencies for: main

Tracing dependencies for: other

media/js/main.js
----------------
media/js/lib/jquery/jquery-min.js
media/js/lib/underscore/underscore-min.js
media/js/lib/backbone/backbone-min.js
media/js/router.js
media/js/app.js
media/js/main.js
media/js/modules/index/model.js
media/js/modules/index/view.js
media/js/modules/profile/model.js
media/js/modules/profile/view.js

media/js/other.js
----------------
media/js/modules/order/model.js
media/js/modules/order/view.js
media/js/modules/search/model.js
media/js/modules/search/view.js

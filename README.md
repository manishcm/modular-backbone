<p>This application demonstrates how to build single page modular web applicaton using <b>require.js</b> and <b>backbone.js</b></p>

<p>Using <code>build.js</code>, the application is broken down into 2 modules: 
<ul>
<li><code>main</code> : <code>modules/index/view</code> and <code>modules/profile/view</code></li>
<li><code>other</code> : <code>modules/order/view</code> and <code>modules/search/view</code></li>
</ul>
</p>

<p>So whenever you request for <code>modules/index/view</code> or <code>modules/profile/view</code>, <code>main.js</code> is downloaded if not downloaded yet. Similarly when we request for <code>modules/order/view</code> or <code>modules/search/view</code>, <code>other.js</code> is downloaded if not downloaded yet. </p>

<p>This application can be futher modularized just by modifying <code>build.js</code> script and defining <code>order, search, profile</code> as independent modules. This ensures only those files related to a view which user is requesting for is downloaded.</p>

<p>Build steps:</p>
<pre>$ node r.js -o app/media/js/build.js</pre>

<p>Output will be stored in <code>build</code> folder. You need to create a soft link from Apache folder <code>/var/www</code> to this specific folder.</p>

<p>When you execute above command following output will be displayed, which gives you an indication how files are concatenated. While accessing the web app via browser, keep an eye on Network tab, to see how files are downloaded.</p>

<pre>Tracing dependencies for: main

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
</pre>

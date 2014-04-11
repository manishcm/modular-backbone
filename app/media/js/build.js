({
	appDir: "../..",
	baseUrl: 'media/js',
	mainConfigFile: 'main.js',
	dir: '../../../build', /* Output folder */
	modules: [{  
		name: 'main',  // Main module is defined to include index/view and profile/view and their corresponding dependencies 
		include: ['modules/index/view', 'modules/profile/view']
	}, {
		name: 'other', // Other module definition. 
		create: true, // Since such a file does not exist in our project, create it explicitly.
		include: ['modules/order/view', 'modules/search/view'], // Include order/view and search/view definitions in order.js
		exclude: ['main'] // Don't include the contents available in main.js to avoid redundant code and we are sure main.js is downloaded first.
	}],
	removeCombined: true // Exclude the files from output directory which are added to above modules
})

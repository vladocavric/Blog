const path = require('path');

module.exports = {
	entry: {
		'site': './assets/js/main.js'
	},
	output: {
		path: path.join(__dirname, './main/js/'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname),
				loader: 'babel-loader'
			}
		]
	}
};

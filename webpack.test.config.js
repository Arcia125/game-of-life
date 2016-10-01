var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist')
	},
	module: {
		loaders: [
		{
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            //loader: ExtractTextPlugin.extract('css!sass')
        },
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		},
		{
			test: /\.html$/,
			exclude: /node_modules/,
			loader: 'file?name=[name].[ext]'
		},
		{
			test: /\.png$/,
			exclude: /node_modules/,
			loader: 'url-loader'
		}
		]
	},
	// externals: {
	// 	'react/addons': true,
	// 	'react/lib/ExecutionEnvironment': true,
	// 	'react/lib/ReactContext': true
	// },
	devtool: 'source-map',
	// plugins: [
	// 	new OpenBrowserPlugin({ url: 'http://' + host + ':' + port})
	// ]
}
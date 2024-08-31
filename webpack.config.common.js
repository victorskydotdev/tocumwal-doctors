const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'none',

	entry: './src/index.js',
	// output: {
	// 	filename: '[name].[contenthash].js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/html/index.html',
			chunks: ['main'],
			filename: 'index.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/about.html',
			chunks: ['main'],
			filename: 'about.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/contact.html',
			chunks: ['main'],
			filename: 'contact.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/terms.html',
			chunks: ['main'],
			filename: 'terms.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/privacy-policy.html',
			chunks: ['main'],
			filename: 'privacy-policy.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/pricing.html',
			chunks: ['main'],
			filename: 'pricing.html',
			inject: 'head',
		}),

		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{ from: '../assets/favicon.png', to: 'favicon.png' }, // Copy the favicon to the output directory
		// 	],
		// }),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // Creates `style` nodes from JS strings
					'css-loader', // Translates CSS into CommonJS
					'sass-loader', // Compiles Sass to CSS
				],
			},

			{
				test: /\.html$/,
				use: ['html-loader'],
			},

			{
				test: /\.(svg|png|jpe?g|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs',
					},
				},
			},
		],
	},
};

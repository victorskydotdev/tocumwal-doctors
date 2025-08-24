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
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/about.html',
			chunks: ['main'],
			filename: 'about.html',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/contact.html',
			chunks: ['main'],
			filename: 'contact.html',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/terms.html',
			chunks: ['main'],
			filename: 'terms.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/privacy-policy.html',
			chunks: ['main'],
			filename: 'privacy-policy.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/fees-billing.html',
			chunks: ['main'],
			filename: 'fees-billing.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/pricing.html',
			chunks: ['main'],
			filename: 'pricing.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/appointments.html',
			chunks: ['main'],
			filename: 'appointments.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/updates.html',
			chunks: ['main'],
			filename: './blog/index.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/post.html',
			chunks: ['main'],
			filename: './blog/post.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/activity-update-template.html',
			chunks: ['main'],
			filename: './activity-update/index.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/wart-treatment-page.html',
			chunks: ['main'],
			filename: './wart-treatment/index.html',
			inject: 'head',
			favicon: 'src/assets/favicon.png',
		}),

		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/assets/favicon.png', to: 'favicon.png' }, // Copy the favicon to the output directory
			],
		}),
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

			// {
			// 	test: /\.(svg | png | jpe?g | gif$)/,
			// 	type: 'asset/resource',
			// 	generator: {
			// 		filename: 'assets/[hash][ext]',
			// 	},
			// },
		],
	},
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// Импортируем плагин

let mode = 'development';
let target = 'web'; // в режиме разработки browserslist не используется
if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist'; // в продакшен режиме используем browserslist
}

const plugins = [
	new HtmlWebpackPlugin({
		template: './src/index.html',
	}),
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css', // Формат имени файла
	}), // Добавляем в список плагинов
	new TsconfigPathsPlugin({
		configFile: "./tsconfig.json"
	})
];

if (process.env.SERVE) { // Используем плагин только если запускаем devServer
	plugins.push(new ReactRefreshWebpackPlugin());
} // Данный код должен быть размещен после объявления массива plugins

module.exports = {
	mode,
	target,
	plugins, // Сокращенная запись plugins: plugins в ES6+
	entry: './src/App.tsx',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},
	devServer: {
		hot: true,
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
		// plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
	},
	module: {
		rules: [
			{ test: /\.(html)$/, use: ['html-loader'] },
			// {
			// 	test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
			// 	use: [
			// 		MiniCssExtractPlugin.loader,
			// 		'css-loader',
			// 		'postcss-loader',
			// 		'sass-loader',
			// 	],
			// },
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
				// изображения размером до 8кб будут инлайнится в код
				// В режиме разработки все изображения будут помещаться в dist/assets
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/, // не обрабатываем файлы из node_modules
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			cacheDirectory: true, // Использование кэша для избежания рекомпиляции
			// 			// при каждом запуске
			// 		},
			// 	},
			// },
			{
				test: /\.(js|jsx)$/, // обновляем регулярное выражение для поддержки jsx
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					"babel-loader", // transpile *.js, *.jsx, *.ts, *.tsx to result according to .browserlistrc and babel.config.js files
					{
						loader: "ts-loader", // transpile *.ts to *.js, despite babel-loader deals with typeScript without restrictions but doesn't have .browserlist support
						options: {
							transpileOnly: true, // we don't type checking during the compilation - it's task for CodeEditor
						},
					},
					// optional: "ifdef-loader" // prodives conditinal compilation: https://github.com/nippur72/ifdef-loader
					// optional: "eslint-loader" //provides lint-errors into wepback output
				],
			},
			// rule for ts, tsx files
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					"babel-loader", // transpile *.js, *.jsx, *.ts, *.tsx to result according to .browserlistrc and babel.config.js files
					// optional: "ifdef-loader" // prodives conditinal compilation: https://github.com/nippur72/ifdef-loader
					// optional: "eslint-loader" //provides lint-errors into wepback output
				],
			},
			{
				test: /\.css$/,
				exclude: /\.module\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.module\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								// localIdentName: '[name]__[local]__[hash:base64:5]'
								localIdentName: '[local]__[hash:base64:5]'
							},
						},
					},
				],
			},
		],
	}
}
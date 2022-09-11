const { resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
        test: /\.(mp3|mp4)$/i,
        use: [ 'file-loader'],
      },
			{
        test: /\.(png|jpe?g|webp|gif|svg|)$/i,
        use: [
          {
            loader: 'img-optimize-loader',
          },
        ],
      },
		]
	},

	plugins: [
		new HTMLWebpackPlugin({
				template: resolve(__dirname, 'src', 'index.html'),
		}),
	],

	devServer: {
		port: 3000,
		watchFiles: ['./*']
	}
}
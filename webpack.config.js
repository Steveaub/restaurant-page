const path = require('path');  // Add this line to import the 'path' module

const HtmlWebpackPlugin = require('html-webpack-plugin');  // Plugin to generate an HTML file

module.exports = {
  mode: 'development',  // Use 'production' when you're ready to build for production
  entry: './src/index.js',  // Entry point for your JavaScript
  output: {
    filename: 'main.js',  // Name of the bundled output file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true,  // Cleans the output directory before each build (helpful to avoid stale files)
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Serve files from the 'dist' directory
    watchFiles: ['src/*.html'],  // Watch for changes in HTML files inside 'src'
    hot: true,  // Enable Hot Module Replacement
    open: true,  // Automatically open the browser when the server starts
    port: 8080,  // Port to run the dev server on (default is 8080)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  // Template HTML file to use
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,  // Match CSS files
        use: ['style-loader', 'css-loader'],  // Loaders to handle CSS files
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Match image files
        type: 'asset/resource',  // Use asset/resource to handle images
      },
    ],
  },
};

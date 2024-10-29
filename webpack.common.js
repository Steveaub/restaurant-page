const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the path if necessary
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clears the output folder each time
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // To handle CSS files
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // For images
            },
        ],
    },
};

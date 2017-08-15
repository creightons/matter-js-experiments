const {resolve} = require('path');

module.exports = {
    entry: {
        experiment: './experiment.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                },
            },
        ]
    },
};

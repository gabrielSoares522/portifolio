const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool:"source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'), /* define the output path */
        filename: 'bundle.js' /* no do arquivo final */
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
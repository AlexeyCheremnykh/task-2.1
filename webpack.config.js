var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'styles.css'
});*/

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                //use: extractPlugin.extract({
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
                //})
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options : {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            }
        ]
    },
    plugins: [
        //extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/pages/index.pug'
        })
    ]
};
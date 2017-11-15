var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'styles.css'
});

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',
    },
    watch: true,
    module: {
        rules: [
            { 
                test: /\.styl$/, 
                use: extractPlugin.extract({
                    use: [                        
                        'css-loader',
                        'stylus-loader'
                    ]
                })  
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            } 
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/blocks/index.html'    
        })
    ]
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const { resolve } = require("path");

module.exports = {
    entry:[ 
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/index.js', 
        './src/style.css'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, "public"),
        publicPath: "/"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.dev.html'     // For hot-loader
        }),
        new webpack.HotModuleReplacementPlugin(),   // For hot-loader
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
          minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress:{
            warnings: false,
            unused: true,
          },
          mangle: false,
          beautify: true,
          output:{
            comments:true,
          }
        }),
        // package.json > scripts 에 작성해둬서 필요없을듯.
        // new webpack.DefinePlugin({
        //   'process.env':{
        //     NODE_ENV: JSON.stringify('production')
        //   }
        // }),
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
}
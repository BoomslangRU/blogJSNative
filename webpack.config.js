const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    }
}

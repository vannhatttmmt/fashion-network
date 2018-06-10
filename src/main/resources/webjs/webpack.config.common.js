const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname, "dist")
const port = process.env.PORT || 3000;
process.env.NODE_ENV = 'production';

module.exports = {
    context: __dirname,
    entry: {
        'js/home.bundle.js': './src/pages/home.jsx',
        'css/home.min.css': './src-scss/pages/home.scss'
    },
    output: {
        path: path.join(__dirname, '../', 'static/'),
        filename: '[name]',
    },
    resolve: {
        modules: ['node_modules', './src'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                }),
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        presets: [require.resolve('babel-preset-react-app')],
                        cacheDirectory: true,
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name]"),
    ]
}
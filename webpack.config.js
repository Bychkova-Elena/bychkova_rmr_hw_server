const path = require('path')
const webpack = require('webpack')


module.exports = {
    entry: './src/index.js', 
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
            },
            {
                test: /\.module\.s?css$/, 
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'], 
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?.css$/, 
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'], 
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public/"),
        },
        port: 3000,
        historyApiFallback: true,
        devMiddleware: {
            publicPath: "https://localhost:3000/dist/",
        },
        proxy: {
            "/api/v1": "http://51.250.65.73",
            changeOrigin: true,
        },
        hot: "only",
    },
    plugins: [new webpack.HotModuleReplacementPlugin()], // used for hot reloading when developing
    devtool: 'eval-source-map', // создает высококачественные карты кода
}
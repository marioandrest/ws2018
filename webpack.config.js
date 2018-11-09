const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/App.js',
        output: {
            path: path.resolve(__dirname, 'ws2018/'),
            filename: 'main.js'
        },
        plugins: [new MiniCssExtractPlugin({filename: 'assets/main.css'})],
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {presets: ['@babel/preset-env']}
                    }
                }, {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        (argv.mode == 'development')
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};

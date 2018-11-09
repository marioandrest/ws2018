const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: './src/App.js',
        output: {
            path: path.join(__dirname, "build/"),
            publicPath: 'http://localhost:8080/dist/'
        },
        mode: 'development',
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

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: './src/App.js',

        output: {
            path: path.join(__dirname, "dist/"),
            publicPath: (argv.mode == 'development')
                ? 'http://localhost:8080/dist/'
                : 'http://mariotinoco.com/dist/'
        },

        plugins: [new MiniCssExtractPlugin({filename: 'main.css'})],
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
                    test: /\.scss$/,
                    use: [
                        (argv.mode == 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};

const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    target: "node",
    entry: {
        main: {
            import: './index.js',
            dependOn: 'common',
        },
        common: [
            'react',
            'react-dom',
            '@loadable/component',
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/scripts"),
    },
    optimization: {
        minimize: false,
        runtimeChunk: 'single',
        chunkIds: 'named',
    },
    plugins: [
        new LoadablePlugin()
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(sass|css)$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
        ]
    }
}
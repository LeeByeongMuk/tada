const mix = require('laravel-mix');
// require('laravel-mix-alias');

const webpack = require('webpack');

mix.webpackConfig({
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.(js|jsx|tsx|ts)?$/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
        alias: {
            '@': __dirname + '/resources/js',
            '@components': __dirname + '/resources/js/components',
            '@sass': __dirname + '/resources/sass'
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            env: {
                API_URL: JSON.stringify(process.env.API_URL),
                NCLOUD_CLIENT_ID: JSON.stringify(process.env.NCLOUD_CLIENT_ID)
            }
        })
    ]
});

// TODO: prod dev 버전 분리
mix.ts('resources/js/app.tsx', 'public/js').react().sourceMaps();

mix.options({
    processCssUrls: false
});

mix.version();

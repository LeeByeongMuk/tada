const mix = require('laravel-mix');
const webpack = require('webpack');

mix.webpackConfig({
    resolve: {
        extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
        alias: {
            '@': __dirname + '/resources/js',
            '@components': __dirname + '/resources/js/components',
            '@sass': __dirname + '/resources/sass',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            env: {
                API_URL: JSON.stringify(process.env.API_URL),
                NCLOUD_CLIENT_ID: JSON.stringify(process.env.NCLOUD_CLIENT_ID),
            },
        }),
    ],
});

mix.options({
    processCssUrls: false,
});

mix.ts('resources/js/app.tsx', 'public/js').react().sourceMaps();

if (mix.inProduction()) {
    mix.version();
}

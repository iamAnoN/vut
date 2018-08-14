let mix = require('laravel-mix');
let ImageminPlugin     = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin  = require('copy-webpack-plugin');
let imageminMozjpeg    = require('imagemin-mozjpeg');

mix.webpackConfig({
    plugins: [
        //Compress images
        new CopyWebpackPlugin([{
            context: 'resources/assets/images',
            from: '**/*',
            to: 'images/'
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '65-80'
            },
            plugins: [
                imageminMozjpeg({
                    quality: 65,
                    maxMemory: 1000 * 512
                })
            ]
        })
    ],
});

if (!mix.inProduction()) {
    mix.browserSync({
        proxy: 'http://localhost:8000/'
    });
}

mix.js('resources/assets/js/app.js', 'public/js/main.js')
    // .js('resources/assets/js/login.js', 'public/js/login.js')
    .sass('resources/assets/sass/app.scss', 'public/css/main.css')
    .autoload({
        jquery: ['$', 'jQuery', 'jquery', 'window.jQuery']
    })
    .options({
        processCssUrls: false
    });
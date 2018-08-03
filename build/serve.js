import gulp from 'gulp';
import webpack from 'webpack';
import serve from 'browser-sync';
import config from './config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

gulp.task('serve', () => {
    const webpackConfig = require('./webpack.dev.config').default;

    webpackConfig.entry.app = [
        // load webpack HRM
        'webpack-hot-middleware/client?reload=true'
    ].concat(config.webpack.entry);

    var compiler = webpack(webpackConfig);

    serve({
        port: process.env.PORT || config.serverPort,
        open: false,
        server: { baseDir: config.paths.src },
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: true,
                    chunks: false,
                    modules: false
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler, {
                log: console.log
            })
        ]
    });
});
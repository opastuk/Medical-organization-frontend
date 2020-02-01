const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/global.scss')],
    },
  },
  // assetsDir: 'assets/',
  // css: {
  //   sourceMap: true,
  //   loaderOptions: {
  //     sass: {
  //       data: '@import "@/fonts.scss";',
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('fonts')
  //     .test(/\.(ttf|otf|eot|woff|woff2)$/)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .tap((options) => {
  //       options = {
  //         // limit: 10000,
  //         name: '/assets/fonts/[name].[ext]',
  //       };
  //       return options;
  //     })
  //     .end();
  // },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/umed-front/'
    : '/',
};

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/global.scss'),
      ],
    });
}

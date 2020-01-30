const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/global.scss')],
    },
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: '@import "./src/assets/global.scss";',
  //     },
  //   },
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

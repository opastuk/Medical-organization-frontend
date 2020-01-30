const path = require('path');

module.exports = {
  // chainWebpack: (config) => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  //   const svgRule = config.module.rule('svg');
  //   svgRule.uses.clear();
  //   svgRule
  //     .use('babel-loader')
  //     .loader('babel-loader')
  //     .end()
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader');
  //   // eslint-disable-next-line no-use-before-define
  //   types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/global.scss')],
    },
  },
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

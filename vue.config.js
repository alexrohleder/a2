module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/design.sass';`,
      },
    },
  },
  chainWebpack: config => {
    /**
     * enabling the inlining of svg files.
     * see: https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
     */
    {
      const svgRule = config.module.rule('svg')
  
      svgRule.uses.clear()
  
      svgRule
        .use('vue-svg-loader')
          .loader('vue-svg-loader')
    }
  },
};

'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 只能在开发环境中进行跨域，上线了要进行反向代理nginx设置
    proxyTable: {
      //这里理解成用‘/apiManage’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/apiManage/user/add’即可
      '/login': {
        target: 'http://127.0.0.1:8000',//你要跨域的网址  比如  'http://news.baidu.com',
        secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,//这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host，但是不会修改别的
        pathRewrite: {
          '^/login': 'login'//路径的替换规则
        //每次修改后需要重新npm run dev才能生效
        }
      },
      '/apiAutoTest/projectManage/projectList': {
        target: 'http://127.0.0.1:8000',//你要跨域的网址  比如  'http://news.baidu.com',
        secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,//这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host，但是不会修改别的
        pathRewrite: {
          '^/apiAutoTest/projectManage/projectList': '/apiAutoTest/projectManage/projectList'//路径的替换规则
          //每次修改后需要重新npm run dev才能生效
        }
      },
      '/apiAutoTest/apiInfo': {
        target: 'http://127.0.0.1:8000',//你要跨域的网址  比如  'http://news.baidu.com',
        secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,//这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host，但是不会修改别的
        pathRewrite: {
          '^/apiAutoTest/apiInfo': '/apiAutoTest/apiInfo'//路径的替换规则
        //每次修改后需要重新npm run dev才能生效
        }
      }
    },

    // Various Dev Server settings
    host: '127.0.0.1', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

## 常见的配置修改

- sass -> less
  - yarn add less less-loader@8
  - yarn remove sass-loader
  - 修改 webpack 规则: 在 webpack.config.js 暴露的源码中改
- 配置别名 @

  - alias: {
    "@": paths.appSrc,

- 修改域名和端口号 - start.js
  - other methods 修改环境变量：cross-env
  - yarn add cross-env
  - "start":"cross-env PORT=8080 node scripts/start.js"
- 修改浏览器兼容：

  - package.json -> browserslist
  - @babel/polyfill

    - react 脚手架：react-app-polyfill（对 @babel/polyfill 的重写）

      ```
      // index.jsx
      /* 多 ES6 内置 API 做兼容处理 */
      import 'react-app-polyfill/ie9';
      import 'react-app-polyfill/ie11';
      import 'react-app-polyfill/stable';
      ```

    - 自定义 react 项目：yarn add @babel/polyfill
      - 入口文件 import '@babel/polyfill'

- 处理 proxy 跨域
  - 在 src 目录中，新建 setupProxy.js
  - yarn add http-proxy-middleware
    - http-proxy-micdleware: 实现跨域代理的模块
    - webpack-dev-server 的跨域代理原理，也是基于它完成的

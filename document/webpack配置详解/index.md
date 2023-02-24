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

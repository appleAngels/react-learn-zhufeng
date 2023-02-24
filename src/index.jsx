/* 多 ES6 内置 API 做兼容处理 */
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div>222</div>
  </React.StrictMode>
)

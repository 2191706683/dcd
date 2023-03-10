npm i vue-router pinia @types/node stylus

- vite.config.ts 配置

  ```
     import { resolve } from 'path'
      resolve: {
        alias: {
          "@": resolve(__dirname, 'src')
        }
      }
  ```

- tsconfig.json 配置

  ```
    "baseUrl": ".",
    "paths": {
        "@/*":[
        "src/*"
        ]
    }
  ```
- pinia全局启用

- 路由配置及全局启用路由

- 样式重置
  |> index.styl
  |> reset.styl
  |> mixin.styl


- 导航配置
  npm i vant 全局启用vant 
  import 'vant/lib/index.css'
  Tabbar,TabbarItem

- 首页头部组件
  vant Search Button

- 中间内容
  导航标签 vant Tab,Tabs
  弹性布局

- 后端数据mockjs
  - 创建index -> 创建data文件夹 -> 引入nanoid,暴露数据
  - index 
    引入mockjs, newcar数据 -> 设置延迟Mock.setup({timeout:'50-1000'}) ->
    Mock.mock(\/\newcar\, 'get', () => {return code: 0, data: newcar})
  - main.js 导入index
  - 请求数据时记得使用async异步
  
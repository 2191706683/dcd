![image](https://user-images.githubusercontent.com/101383800/236600159-5055da18-5aeb-4eb4-8280-8fa397e91d98.png)
![image](https://user-images.githubusercontent.com/101383800/236600191-a80b1f97-0399-473a-804c-8beee1c61cd6.png)
![image](https://user-images.githubusercontent.com/101383800/236600216-6efb054d-5ad6-4a3f-a94a-f237d1593bfc.png)
![image](https://user-images.githubusercontent.com/101383800/236600203-ee92c595-e093-46b3-b1aa-1dc382517845.png)
![image](https://user-images.githubusercontent.com/101383800/236600207-6cfff981-93e4-4a62-8cd6-221dda673a03.png)

![image](https://user-images.githubusercontent.com/101383800/236600174-69ad4ef6-e269-49f0-ab80-aa7c30b25f5d.png)
![image](https://user-images.githubusercontent.com/101383800/236600228-34403bb2-33c8-4015-b01c-76e98fd60611.png)
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

- 购买页面的地区选择需要npm i @vant/area-data


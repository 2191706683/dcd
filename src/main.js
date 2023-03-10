import { createApp } from 'vue'
import '@/assets/css/index.styl'
import App from './App.vue'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import '@/mock/index'
import { nanoid } from 'nanoid'

import router from '@/router/index.js'
import { createPinia } from 'pinia'
import { 
    Tabbar, 
    TabbarItem,
    Search,
    Button,
    Tab, 
    Tabs,
    Grid, 
    GridItem,
    NavBar,
    Icon,
    IndexBar, 
    IndexAnchor,
    Cell
} from 'vant';

const app = createApp(App)
app
    .use(Tabbar)
    .use(TabbarItem)
    .use(Search)
    .use(Button)
    .use(Tab)
    .use(Tabs)
    .use(Grid)
    .use(GridItem)
    .use(NavBar)
    .use(Icon)
    .use(IndexBar)
    .use(IndexAnchor)
    .use(Cell)
    .use(createPinia())
    .use(router)
    .mount('#app')

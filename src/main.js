import { createApp } from 'vue'
import '@/assets/css/index.styl'
import App from './App.vue'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import '@/mock/index'

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
    Cell,
    ActionBar,
    ActionBarButton,
    Form, 
    Field, 
    CellGroup,
    Checkbox,
    Card,
    SubmitBar,
    SwipeCell,
    Popup,
    Area,
    Divider
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
    .use(ActionBar)
    .use(ActionBarButton)
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(Checkbox)
    .use(Card)
    .use(SubmitBar)
    .use(SwipeCell)
    .use(Popup)
    .use(Area)
    .use(Divider)
    .use(createPinia())
    .use(router)
    .mount('#app')

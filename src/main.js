import { createApp } from 'vue'
import router from './router/index.js'
import { 
    Popconfirm, 
    Checkbox, 
    Input, 
    Select, 
    Avatar, 
    Table, 
    Card, 
    Menu, 
    Drawer, 
    List, 
    Button, 
    message 
} from 'ant-design-vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import axios from 'axios'
window.axios = axios;

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import '../src/static/fontawesome/css/all.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(Card);
app.use(Table);
app.use(Avatar);
app.use(Select);
app.use(Input);
app.use(Checkbox);
app.use(Popconfirm);
app.use(createPinia());
app.config.globalProperties.$message = message;
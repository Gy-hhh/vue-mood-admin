import { createApp } from 'vue';
import router from './router';
import store from './store';
// css在index.html引入，这里引入无效
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.use(store);
app.use(router);
app.mount('#app');

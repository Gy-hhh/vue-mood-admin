import { createApp } from 'vue';
import router from './router';
import store from './store';
// css在index.html引入，这里引入无效
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import localeZH from 'element-plus/lib/locale/lang/zh-cn';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus, { locale: localeZH });
app.use(store);
app.use(router);
app.mount('#app');

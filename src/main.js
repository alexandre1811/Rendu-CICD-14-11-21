import Vue from 'vue'
import App from "./App";
import router from './router'
require('./assets/css/menu-burger.css');
require('./assets/css/fonts.css');
require('./assets/css/total.css')
Vue.config.productionTip = false



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

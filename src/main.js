import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// Use packages
Vue.use(VueResource);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')














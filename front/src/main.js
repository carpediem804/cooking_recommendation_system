import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyDVtLqIS4vhPmCG72CPhgb-84mjT0WoE-0",
  authDomain: "web-project-26631.firebaseapp.com",
  databaseURL: "https://web-project-26631.firebaseio.com",
  projectId: "web-project-26631",
  storageBucket: "web-project-26631.appspot.com",
  messagingSenderId: "859832813634"
};
firebase.initializeApp(config);
Vue.use(VModal,{dynamic:true});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

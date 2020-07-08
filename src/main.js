import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';

axios.interceptors.response.use(function(response){
  return response
},(error)=>{
  let res = error.response;
   if(res.status == 400){
    ElementUI.Message.error(res.data.msg)
   }
 console.log(res)
});

Vue.use(ElementUI);
Vue.use(VueAxios,axios);
new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')

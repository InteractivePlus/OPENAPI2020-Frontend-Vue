import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Input  } from 'ant-design-vue';
import { Row,Col } from 'ant-design-vue';

import './assets/css/global.css'

Vue.use(Button);
Vue.use(Input);
//Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

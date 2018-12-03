import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';


Vue.component(Header.name, Header);
Vue.use(MintUI)

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
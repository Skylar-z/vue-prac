import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/app.css'
import './lib/mui.min.css'
import './lib/icons-extra.css'
import moment from 'moment';




// import { Header, Swipe, SwipeItem, Button, Tabbar, TabItem, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.use(Lazyload);
Vue.use(MintUI);


Vue.filter('dataFontmate', function(value, pattern = "YYYY-MM-DD hh:mm") {
    return moment(value).format(pattern)
})


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
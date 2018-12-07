import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import Shop from './components/tabbar/ShopContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'
import news from './components/news/newsList.vue'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: Home
        },
        {
            path: '/member',
            component: Member
        },
        {
            path: '/shop',
            component: Shop
        }, {
            path: '/search',
            component: Search
        }, {
            path: '/home/news',
            component: news
        }
    ],
    linkActiveClass: 'mui-active'
})
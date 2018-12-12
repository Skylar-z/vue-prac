import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import Shop from './components/tabbar/ShopContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'
import news from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photos from './components/photos/photos.vue'




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
        }, {
            path: '/home/newsInfo:index',
            component: newsInfo,
            props: true
        }, {
            path: '/home/photos',
            component: photos
        }
    ],
    linkActiveClass: 'mui-active'
})
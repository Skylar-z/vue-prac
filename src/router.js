import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import Shop from './components/tabbar/ShopContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'
import news from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photos from './components/photos/photos.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from "./components/goods/goodsInfo.vue"
import goodsDesc from "./components/goods/goodsDesc.vue"


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
        }, {
            path: '/home/photoInfo:id',
            props: true,
            component: photoInfo

        }, {
            path: "/home/goodslist",
            component: goodsList
        }, {
            path: "/home/goodsInfo:id",
            component: goodsInfo,
            props: true
        }, {
            path: "/home/goodsDesc:id",
            component: goodsDesc,
            props: true
        }
    ],
    linkActiveClass: 'mui-active'
})
<template>
    <div>
        <swiper-box :piclist="picList">

        </swiper-box>

		<div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/news">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/photos">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodslist">
                        <span  class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul> 
		</div>
    </div>
</template>

<script>

import swiper from "../swiper/swiper.vue"

export default {
    data(){
        return{
            picList:[
                {id:0,src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg'},
                {id:1,src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg'},
                {id:2,src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332x0eq4j30k00k00uy.jpg'},
                {id:3,src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332xc5iqj30e80e8wez.jpg'},
                {id:4,src:'https://ww1.sinaimg.cn/bmiddle/005wh5Faly1fy332weihkj30rs0rsq44.jpg'},
                {id:5,src:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg'}
            ],
            flag:false
        }
    },
    created(){
        // this.getSwiper();
    },
    methods: {
        
  },
  components:{
      "swiper-box":swiper,
      
  }    
}
</script>

<style lang="scss" scoped>
.BG{
    background-color: rgba(0, 0, 0, 0.5);
    position:absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    .BGWrapper{    
        width:100px;
        height: 200px;
        background-color: pink;
        margin:50px auto;
    }
}
.mui-media-body{
    font-size: 13px;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
</style>

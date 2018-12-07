<template>
<div>
    <!-- <iscroll-view  class="scroll-view"> -->
        <mt-swipe :auto="2000" >
            <mt-swipe-item>
                <img src='./../../assets/1.jpg' alt="">
            </mt-swipe-item>
        </mt-swipe>
   

		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/news">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
                             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>

    <!-- <div style="height:800px"></div>
       <input type="text">
        <input type="text">
        <button @click="submit" style="padding-bottom:50px">提交</button>

        <div class="BG" v-if="flag" @click="hidden()">
            <div  class="BGWrapper">
                <a href="https://www.baidu.com">wordddd</a>
            </div>
        </div> -->
	 <!-- </iscroll-view> -->
     </div>
</template>

<script>
const axios = require('axios');


export default {
    data(){
        return{
            // picList:[]
            flag:false
        }
    },
    created(){
        // this.getSwiper();
    },
    methods: {
  }

    //     getSwiper(){
    //         axios.get('http://127.0.0.1/testApi.php').then(res=>{
    //             this.picList = res.data;
    //             console.log(this.picList)
    //         }, function(){      
    //         })
    //     }
    
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    background-color: red;
    img{
        width:100%;
    }
}

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
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>

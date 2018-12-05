<template>
<div>
        <!-- <mt-swipe :auto="2000" >
        <mt-swipe-item v-for="item in picList" :key="item.index">
             <img :src="item" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
             <img src='./../../assets/1.jpg' alt="">
        </mt-swipe-item>
         <mt-swipe-item>
             <img src='./../../assets/1.jpg' alt="">
        </mt-swipe-item> <mt-swipe-item>
             <img src='./../../assets/1.jpg' alt="">
        </mt-swipe-item> <mt-swipe-item>
             <img src='./../../assets/1.jpg' alt="">
        </mt-swipe-item>
    </mt-swipe> -->
    <div style="height:800px"></div>
       <input type="text">
        <input type="text">
        <button @click="submit" style="padding-bottom:50px">提交</button>

        <div class="BG" v-if="flag" @click="hidden()">
            <div  class="BGWrapper">
                <a href="https://www.baidu.com">wordddd</a>
            </div>
        </div>

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
        submit(){
            this.flag = !this.flag;
            window.scrollTo(0);
        },
        hidden(){
            this.flag = !this.flag;
        }
    //     getSwiper(){
    //         axios.get('http://127.0.0.1/testApi.php').then(res=>{
    //             this.picList = res.data;
    //             console.log(this.picList)
    //         }, function(){      
    //         })
    //     }
    }
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
</style>

<template>
    <mt-swipe :auto="2000">
        <mt-swipe-item>
            <img src="../../assets/1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/3.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/4.jpg" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
const axios = require('axios');


export default {
   

    data(){
        return{
            picList:[]
        }
    },
    created(){
        this.getSwiper();
    },
    methods: {
        getSwiper(){
            axios.get('http://127.0.0.1/testApi.php').then(function(){
                console.log('aaa')
            }, function(){
                console.log('bbb')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    background-color: red;
}
</style>

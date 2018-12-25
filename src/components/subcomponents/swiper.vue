<template>
<div>
    <mt-swipe :auto="2000" >
        <mt-swipe-item v-for="item in picList" :key="item.id" :class="{'full':isfull}">
            <img :src="item.src" alt="">
        </mt-swipe-item>
    </mt-swipe> 
</div>    
</template>


<script>
export default {
    created(){
        this.consolelog();
    },
    props:['picList','isfull'],
    methods:{
        consolelog(){
            console.log(this.isfull);
        }
    }
}
</script>

<style lang="scss">
.mint-swipe{
    height:200px !important;
     text-align: center;
    img{
       
        height: 100%;
    }
}
.full{
    width: 100%;
}
</style>

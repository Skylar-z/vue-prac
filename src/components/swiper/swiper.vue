<template>
<div>
    <mt-swipe :auto="2000" >
        <mt-swipe-item v-for="item in this.picList" :key="item.id">
            <img :src="item.src" alt="">
        </mt-swipe-item>
    </mt-swipe> 
</div>    
</template>


<script>
export default {
    props:['picList']
}
</script>

<style lang="scss">
.mint-swipe{
    height:200px;
    background-color: red;
    img{
        width:100%;
        height: 100%;
    }
}
</style>

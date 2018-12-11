<template>
	<iscroll-view class="scroll-view">
    <div>
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

	 </iscroll-view>
</template>

<script>
export default {
    data(){
        return{
            flag:false
        }
    },
   methods:{
        submit(){
            this.flag = !this.flag;
        },
        hidden(){
            this.flag = !this.flag;
        }
   }
}
</script>

<style lang="scss" scoped>

</style>

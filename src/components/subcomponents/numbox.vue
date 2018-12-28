<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="del">-</button>
        <input class="mui-input-numbox" type="number" v-model="num"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:1,
            spreadNum:''
        }
    },
    methods:{
        del(){
            
            if(this.num<1){
                return
            }else{
            this.num -- 
            }
            
             return this.num
        },
        add(){
            if(this.num >9){
                return
            }else{
             this.num++;
            }     
            console.log(this.num);
            return this.num
        },
        changeNum(){
            // this.$emit("sendNumber",this.num);
        }
    },
    watch:{
        num:function(old,newValue){
            this.spreadNum = parseInt(newValue)
            this.$emit("sendNumber",this.spreadNum);
        } 
    }
}
</script>


<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="del">-</button>
        <input class="mui-input-numbox" type="number" v-model="num" @input="changeNum"/>
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
            // console.log(this.$refs.num.value);
            //分析：我要把内组件的input值传到外组件去。
            //先拿到input的值，再通过事件调用传出去
            // console.log("22");
            // console.log(this.num)
            // this.$emit("getNumber")

            //问题：$emit方法不生效。我以为是我不熟悉这个api的原因，但是按照网上的写法写下来，我觉得应该是没错了，但还是无法传值。
            //尝试一步步回退，发现点击加减号都不打印值====> num没有return出去。
            //再次使用$emit发现还是不能传递方法过来。但是手动修改input值就可以。说明点击+ -的方法没有触发@change的调用。这里有问题。
        }
    },
    watch:{
        num:function(old,newValue){
            this.spreadNum = parseInt(newValue)
            this.$emit("getNumber",spreadNum);
        }
    }
}
</script>


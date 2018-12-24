<template>
    <div class="goosInfo"> 
        <div class="goodsInfo-card" v-for="item in showpic" :key="item.id">
            <img :src="item.src" alt="" >
        </div>
        <div class="goodsInfo-card">
            <div class="goodsInfo-card__header">
                <div class="text-header">
                    小米note16G双网通版
                </div>
            </div>
            <div class="goodsInfo-card__body">
                <div class="text-content">
                    市场价：￥2000
                    销售价：￥1000
                </div>
                <div class="text-content">
                    购买数量：- 1 +
                </div>
              <div>
                    <div class="button-info">
                        立即购买
                    </div>
                    <div class="button-wram">
                        加入购物车
                    </div>
              </div>
            </div>
        </div>


        <div class="goodsInfo-card">
            <div class="goodsInfo-card__header">
                <div class="text-header">
                    商品参数
                </div>
            </div>
            <div class="goodsInfo-card__body">
                <div class="text-desc">
                    商品编号：123456789
                </div>
                <div class="text-desc">
                    库存情况：600件
                </div>
                <div class="text-desc">
                    上架时间：2010-12-24
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props:['id'],
    created(){
        this.getShowpic(this.picid)
    },
    data(){
        return{
            goodslist:[
            {id:0,src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg',price:100,oldprice:100},
            {id:1,src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg',price:100,oldprice:100},
            {id:2,src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332x0eq4j30k00k00uy.jpg',price:100,oldprice:100},
            {id:3,src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332xc5iqj30e80e8wez.jpg',price:100,oldprice:100},
            {id:4,src:'https://ww1.sinaimg.cn/bmiddle/005wh5Faly1fy332weihkj30rs0rsq44.jpg',price:100,oldprice:100},
            {id:5,src:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',price:100,oldprice:100}],
            showpic:[],
            picid:this.id
        }
       
    },
    methods:{
        getShowpic(picid){
            var showpic = this.goodslist.filter(item=>{
                return item.id == picid;
            })
            console.log(showpic);
           
            return this.showpic = showpic;
            
        }
    }
}
</script>

<style lang="scss">
.text{
  &-head{
    font-size: 17px;
    line-height: 20px;
    height: 20px;
    }
    &-content{
        font-size: 14px;
    }
    &-desc{
        font-size: 12px;
        color: #999;
    }
}
%button{
    display: inline-flex;
    color: #fff;
    border: 5px;
    margin-right: 10px;
    padding: 5px 15px;
}
.button{
    &-info{
        @extend %button;
        background-color: royalblue;
    }
    &-wram{
        @extend %button;
        background-color: #f88601;
    }
}
.goosInfo{
    width: 100%;
    height: 100%; 
}
.goodsInfo-card{
    display: flex;
    flex-direction: column;
    border:1px solid #999;
    margin: 10px;
    background-color: #fff;
    img{
        width: 100%;
        height: 200px;
    }
    .goodsInfo-card__header{
        padding: 5px;
        box-sizing: border-box;
        border-bottom: 1px solid #999;
    }
    .goodsInfo-card__body{
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>

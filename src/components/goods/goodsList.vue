<template>
    <div class="goodslist">
       <div class="goodslist-item" v-for="item in goodslist" :key="item.id" @click="goodsInfo(item.id)">
           <img class="xdy-pic__big" :src="item.src"/>
           <div class="goodslist-item__footer">
               <span>原价：{{item.price}}</span>
               <span>现价：{{item.oldprice}}</span>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            goodslist:[
            {id:0,src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg',price:100,oldprice:100},
            {id:1,src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg',price:100,oldprice:100},
            {id:2,src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332x0eq4j30k00k00uy.jpg',price:100,oldprice:100},
            {id:3,src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332xc5iqj30e80e8wez.jpg',price:100,oldprice:100},
            {id:4,src:'https://ww1.sinaimg.cn/bmiddle/005wh5Faly1fy332weihkj30rs0rsq44.jpg',price:100,oldprice:100},
            {id:5,src:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',price:100,oldprice:100}]
        }
    },

    //编程式导航
    methods: {
        goodsInfo(id){
            this.$router.push({path:'goodsInfo'+id});
            console.log(this);
        }
    }
}
</script>

<style lang="scss">
    .goodslist{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        .goodslist-item{
            width: 49%;
            height: 150px;
            background-origin: 1px solid #f3f3f3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
                width: 100%;
               height: 100px;
            }
            .goodslist-item__footer{
                color: #999;
                font-size: 12px;
                background-color: #f3f3f3;
            }
        }
    }
</style>

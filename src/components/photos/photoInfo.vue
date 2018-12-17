<template>
    <div>
        <h3>标题</h3>
        <p class="subtitle">
            <span>发表时间</span>
            <span>点击：0次</span>
        </p>

        <hr>

        <div class="content"></div>
       <div class="img-wrapper" v-for="item in showPic " :key="item.id">
            <img :src="item.src" alt="">
       </div>

        <cmt-box></cmt-box>

    </div>    
</template>
<script>
import comment from '../comment/comment.vue'
export default {
    props:['id'],
    created(){
        this.loadPic(this.picid)
    },
    data(){
        return {
            piclist:[
                {id:0,type:'1',src:'https://pic4.zhimg.com/80/v2-f2c8d5db353c9443bd644038645051ef_hd.jpg'},
                {id:1,type:'1',src:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg'},
                {id:2,type:'1',src:'https://pic3.zhimg.com/80/v2-5bc216087b7c4cd195ffaf9d9ba57742_hd.jpg'},
                {id:3,type:'1',src:'https://ww1.sinaimg.cn/bmiddle/005wh5Faly1fy332weihkj30rs0rsq44.jpg'},
                {id:4,type:'1',src:'https://ww3.sinaimg.cn/bmiddle/005wh5Faly1fy332wumsuj30ht0ht75p.jpg'},
                {id:5,type:'1',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332wq0jhj30go0go75f.jpg'},
                {id:6,type:'1',src:'https://ww3.sinaimg.cn/bmiddle/005wh5Faly1fy332w8yglj30u00u0t9u.jpg'},
                {id:7,type:'1',src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332x0eq4j30k00k00uy.jpg'},
                {id:8,type:'1',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332xikquj30qo0qo41e.jpg'},
                {id:9,type:'1',src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332xc5iqj30e80e8wez.jpg'},
                {id:10,type:'1',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg'},
                {id:11,type:'2',src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332x0eq4j30k00k00uy.jpg'},
                {id:12,type:'2',src:'https://pic3.zhimg.com/80/v2-5bc216087b7c4cd195ffaf9d9ba57742_hd.jpg'},
                {id:13,type:'2',src:'https://ww1.sinaimg.cn/bmiddle/005wh5Faly1fy332weihkj30rs0rsq44.jpg'},
                {id:14,type:'2',src:'https://ww3.sinaimg.cn/bmiddle/005wh5Faly1fy332wumsuj30ht0ht75p.jpg'},
                {id:15,type:'2',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332wq0jhj30go0go75f.jpg'},
                {id:16,type:'2',src:'https://ww3.sinaimg.cn/bmiddle/005wh5Faly1fy332w8yglj30u00u0t9u.jpg'},
                {id:17,type:'2',src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332x0eq4j30k00k00uy.jpg'},
                {id:18,type:'2',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332xikquj30qo0qo41e.jpg'},
                {id:19,type:'2',src:'https://ww4.sinaimg.cn/bmiddle/005wh5Faly1fy332xc5iqj30e80e8wez.jpg'},
                {id:20,type:'2',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg'},
            ],
            showPic:[
                {id:0,type:'1',src:'https://pic4.zhimg.com/80/v2-f2c8d5db353c9443bd644038645051ef_hd.jpg'},
            ],
            picid:this.id
        }
    },
    components:{
        'cmt-box':comment     
    },
    methods:{
        loadPic(picid){
            var showPic = this.piclist.filter(function(eachPic){
                console.log(picid);
                return eachPic.id == picid
            })
            return this.showPic = showPic
        }
    }
}

</script>
<style lang="scss">
.img-wrapper{
    img{
        width: 100%
    }
}
</style>

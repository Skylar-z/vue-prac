<template>
<div>
    <h3>新闻标题</h3>

    <p>
        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
    </p>
   
    <p>{{index}}</p>

    <comment-box></comment-box>

</div>    
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    props:['index'],
    components:{
        'comment-box':comment
    }
}
</script>
<style lang="scss" scoped>
img{
 width: 10rem;
 height: 10rem;;

}
</style>

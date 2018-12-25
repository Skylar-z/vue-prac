<template>
    <div class="cmt-container">
       <h3>发表评论</h3>
        <textarea name="" id="" cols="30" rows="10" placeholder="要 bb的内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list"  v-for="item in conmentInPage(this.pageindexz)" :key="item.id">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{item.id+1}}楼&nbsp;用户：{{item.username}}&nbsp;发表时间：{{item.date | dataFontmate}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger"  size="large" plain @click="addMore">加载更多</mt-button>
    </div>   
</template>
<script>
export default {
    data(){
        return{
            comment:[
            {id:0,username:'张1',date:new Date(),content:'aaa',pageindex:'0'},
            {id:1,username:'张2',date:new Date(),content:'aaa',pageindex:'0'},
            {id:2,username:'张3',date:new Date(),content:'aaa',pageindex:'0'},
            {id:3,username:'张4',date:new Date(),content:'aaa',pageindex:'1'},
            {id:4,username:'张5',date:new Date(),content:'aaa',pageindex:'1'}
            ],
            pageindexz:0
        }
    },
   methods:{
        addMore(){
        this.pageindexz=parseInt(this.pageindexz)+1;
    },
    conmentInPage(pageindexz){
       var comment =  this.comment.filter(function(commentItem){
            return commentItem.pageindex==pageindexz;
        })
        return comment;
    }
   }
}
</script>
<style lang="scss">
.cmt-container{
    padding:10px;
    .cmt-list{
        .cmt-item{
            .cmt-title{
                background-color: #f3f3f3;
                font-size: 14px;
                height: 40px;
                line-height: 40px;
            }
            .cmt-body{
            background-color: #fff;
            padding: 10px;
            }
        }
    }
}
</style>

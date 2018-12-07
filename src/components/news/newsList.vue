<template>
    <div>
        <ul class="mui-table-view" v-for="item in newslist" :key="item.id">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
                    <div class="mui-media-body">
                        {{item.title}}
                        <div class='mui-ellipsis'>
                            <div>发表时间：{{item.time}}</div>
                            <div>点击：{{item.count}}次</div>
                        </div>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newslist:[{'title':'信息1','time':new Date(),'count':'5'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'},{'title':'信息2','time':new Date(),'count':'15'} ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-ellipsis{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
    color: royalblue;
    font-size: 12px;
    }
}
</style>
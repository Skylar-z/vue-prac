<template>
    <div>
        <ul class="mui-table-view" v-for="item in newslist" :key="item.id">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsInfo'+item.index">
                    <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
                    <div class="mui-media-body">
                        {{item.title}}
                        <div class='mui-ellipsis'>
                            <div>发表时间：{{item.time | dataFontmate}}</div>
                            <div>点击：{{item.count}}次</div>
                        </div>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newslist:[{'title':'信息1','time':new Date(),'count':'5',index:0},{'title':'信息2','time':new Date(),'count':'15',index:1},{'title':'信息2','time':new Date(),'count':'15',index:2},{'title':'信息2','time':new Date(),'count':'15',index:3},{'title':'信息2','time':new Date(),'count':'15',index:4},{'title':'信息2','time':new Date(),'count':'15',index:5},{'title':'信息2','time':new Date(),'count':'15',index:6},{'title':'信息2','time':new Date(),'count':'15',index:7},{'title':'信息2','time':new Date(),'count':'15',index:8},{'title':'信息2','time':new Date(),'count':'15',index:9},{'title':'信息2','time':new Date(),'count':'15',index:10} ]
        }
    }
}
</script>

<style lang="scss">
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
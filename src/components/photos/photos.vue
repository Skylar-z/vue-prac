<template>
<div>
   		<div class="mui-content">
			<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll" >
						<a v-for="item in tabitem" :key="item.id" class="mui-control-item mui-active" 
                            href="#item1mobile" 
                            data-wid="tab-top-subpage-1.html"
                            @click="selectPic(item.type)">
							{{item.name}}
						</a>                       
					</div>
				</div>

			</div>
		</div>

        <ul class="photo-list">
            <li v-for="item in showpic" :key="item.id">
                <img v-lazy="item.src">
            </li>
        </ul>


</div>    
</template>
<script>
// import mui from '../../lib/mui.min';
// mui(".mui-scroll-wrapper").scroll({
//     deceleration:0.0005
// })

export default {
    data(){
        return{
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
           tabitem:[{type:0,name:'类型1'},{type:1,name:'类型2'},{type:2,name:'类型3'},{type:3,name:'类型4'}],
           showpic:[
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
            {id:10,type:'1',src:'https://ww2.sinaimg.cn/bmiddle/005wh5Faly1fy332x5sraj30hs0hswfh.jpg'}
           ]
        }
    },
    methods:{
        selectPic(type){
            var showpic =  this.piclist.filter(function(pic){
                return pic.type == (type+1)
            })
            console.log(showpic)
            return this.showpic = showpic;
        }
    }
}
</script>

<style lang="scss" >
*{
    touch-action: pan-y;
}

ul,li{
    text-decoration: none;
    margin-right: 0;
    padding: 0;;
}
.photo-list{
    margin-top: 0;
    li{
        background-color: #f3f3f3;
        img {
            width: 100%;
            padding: 10px;
        }
        img[lazy="loading"]{
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }
}
</style>

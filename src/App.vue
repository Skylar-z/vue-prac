<template>
  <div id="app" class="app-container">
   <mt-header fixed title="今日头部条"></mt-header>


		<transition >
			<router-view></router-view>
		</transition>

<input type="text">

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
 
export default {
	methods :{
	
	}
}

</script>



<style lang="scss" scoped>
.app-container{
  padding-top:40px;
  padding-bottom:50px;
//   overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%)
}

.v-enter-active,
.v-leave-active{
	position: absolute;
	transition: all 0.4s linear;
}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon{
	font-size: 1.9rem;
}
.mui-bar{
	z-index:900;
}
.mint-header.is-fixed{
	z-index: 999;
}
</style>

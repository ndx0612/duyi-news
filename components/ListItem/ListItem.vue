<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard :item="item" v-for="(item,index) in itemList" :key="index"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
<<<<<<< HEAD
		data() {
			return {
				itemList:[
					{mode:"base"},
					{mode:"column"},
					{mode:"image"},
					{mode:"base"},
					{mode:"base"},
					{mode:"base"},
				]
			}
=======
		name:"ListItem",
		data() {
			return {
				itemList:[
					{mode:'base'},
					{mode:'column'},
					{mode:'image'},
					{mode:'base'},
					{mode:'base'},
				]
			};
>>>>>>> 13文章列表制作-容器组件
		}
	}
</script>

<style lang="scss">
	.list-scroll-container {
		height: 100%;
		.list-scroll {
<<<<<<< HEAD
			flex: 1;
=======
>>>>>>> 13文章列表制作-容器组件
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>

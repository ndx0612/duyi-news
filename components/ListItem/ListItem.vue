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
		}
	}
</script>

<style lang="scss">
	.list-scroll-container {
		height: 100%;
		.list-scroll {
			flex: 1;
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>

<template>
	<view class="home-container">
		<NavBar></NavBar>
		<!-- 添加侧边栏 -->
		<TabBar :labelList="labelList"></TabBar>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._intiLabelList()
		},
		data() {
			return {
				labelList: []
			}
		},
		methods: {
			async _intiLabelList() {
				const labelList = await this.$http.get_label_list()
				this.labelList = labelList
			}
		},
	}
</script>

<style scoped lang="scss">
	.home {
		overflow: hidden;
	}
</style>

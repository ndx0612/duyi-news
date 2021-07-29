<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard v-for="item in 50" :key="item"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
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

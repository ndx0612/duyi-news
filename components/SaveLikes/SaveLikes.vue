<template>
	<view class="save-incons" @click.stop="_changeSaveStatus">
		<uni-icons  color="#ff6600" type="heart" size="20"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"SaveLikes",
		data() {
			return {
				
			};
		},
		methods: {
			async _changeSaveStatus() {
				// TODOS 判断用户是否登录
				// 登录 改变当前的收藏状态
				// 没有登录 => 界面的跳转 => 用户登录的界面
				uni.navigateTo({
					url:'/pages/userInfo/login/login'
				})
			}
		},
		
	}
</script>

<style>

</style>

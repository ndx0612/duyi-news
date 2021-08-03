<<<<<<< HEAD
<template>
	<view>
		<!-- 基础卡片 -->
		<view class="list-card" v-if="item.mode==='base'">
			<view class="list-card-img">
				<image src="https://pc.hyfarsight.com/Fsf4RfIJyetNpvsXUmlGbQkhYoWA" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>《故宫博物院》集训营直播课开讲啦（4月17号）</text>
					<SaveLikes></SaveLikes>
				</view>
				<view class="list-card-content-desc">
					<view class="article-type">
						精彩直播
					</view>
					<view class="browse-number">
						293浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="list-card mode-image" v-if="item.mode==='image'">
			<view class="list-card-top">
				<text>SSR基本介绍以及API的使用</text>
				<SaveLikes></SaveLikes>
			</view>
			<view class="list-card-middle">
				<view class="image-container" v-for="item in 3" :key="item">
					<image  src="http://upload-images.jianshu.io/upload_images/1919394-dca940ffa0bd52c7.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
						mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-card-content-desc">
				<view class="article-type">
					精彩直播
				</view>
				<view class="browse-number">
					293浏览
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="list-card mode-column" v-if="item.mode==='column'">
			<view class="list-card-top">
				<view class="image-container">
					<image  src="http://upload-images.jianshu.io/upload_images/1919394-dca940ffa0bd52c7.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
						mode="aspectFill"></image>
=======
<template>
	<view>
		<!-- 基础卡片 -->
		<view class="list-card" v-if="item.mode==='base'">
			<view class="list-card-img">
				<image src="https://pc.hyfarsight.com/Fsf4RfIJyetNpvsXUmlGbQkhYoWA" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）</text>
					<SaveLikes></SaveLikes>
				</view>
				<view class="list-card-content-desc">
					<view class="article-type">
						精彩直播
					</view>
					<view class="browse-number">
						293浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="list-card mode-column" v-if="item.mode==='column'">
			<view class="list-card-top">
				<text>SSR基本介绍以及API的使用</text>
				<SaveLikes></SaveLikes>
			</view>
			<view class="list-card-middle">
				<view class="image-container" v-for="(item,index) in 3" :key="index">
					<image
						src="http://upload-images.jianshu.io/upload_images/1919394-dca940ffa0bd52c7.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
						mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-card-content-desc list-card-bottom">
				<view class="article-type">
					精彩直播
				</view>
				<view class="browse-number">
					293浏览
				</view>
			</view>

		</view>
		<!-- 大图模式 -->
		<view class="list-card mode-image" v-if="item.mode==='image'">
			<view class="list-card-top">
				<view class="image-container">
					<image src="https://img1.sycdn.imooc.com/5ccfac620001f8d405000344.jpg" mode="aspectFill"></image>
>>>>>>> 13文章列表制作-容器组件
				</view>
			</view>
			<view class="list-card-middle">
				<text>SSR基本介绍以及API的使用</text>
				<SaveLikes></SaveLikes>
			</view>
<<<<<<< HEAD
			<view class="list-card-content-desc">
=======
			<view class="list-card-content-desc list-card-bottom">
>>>>>>> 13文章列表制作-容器组件
				<view class="article-type">
					精彩直播
				</view>
				<view class="browse-number">
					293浏览
				</view>
			</view>
<<<<<<< HEAD
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		name: "ListCard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	@import './css/ListCard.scss'
=======
		</view>
	</view>
</template>

<script>
	export default {
		name: "ListCard",
		props: {
			item: Object
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	@import './css/ListCard.scss'
>>>>>>> 13文章列表制作-容器组件
</style>

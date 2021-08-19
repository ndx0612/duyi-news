<template>
	<view>
		<ListCard :item="item" v-for="item in articleList" :key="item._id"></ListCard>
	</view>
</template>

<script>
	export default {
    onLoad() {
      this._getMyArticle()
    },
		data() {
			return {
				articleList:[]
			}
		},
		methods: {
			async  _getMyArticle() {
        const list = await this.$http.get_my_article({userId:this.userInfo._id});
        this.articleList = list
      }
		}
	}
</script>

<style>

</style>

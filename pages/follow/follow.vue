<template>
  <view class="follow-container">
    <view class="follow-tab">
      <view class="follow-tab-box">
        <view class="follow-tab-item" :class="{active:currentIndex===0}">文章</view>
        <view class="follow-tab-item" :class="{active:currentIndex===1}">作者</view>
      </view>
    </view>
    <!-- 内容切换区域 -->
    <view class="follow-list-container">
      <swiper class="follow-list-swiper" :current="currentIndex">
        <swiper-item>
          <ListItem :isShowLoading="isShowLoading" :articleList="articleList" v-if="articleList.length"></ListItem>
          <view v-if="dataNone"  class="no-data">暂无收藏的文章</view>
        </swiper-item>
        <swiper-item>
          2
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  onLoad () {
    // #ifdef MP-WEIXIN
    if (!this.$store.state.userInfo) {
      uni.redirectTo({
        url: '/pages/userInfo/login/login'
      })
      return
    }
    // #endif
    this._getFollowArticle()
  },
  data () {
    return {
      currentIndex: 0,
      articleList: [],
      isShowLoading: false,
      dataNone:false
    }
  },
  methods: {
    async _getFollowArticle () {
      const list = await this.$http.get_follow_article({ userId: this.userInfo._id })
      this.articleList = list
      !list.length && (this.dataNone = true)
    }
  }
}
</script>

<style lang="scss">
@import "./css/follow.scss";
</style>

<template>
  <view class="article-detail-container">
    <view class="detail-title">
      {{articleData.title}}
    </view>
    <view class="detail-header">
      <view class="detail-logo">
        <image :src="articleData.author.avatar" mode="aspectFill"></image>
      </view>
      <view class="detail-header-content">
        <view class="detail-header-content-title">
          {{articleData.author.author_name}}
        </view>
        <view class="detail-header-content-info">
          <text>{{articleData.create_time}}</text>
          <text>{{articleData.browse_count}} 浏览</text>
          <text>{{articleData.thunbs_up_count}} 赞</text>
        </view>
      </view>
      <button type="default" class="detail-header-button">取消关注</button>
    </view>
    <view class="detail-content-container">
      <!-- <view class="detail-html">
        <u-parse className="markdown-body" :content="content" no-data="数据加载中..."></u-parse>
      </view> -->

      <!-- 评论展示组件 -->
      <view class="detail-comment">
        <view class="comment-title">最新评论</view>
        <view class="comment-content-container" v-for="item in commentList" :key="item.comment_id">
          <CommentBox :commentData="item"></CommentBox>
        </view>
        <view class="no-data" v-if="!commentList.length">暂无评论</view>
      </view>

    </view>

    <!-- 评论编写组件 -->
    <view class="detail-bottom">
      <view class="input-container" @click="openMaskerComment">
        <text>谈谈你的看法</text>
        <uni-icons type="compose" size="16" color="#f07373"></uni-icons>
      </view>
      <view class="detail-bottom-icons">
        <view class="detail-bottom-icon-box">
          <uni-icons type="chat" size="22" color="#f07373"></uni-icons>
        </view>
        <view class="detail-bottom-icon-box">
          <uni-icons type="heart" size="22" color="#f07373"></uni-icons>
        </view>
        <view class="detail-bottom-icon-box">
          <uni-icons type="hand-thumbsup" size="22" color="#f07373"></uni-icons>
        </view>
      </view>
    </view>
    <!-- 评论组件 -->
    <CommentMasker :showPopup="showPopup" @closePopupMasker="showPopup=$event" @sendCommentData="_sendCommentData"></CommentMasker>
  </view>
</template>

<script>
import uParse from '../../components/gaoyia-parse/parse';
import marked from 'marked'

export default {
  name: "articleDetail.vue",
  components: {
    uParse
  },
  onLoad (...options) {
    this.articleData = JSON.parse(options[0].params);
    this._getArticleDetail();
    /* 获取评论列表 */
    this._getCommentList();
  },
  data () {
    return {
      articleData: null,
      showPopup: false,
      commentList:[]
    }
  },
  methods: {
    async _getArticleDetail () {
      const data = await this.$http.get_article_detail({ article_id: this.articleData._id });
      this.articleData = data
    },
    // 打开弹窗
    async openMaskerComment () {
      await this.checkedIsLogin()
      this.showPopup = true
    },
    // 发送评论内容到后端
    async _sendCommentData (content) {
      const { msg } = await this.$http.update_comment({ userId: this.userInfo._id, articleId: this.articleData._id, content })
      uni.showToast({
        title: msg
      })
      this.showPopup = false;
    },
    /* 获取评论内容 */
    async _getCommentList () {
      const res = await this.$http.get_comments({ articleId: this.articleData._id })
      this.commentList = res
    }
  },
  computed: {
    content () {
      try {
        return marked(this.articleData.content)
      } catch (e) {
        return null
      }
    }
  }
}
</script>

<style lang="scss">
@import "./css/articleDetail.scss";
</style>

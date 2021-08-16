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
          <text>{{articleData.thumbs_up_count}} 赞</text>
        </view>
      </view>
      <button type="default" class="detail-header-button" @click="_followAuthor">
        {{isFollowAuthor ? '取消关注' : '关注'}}
      </button>
    </view>
    <view class="detail-content-container">
      <view class="detail-html">
        <u-parse className="markdown-body" :content="content" no-data="数据加载中..."></u-parse>
      </view>

      <!-- 评论展示组件 -->
      <view class="detail-comment">
        <view class="comment-title">最新评论</view>
        <view class="comment-content-container" v-for="item in commentList" :key="item.comment_id">
          <CommentBox @commnetReply="commnetReply" :commentData="item"></CommentBox>
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
        <!-- 引入公共组件 -->
        <SaveLikes size="22" class="detail-bottom-icon-box" :item="articleData">
        </SaveLikes>
        <view class="detail-bottom-icon-box">
          <uni-icons type="hand-thumbsup" size="22" color="#f07373"></uni-icons>
        </view>
      </view>
    </view>
    <!-- 评论组件 -->
    <CommentMasker :showPopup="showPopup" @closePopupMasker="showPopup=$event" @sendCommentData="_sendCommentData">
    </CommentMasker>
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
      commentList: [],
      replyData: {}
    }
  },
  methods: {
    async _getArticleDetail () {
      const data = await this.$http.get_article_detail({
        article_id: this.articleData._id
      });
      this.articleData = data
    },
    // 打开弹窗
    async openMaskerComment () {
      await this.checkedIsLogin()
      this.showPopup = true
    },
    // 发送评论内容到后端
    async _sendCommentData (content) {
      const {
        msg
      } = await this.$http.update_comment({
        userId: this.userInfo._id,
        articleId: this.articleData._id,
        content,
        ...this.replyData   // 扩展当前是否为回复指定评论内容
      })
      uni.showToast({
        title: msg
      })
      this.showPopup = false;
      this._getCommentList();
      this.replyData = {};
    },
    /* 获取评论内容 */
    async _getCommentList () {
      const res = await this.$http.get_comments({
        articleId: this.articleData._id
      })
      this.commentList = res
    },
    /* 处理回复事件函数 */
    commnetReply (data) {
      this.replyData = {
        "comment_id": data.comment.comment_id,
        is_reply: data.isReply
      }
      // 当前为回复内容的时候添加回复的ID
      data.comment.reply_id && (this.replyData.reply_id = data.comment.reply_id)
      this.openMaskerComment()
    },
    /* 关注作者 */
    async _followAuthor () {
      // 用户检测
      await this.checkedIsLogin()
      const { msg } = await this.$http.update_follow_author({ authorId: this.articleData.author.id, userId: this.userInfo._id })
      uni.showToast({
        title: msg,
      })
      //处理用户存储信息
      let followIds = [...this.userInfo.author_likes_ids]
      if (followIds.includes(this.articleData.author.id)) {
        followIds = followIds.filter(item => item != this.articleData.author.id)
      }else {
        followIds.push(this.articleData.author.id)
      }
      this.updateUserInfo({...this.userInfo,author_likes_ids:followIds})
    }
  },
  computed: {
    content () {
      try {
        return marked(this.articleData.content)
      } catch (e) {
        return null
      }
    },
    //是否关注作者
    isFollowAuthor() {
      return this.userInfo && this.userInfo.author_likes_ids.includes(this.articleData.author.id)
    }
  }
}
</script>

<style lang="scss">
@import "./css/articleDetail.scss";
</style>

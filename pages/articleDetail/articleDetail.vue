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
      <view class="detail-html">
        <u-parse className="markdown-body" :content="content"></u-parse>
      </view>
    </view>

    <!-- 评论组件 -->
    <view class="detail-bottom">
      <view class="input-container">
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
  },
  data () {
    return {
      articleData: null
    }
  },
  methods: {
    async _getArticleDetail () {
      const data = await this.$http.get_article_detail({ article_id: this.articleData._id });
      this.articleData = data
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

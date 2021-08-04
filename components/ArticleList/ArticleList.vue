<template>
  <swiper class="swiper-container" :current="activeIndex" @change="changeCurrentIndex">
    <swiper-item v-for="(item,index) in labelList" :key="index">
      <view class="swiper-item uni-bg-red">
        <ListItem :articleList="articleList"></ListItem>
      </view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  props: {
    labelList: Array,
    activeIndex: Number
  },
  created () {
    // this._getArticleList()
  },
  data () {
    return {
      articleList: []
    }
  },
  watch: {
    labelList(newVal,OldVal) {
    this._getArticleList(this.activeIndex)
    },
  },
  methods: {
    changeCurrentIndex (e) {
      const {current} = e.detail
      this.$emit('changeCurrentIndex', current)
      this._getArticleList(current)
    },
    async _getArticleList (currentIndex) {
      const articleList = await this.$http.get_article_list({classify:this.labelList[currentIndex].name})
      this.articleList = articleList
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 100%;
  .swiper-item {
    height: 100%;
    overflow: hidden;
  }
}
</style>

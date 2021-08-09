<template>
  <view class="search-container">
    <!-- 搜索导航组件 -->
    <NavBar :isSearch="isSearch"></NavBar>
    <!-- 搜索包裹 -->
    <view class="search-wrapper">
      <!-- 没有进行搜索的操作 -->
      <view v-if="false" class="search-history-container">
        <!-- 头部 -->
        <view class="search-header">
          <text class="history-text">搜索历史</text>
          <text class="history-clean">清空</text>
        </view>
        <!-- 内容部分 -->
        <view class="search-history-content">
          <view class="history-content-item" v-for="item in 10" :key="item">直播</view>
        </view>

        <view class="no-data">当前没有搜索历史</view>
      </view>

      <!-- 开始进行搜索的操作 -->
      <view v-else class="search-list-container">
        <ListItem v-if="searchList.length"></ListItem>
         <view v-else class="no-data">没有搜索到相关数据</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      isSearch: true,
      searchList:[]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import './css/search.scss'
</style>

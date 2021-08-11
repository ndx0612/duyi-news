<template>
  <view class="label-container">
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">我的标签</view>
        <view class="label-edit" @click="startEdit">{{this.isEdit? '完成' :'编辑'}}</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" v-for="(item,index) in 8" :key="index">
          前端开发
          <uni-icons v-if="isEdit" class="icon-close" type="clear" size="20" color="red"></uni-icons>
        </view>
        <view class="no-data">当前没有数据</view>
      </view>
    </view>
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">标签推荐</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" v-for="(item,index) in 8" :key="index">
          后端开发
        </view>
        <view class="no-data">当前没有数据</view>
      </view>
    </view>
  </view>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    // 编辑按钮事件
    startEdit () {
      this.isEdit = this._updateLabel();
      this.isEdit = !this.isEdit;
    },
    // 修改标签
    _updateLabel() {
      console.log('todo')
    }
  },
  computed: {
    ...mapState(['labelList'])
  }
}
</script>

<style lang="scss">
@import "./css/labelAdmin.scss";
</style>

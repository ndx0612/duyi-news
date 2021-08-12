export default ({name,data={}})=> {
	/* 导出promise对象 */
	return new Promise((resolve,reject) => {
		uni.showLoading({
      title:"加载中"
		})
		uniCloud.callFunction({
			name,
      data,
			success({result}) {
				if(result.code === 0) {
					resolve(result.data)
				}else {
					uni.showToast({icon:"none",title:result.msg})
				}
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}

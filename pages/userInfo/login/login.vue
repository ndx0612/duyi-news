<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" @click="changFormType('account')" :class="{'active':type==='account'}">
				账号登录
			</view>
			<view class="nav-item" @click="changFormType('mobile')" :class="{'active':type !=='account'}">
				手机登录
			</view>
		</view>
		<!-- 表单部分 -->
		<uni-forms class="form" ref="form" :modelValue="formData">
			<view class="" v-if="type ==='account'">
				<uni-forms-item label="账号" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号"
						v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input"
						type="password" placeholder="请输入密码" v-model="formData.password"></uni-easyinput>
				</uni-forms-item>
			</view>
			<view v-else>
				<uni-forms-item label="手机号" name="phone">
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="number"
						placeholder="请输入手机号" v-model="formData.phone"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入密码"
						v-model="formData.vCode" />
					<SendCode @setCurrentCode="returnCode=$event" class="code-component" @getForm="getForm"></SendCode>
				</uni-forms-item>
			</view>
			<button class="login-btn" @click="_userLoginSubmit">立即登录</button>
		</uni-forms>
		<view class="footer-select-container">
			<text @click="goLogon">注册</text>
			<text @click="goforgetPwd">忘记密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		onReady() {
			this.$refs.form.setRules(this.userRules)
		},
		data() {
			return {
				type: 'account',
				formData: {
					loginName: 'admin123',
					password: 'admin123',
					phone: "",
					vCode: '',
				},
				returnCode: ''
			}
		},
		methods: {
			goLogon() {
				uni.navigateTo({
					url: "./logon"
				})
			},
			goforgetPwd() {
				uni.navigateTo({
					url: "./forget-password"
				})
			},
			async _userLoginSubmit() {
				const res = await this.$refs.form.submit()
				/* 正式向后端发送请求 */
				// console.log(res)
				this._sendUserInfo({
					...res,
					type: this.type
				})
			},
			/* 切换当前表单类型 */
			changFormType(type) {
				this.type = type;
				this.$refs.form.clearValidate([]) // 清空校验规则
			},
			/* 开始发送数据到后端 */
			async _sendUserInfo(data) {
				const res = await this.$http.user_login(data)
				if (res) {
					this.updateUserInfo(res)
					uni.showToast({
						title: '登录成功',
						icon: 'none',
					})

					setTimeout(() => {
						try {
							uni.navigateBack()
						} catch (e) {
							uni.switchTab({
								url: '/pages/index/index'
							})
						}
						// #ifdef H5
						// uni.switchTab({
						//   url: '/pages/index/index'
						// })
						// #endif
						// #ifndef H5
						// uni.navigateBack()
						// #endif
					}, 1500)
				}
			},
			// 发送表单到sendCode组件
			getForm(cb) {
				cb && cb(this.$refs.form)
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.code-component {
		flex-shrink: 0;
	}
</style>

<style lang="scss" scoped>
	.login-container {
		background-color: #F8F8F8;
		width: 100%;

		.banner-bg {
			width: 100%;
			height: 400rpx;
		}

		.login-nav {
			@include flex();
			padding: 0 146rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: $c-9;

			.nav-item {
				position: relative;
				margin-bottom: 40rpx;

				&.active {
					color: $base-color;

					&:after {
						content: "";
						position: absolute;
						bottom: -20rpx;
						width: 60rpx;
						left: 50%;
						transform: translateX(-50%);
						height: 8rpx;
						border-radius: 4rpx;
						background-color: $base-color;
					}
				}
			}
		}

		.footer-select-container {
			width: 640rpx;
			margin: 20rpx auto;
			@include flex();
			color: $c-9;
			font-size: 26rpx;
			text-decoration: underline;
		}
	}

	/deep/ .uni-forms-item__content {
		@include flex(flex-start, center);
		padding-left: 40rpx;
	}

	/deep/ .uni-forms-item {
		padding-left: 30rpx !important;
		border-bottom: 1px solid #eee;
		height: 120rpx;
		background-color: #fff;
	}

	/deep/ .uni-forms-item__box {
		@include flex(flex-start);
		height: 100%;
	}

	/deep/ .uni-forms-item__inner {
		padding-bottom: 0rpx !important;
		width: 100% !important;
	}

	/deep/ .label-text span {
		font-size: 32rpx;
	}

	.placeholder {
		color: #999;
	}

	.login-btn {
		width: 640rpx;
		height: 90rpx;
		border-radius: 10rpx;
		background-color: $base-color;
		color: #FFFFFF;
		font-size: 32rpx;
		@include flex(center);
		margin-top: 80rpx;
	}


	/* 使用uni-easyinput 进行bug修复 */

	/deep/ .uni-easyinput__content-input {
		padding-left: 0 !important;
	}
</style>

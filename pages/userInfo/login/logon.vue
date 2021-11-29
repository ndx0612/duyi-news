<template>
	<view>
		<view>
			<u-form :model="form" ref="uForm">
				<u-form-item label="账号" :label-width="labelWidth" :label-align="labelAlign">
					<u-input v-model="form.name" placeholder="请输入账号"></u-input>
				</u-form-item>
				<u-form-item label="密码" :label-width="labelWidth" :label-align="labelAlign">
					<u-input v-model="form.password" placeholder="请输入密码" :type="pwd"></u-input>
				</u-form-item>
			</u-form>
			<u-button class="btn" type="error" @click="logon">注册</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				codeText: '', // 验证码倒计时
				pwd: 'password', // 输入框类型
				labelWidth: '150rpx', // label宽度,可选auto
				labelAlign: 'center', // label对齐方式
				form: {
					name: '',
					password: ''
				},
			}
		},
		methods: {
			logon() {
				uniCloud.callFunction({
					name: "user_logon", // 函数名称
					data: {
						from: this.form
					},
					success: (res) => {
						console.log(res.result);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.btn {
		margin: 50rpx auto;
		width: 300rpx;
	}
</style>

<template>
	<div class="container_wrap">
		<xsydContainer title="登录" subTitle="一个账号，畅享BlueAirLive所有服务">
			<div>
				<div>
					<xsydInput inputId="EmailInput" label="邮箱" placeholderStr="请输入您的邮箱" ref="EmailInput"></xsydInput>
					<xsydInput inputId="PwdInput" label="密码" placeholderStr="请输入密码" isPwd="true" ref="PwdInput"></xsydInput>
					<!--
					<xsydInput inputId="VcodeInput" label="验证码" placeholderStr="请输入发至您邮箱的验证码"></xsydInput>
					-->
					<a-button v-on:click="goLogin" type="primary" name="next-step" size="large">登录</a-button>
				</div>
				<div class="form_tips">
					<router-link to="/register">
					<div class="pull-left"><a href="" class="login-link">注册账号</a></div>
					</router-link>
					<div class="pull-right"><a href="" class="login-link">服务条约</a></div>
				</div>
			</div>
		</xsydContainer>
	</div>
</template>

<script>
import xsydContainer from '@/components/widget/xsydContainer.vue';
import xsydInput from '@/components/widget/xsydInput.vue';


export default {
	name: 'login',
	components: {
		//testui
		xsydContainer,
		xsydInput
	},
	methods: {
	    goLogin() {
	        console.log('login');
			console.log(this.$refs.EmailInput.data)
			console.log(this.$refs.PwdInput.data)
			this.$message.success(
			        'hello,'+this.$refs.EmailInput.data,
			        5,
			      );
			/*
			Vue.prototype.$message.success('f');
			this.$message.success(
			        'This is a prompt message for success, and it will disappear in 10 seconds',
			        10,
			      );
			*/
	    }
	}
};
</script>

<style>
#app {
	height: inherit;
}
.pull-left {
	float: left;
}
.pull-right {
	float: right;
}
</style>

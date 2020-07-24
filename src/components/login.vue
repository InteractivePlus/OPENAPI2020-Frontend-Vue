<template>
	<div class="container_wrap">
		<xsydContainer title="登录" subTitle="一个账号，畅享BlueAirLive所有服务">
			<div>
				<div>
					<xsydInput inputId="EmailInput" label="邮箱" placeholderStr="请输入您的邮箱"></xsydInput>
					<xsydInput inputId="PwdInput" label="密码" placeholderStr="请输入密码" isPwd="true"></xsydInput>
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
/*
	<div class="dologin">
		<div>
			<a href=""><img src="../assets/logo.png" class="form-logo" /></a>
		</div>
		<div class="form_desc">
			<h1 class="login-text">登录</h1>
			<h2 class="login-little-text">一个账号，畅享BlueAirLive所有服务</h2>
		</div>
		<div>
			<div>
				<span id="error_msg"></span>
				<div class="form-group">
					<!--
					<label for="LoginEmailInput" class="login-input-text">邮箱</label>
					<input type="text" name="" class="form-login " id="LoginEmailInput" placeholder="请输入您的邮箱" />
					-->
					<xsydInput inputId="EmailInput" label="邮箱" placeholderStr="请输入您的邮箱"></xsydInput>
				</div>
				<div class="form-group">
					<!--
					<label for="LoginPasswordInput" class="login-input-text">密码</label>
					<input type="password" name="" class="form-login " id="LoginPasswordInput" placeholder="请输入密码" />
					-->
					<xsydInput inputId="PwdInput" label="密码" placeholderStr="请输入密码" isPwd="true"></xsydInput>
				</div>
				<a-button type="primary" name="next-step" size="large">登录</a-button>
			</div>
			<div class="form_tips">
				<div class="pull-left"><a href="" class="login-link">注册账号</a></div>
				<div class="pull-right"><a href="" class="login-link">服务条约</a></div>
			</div>
		</div>
	</div>
	*/
//import testui from './widget/testui.vue'
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

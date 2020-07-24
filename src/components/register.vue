<template>
	<div class="container_wrap">
		<xsydContainer title="注册" subTitle="一个账号，畅享BlueAirLive所有服务">
			<div>
				<div>
					<xsydInput inputId="EmailInput" label="邮箱" placeholderStr="请输入您的邮箱"></xsydInput>
					<xsydInput inputId="PwdInput" label="密码" placeholderStr="请输入密码" isPwd="true"></xsydInput>
					<a-button v-on:click="goRegister" type="primary" name="next-step" size="large">注册</a-button>
				</div>
				<div class="form_tips">
					<router-link to="/login">
					<div class="pull-left"><a href="" class="login-link">登录账号</a></div>
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
	name: 'register',
	components: {
		//testui
		xsydContainer,
		xsydInput
	},
	methods: {
	    goRegister() {
	        console.log('register');
	    }
	}
};
</script>

<style>
#app {
	height: inherit;
}
</style>

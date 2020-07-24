<template>
	<div class="container_wrap">
		<xsydContainer title="注册您的形随意动账号" islogohidden="true" isTitleCenter="false">
			<div>
				<a-row type="flex" justify="space-around" align="middle">
					<a-col :span="16">
						<div>
							<xsydInput
								label="昵称"
								inputId="FirstNameInput"
								placeholderStr="请输入您的昵称"
							></xsydInput>
							<xsydInput
								label="用户名"
								inputId="UserNameInput"
								placeholderStr="请输入您的用户名"
							></xsydInput>
							<xsydInput label="邮箱" inputId="EmailInput" placeholderStr="请输入您的邮箱"></xsydInput>
							<p id="email-tip">您需要证实此电子邮件地址属于您。</p>
							<xsydInput
								label="密码"
								id="password"
								inputId="PasswordInput"
								placeholderStr="请输入您的密码"
							></xsydInput
							><xsydInput
								id="confirm-password"
								inputId="ConfirmPasswordInput"
								label="确认密码"
								placeholderStr="请确认您的密码"
							></xsydInput>
							<p id="password-tip">使用 8 个或更多字符（字母、数字和符号的组合）</p>
						</div>
						<a-row>
							<a-col :span="12"><a href="">已有账号？</a></a-col>
							<a-col :span="12">
								<a-button v-on:click="goRegister" type="primary" name="next-step">下一步</a-button>
							</a-col>
						</a-row>
					</a-col>
					<a-col :span="8">
						<a-row>
							<a-col :span="24"><img src="@/assets/logo.png" class="container-logo"/></a-col>
							<a-col :span="24"><p id="regist-tip">一个账号，畅享BlueAirLive所有服务</p></a-col>
						</a-row>
					</a-col>
				</a-row>
			</div>
		</xsydContainer>
		<xsydContainer
			style="display: none;"
			title="验证您的形随意动账号"
			islogohidden="true"
			isTitleCenter="false"
		></xsydContainer>
	</div>
</template>

<script>
import xsydContainer from "@/components/widget/xsydContainer.vue";
import xsydInput from "@/components/widget/xsydInput.vue";

export default {
	name: "register",
	components: {
		//testui
		xsydContainer,
		xsydInput,
	},
	methods: {
		goRegister() {
			console.log("register");
		},
	},
};
</script>

<style>
#app {
	height: inherit;
}

#email-tip {
	font-size: 12px;
	text-align: left;
	margin-bottom: 2em;
}

#password-tip {
	font-size: 12px;
	text-align: left;
}

#regist-tip {
	font-size: 16px;
	font-weight: 300;
}
</style>

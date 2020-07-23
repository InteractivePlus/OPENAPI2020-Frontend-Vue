<template>
	<div class="login_form_wrap">
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
						<label for="LoginEmailInput" class="login-input-text">邮箱</label>
						<input type="text" name="" class="form-login " id="LoginEmailInput" placeholder="请输入您的邮箱" />
					</div>
					<div class="form-group">
						<label for="LoginPasswordInput" class="login-input-text">密码</label>
						<input type="password" name="" class="form-login " id="LoginPasswordInput" placeholder="请输入密码" />
					</div>
					<a-button type="primary" name="next-step" size="large">登录</a-button>
				</div>
				<div class="form_tips">
					<div class="pull-left"><a href="" class="login-link">注册账号</a></div>
					<div class="pull-right"><a href="" class="login-link">服务条约</a></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
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

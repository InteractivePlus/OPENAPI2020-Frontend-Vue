<template>
	<!--<div class="container_wrap">-->
	<div>
		<a-row type="flex" justify="space-around" align="middle" style="height: 100vh">
			<a-col :span="7"></a-col>
			<a-col :span="10">
				<a-carousel :after-change="onChange" style="width: 100%" ref="carousel">
					<div>
						<a-spin :spinning="firstStepSpinning">
							<xsydContainer title="注册您的形随意动账号" islogohidden="true" isTitleCenter="false">
								<a-row type="flex" justify="space-around" align="middle">
									<a-col :span="16" style="padding-right: 1rem">
										<a-form :form="form" @submit="handleSubmit">
											<a-form-item class="item-group">
												<label class="xsyd-input-label">用户名</label>
												<a-input
													class="xsyd-input-textview-normal input-margin"
													placeholder="请输入您的用户名"
													v-decorator="[
														'username',
														{
															rules: [
																{ required: true, message: '请输入您的用户名！', whitespace: false },
																{ validator: validateUserName },
															],
														},
													]"
												/>
											</a-form-item>
											<a-form-item class="item-group">
												<label class="xsyd-input-label">电子邮箱</label>
												<a-input
													class="xsyd-input-textview-normal input-margin"
													placeholder="请输入您的电子邮箱"
													v-decorator="[
														'email',
														{
															rules: [
																{ type: 'email', message: '这不是一个正确的电子邮箱！' },
																{ required: true, message: '请输入您的电子邮箱！' },
																{ validator: validateEmail },
															],
														},
													]"
												/>
											</a-form-item>
											<p id="email-tip">您需要证实此电子邮件地址属于您。</p>
											<a-form-item class="item-group" has-feedback>
												<label class="xsyd-input-label">密码</label>
												<a-input
													class="xsyd-input-textview-normal input-margin"
													placeholder="请输入您的密码"
													v-decorator="[
														'password',
														{
															rules: [
																{ required: true, message: '请输入您的密码！' },
																{ validator: validateToNextPassword },
															],
														},
													]"
													type="password"
												/>
											</a-form-item>
											<a-form-item class="item-group" has-feedback>
												<label class="xsyd-input-label">确认密码</label>
												<a-input
													class="xsyd-input-textview-normal input-margin"
													placeholder="请确认您的密码"
													v-decorator="[
														'confirm',
														{
															rules: [
																{ required: true, message: '请确认您的密码！' },
																{ validator: compareToFirstPassword },
															],
														},
													]"
													type="password"
													@blur="handleConfirmBlur"
												/>
											</a-form-item>
											<p id="password-tip">使用 8 个或更多字符（字母、数字和符号的组合）</p>

											<a-row type="flex" justify="space-around" align="middle">
												<a-col :span="12">
													<router-link to="/login"><a href="">已有账号？</a></router-link>
												</a-col>

												<a-col :span="12">
													<a-form-item style="margin-bottom: 0;">
														<a-button type="primary" html-type="submit">下一步</a-button>
													</a-form-item>
												</a-col>
											</a-row>
										</a-form>
									</a-col>
									<a-col :span="8">
										<a-col :span="24" style="text-align: center">
											<img src="@/assets/logo.png" class="logo" />
										</a-col>
										<a-col :span="24"> <p id="regist-tip">一个账号，畅享BlueAirLive所有服务</p></a-col>
									</a-col>
								</a-row>
							</xsydContainer>
						</a-spin>
					</div>
					<div><h3>2</h3></div>
				</a-carousel>
			</a-col>
			<a-col :span="7"></a-col>
		</a-row>

		<!--<xsydContainer title="验证您的邮箱" islogohidden="true" isTitleCenter="false"></xsydContainer>-->
	</div>
</template>

<script>
import "@/assets/css/widget/xsydInput.css";
import Setting from "@/config/config.js";

import xsydContainer from "@/components/widget/xsydContainer.vue";
// import xsydInput from "@/components/widget/xsydInput.vue";
// 没办法用这个控件啊 验证表单要用form QAQ

export default {
	name: "register",
	components: {
		xsydContainer,
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					console.log("Received values of form: ", values);
					this.firstStepSpinning = !this.firstStepSpinning;
					setTimeout(() => {
						console.log("change page");
						this.$refs.carousel.next();
					}, 3000);
				}
			});
		},
		handleConfirmBlur(e) {
			const value = e.target.value;
			this.confirmDirty = this.confirmDirty || !!value;
		},
		compareToFirstPassword(rule, value, callback) {
			const form = this.form;
			if (value.length < Setting.PASSWORD_MINLEN) {
				callback(`密码过短，请限制${Setting.PASSWORD_MINLEN}~${Setting.PASSWORD_MAXLEN}字符以内`);
			}
			if (value.length > Setting.PASSWORD_MAXLEN) {
				callback(`密码过长，请限制${Setting.PASSWORD_MINLEN}~${Setting.PASSWORD_MAXLEN}字符以内`);
			}

			if (Setting.PASSWORD_REGEX.test(value) === false) {
				callback("密码不符合规则");
			}

			if (value && value !== form.getFieldValue("password")) {
				callback("两次输入的密码不一致！");
			} else {
				callback();
			}
		},
		validateToNextPassword(rule, value, callback) {
			const form = this.form;
			if (value.length < Setting.PASSWORD_MINLEN) {
				callback(`密码过短，请限制${Setting.PASSWORD_MINLEN}~${Setting.PASSWORD_MAXLEN}字符以内`);
			}
			if (value.length > Setting.PASSWORD_MAXLEN) {
				callback(`密码过长，请限制${Setting.PASSWORD_MINLEN}~${Setting.PASSWORD_MAXLEN}字符以内`);
			}

			if (Setting.PASSWORD_REGEX.test(value) === false) {
				callback("密码不符合规则");
			}

			if (value && this.confirmDirty) {
				form.validateFields(["confirm"], { force: true });
			}
			callback();
		},
		validateEmail(rule, value, callback) {
			const form = this.form;
			if (value.length > Setting.EMAIL_MAXLEN) {
				callback(`邮箱过长，请限制在${Setting.EMAIL_MAXLEN}字符以内`);
			}
			callback();
		},
		validateUserName(rule, value, callback) {
			const form = this.form;
			if (value.length < Setting.USERNAME_MINLEN) {
				callback(`用户名过短，请限制${Setting.USERNAME_MINLEN}~${Setting.USERNAME_MAXLEN}字符以内`);
			}
			if (value.length > Setting.USERNAME_MAXLEN) {
				callback(`用户名过长，请限制${Setting.USERNAME_MINLEN}~${Setting.USERNAME_MAXLEN}字符以内`);
			}
			if (Setting.USERNAME_REGEX.test(value) === false) {
				callback("用户名不符合规则");
			}

			callback();
		},
		onChange(a, b, c) {
			console.log(a, b, c);
		},
	},
	beforeCreate() {
		this.form = this.$form.createForm(this);
		console.log(Setting);
	},
	data() {
		return {
			confirmDirty: false,
			firstStepSpinning: false,
		};
	},
};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
	text-align: center;
	min-height: 160px;
	line-height: 160px;
	overflow: hidden;
}
</style>

<style>
/* 这玩意不会正常显示 干脆就别显示 */
.ant-form-item-children-icon {
	display: none !important;
}

.logo {
	width: 100px;
	height: 100px;
	margin: 0 auto 2em !important;
}

.input-margin {
	margin-bottom: 0.3rem;
}

.item-group {
	text-align: left;
	margin-bottom: 0.5em;
}

#app {
	height: inherit;
}

#email-tip {
	font-size: 12px;
	text-align: left;
	margin-bottom: 1.5em;
}

#password-tip {
	font-size: 12px;
	text-align: left;
}

#regist-tip {
	font-size: 16px;
	font-weight: 300;
	line-height: 1.5 !important;
}
</style>

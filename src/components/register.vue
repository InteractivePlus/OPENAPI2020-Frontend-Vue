<template>
	<div class="container_wrap">
		<xsydContainer title="注册您的形随意动账号" islogohidden="true" isTitleCenter="false">
			<div>
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
						<a-row>
							<a-col :span="24"><img src="@/assets/logo.png" class="container-logo"/></a-col>
							<a-col :span="24"><p id="regist-tip">一个账号，畅享BlueAirLive所有服务</p></a-col>
						</a-row>
					</a-col>
				</a-row>
			</div>
		</xsydContainer>
	</div>
</template>

<script>
import "@/assets/css/widget/xsydInput.css";

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
				}
			});
		},
		handleConfirmBlur(e) {
			const value = e.target.value;
			this.confirmDirty = this.confirmDirty || !!value;
		},
		compareToFirstPassword(rule, value, callback) {
			const form = this.form;
			if (value.length < 8) {
				callback("密码过短，请使用8个或更多字符");
			}

			if (value && value !== form.getFieldValue("password")) {
				callback("两次输入的密码不一致！");
			} else {
				callback();
			}
		},
		validateToNextPassword(rule, value, callback) {
			const form = this.form;
			if (value.length < 8) {
				callback("密码过短，请使用8个或更多字符");
			}

			if (value && this.confirmDirty) {
				form.validateFields(["confirm"], { force: true });
			}
			callback();
		},
	},
	beforeCreate() {
		this.form = this.$form.createForm(this);
	},
	data() {
		return {
			confirmDirty: false,
			autoCompleteResult: [],
		};
	},
};
</script>

<style>
/* 这玩意不会正常显示 干脆就别显示 */
.ant-form-item-children-icon {
	display: none !important;
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

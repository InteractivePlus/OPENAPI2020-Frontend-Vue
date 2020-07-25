class Setting {
	constructor() {
		this.USER_SYSTEM_NAME = {
			zh_CN: "幽径",
			en_US: "Solitary Trail",
		};
		this.THIRD_PARTY_SYSTEM_NAME = {
			zh_CN: "幽享",
			en_US: "Solitary Share",
		};
		this.THIRD_PARTY_SYSTEM_LINKS = new Map();

		this.USERNAME_MINLEN = 1;
		this.USERNAME_MAXLEN = 20;
		this.USERNAME_REGEX = "";

		this.DISPLAYNAME_MINLEN = 1;
		this.DISPLAYNAME_MAXLEN = 15;
		this.DISPLAYNAME_REGEX = "";

		this.SIGNATURE_MAXLEN = 40;
		this.SIGNATURE_REGEX = "";

		this.EMAIL_MAXLEN = 50;

		this.PASSWORD_MINLEN = 5;
		this.PASSWORD_MAXLEN = 40;
		this.PASSWORD_REGEX = "";

		this.AVATOR_MAX_SIZE = 200;

		this.PASSWORD_SALT = "";
		this.TOKEN_SALT = "";
		this.VERIFICATION_CODE_SALT = "";

		this.TOKEN_AVAILABLE_DURATION = 3600;
		this.VERIFICATION_CODE_AVAILABLE_DURATION = 300;

		this.DEFAULT_COUNTRY = "CN";
		this.DEFAULT_LOCALE = "zh_CN";

		this.DEFAULT_GROUP_PERMISSION = new Map([
			["createApp", false],
			["numAppLimit", 1],
		]);
		this.ALLOW_TOKEN_IP_CHANGE = true;
		this.DEBUG_MODE = true;
	}
}

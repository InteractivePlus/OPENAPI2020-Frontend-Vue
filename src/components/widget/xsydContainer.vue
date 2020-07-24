<template>
	<div :class="islogohidden === 'false' ? 'xsyd-container' : 'xsyd-container-without-logo'">
		<div v-if="islogohidden === 'false'">
			<a href=""><img src="@/assets/logo.png" class="container-logo"/></a>
		</div>
		<div class="container_desc">
			<div v-if="isTitleCenter === 'true'">
				<h1 class="container-text">{{ title }}</h1>
			</div>
			<div v-if="isTitleCenter === 'false'">
				<h1 class="container-text-without-center">{{ title }}</h1>
			</div>
			<h2 class="container-little-text">{{ subTitle }}</h2>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import "@/assets/css/widget/xsydContainer.css";

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		cwidth: {
			default: "1000px",
		},
		subTitle: String,
		islogohidden: {
			default: "false",
		},
		isTitleCenter: {
			default: "true",
		},
	},
};
</script>

<style></style>

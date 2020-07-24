<template>
	<div class="xsyd-container" >
		<div v-if="islogohidden === 'false'">
			<a href=""><img src="@/assets/logo.png" class="container-logo" /></a>
		</div>
		<div class="container_desc">
			<h1 class="container-text">{{ title }}</h1>
			<h2 class="container-little-text">{{ subTitle }}</h2>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import '@/assets/css/widget/xsydContainer.css';

export default {
	props: {
		title: {
			type: String,
			required: true
		},
		cwidth: {
			default: '1000px'
		},
		subTitle: String,
		islogohidden: {
			default: 'false'
		}
	}
};
</script>

<style></style>

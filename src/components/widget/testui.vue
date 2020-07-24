<template>
    <div>
        <h3>{{name}}</h3>
        <div class="num">{{ count }}</div>
        <a-button @click="increment">自增</a-button>
		<a-input></a-input>
    </div>
</template>
<script>
export default {
    name: 'test',
    props: {
        name: String,
        default: ''
    },
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
};
</script>
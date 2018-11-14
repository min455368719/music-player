<template>
	<div>
		{{title}}
	</div>
</template>

<script>
	export default {
		name: "Head",
		data(){
			return {
				title:"我是head"
			}
		}
	}
</script>

<style scoped>
	div {
		width: 100%;
		height: 80px;
		background-color: chocolate;
	}
</style>
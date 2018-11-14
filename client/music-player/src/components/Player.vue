<template>
	<div>
		<el-container class="content">
			<div class="left">
				<div>
					<img src="../../build/logo.png" />
				</div>
				<div>
					<img src="../../static/img/icon1/backward.png"  />
					<img src="../../static/img/icon1/zanting.png"  />
					<img src="../../static/img/icon1/forward.png" />
				</div>
				<div class="block">
    				<el-slider v-model="value1" :show-tooltip="false"></el-slider>
				</div>
			</div>
			<div class="right"></div>
		</el-container>
	</div>
</template>

<script>
	export default {
		name:'Player',
	    data() {
	    	return {
		        value1: 0
	    	}
	    },
	    methods: {
	      formatTooltip(val) {
	        return val / 100;
	    	}
	    }
	}
</script>

<style scoped>
	.content{
		width: 1000px;
		background-color: yellow;
		margin: 0 auto;
	}
</style>
<template>
	<div class="biger">
		<div class="baffle">
			<img class="blur" src="http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300"/>
		</div>
		<el-container class="player">
			<div class="left">
				<div class="logo">
					<img src="http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300" />
				</div>
				<div class="col">
					<img src="../../../static/img/icon1/backward.png"  />
					<img src="../../../static/img/icon1/zanting.png"  />
					<img src="../../../static/img/icon1/forward.png" />
				</div>
				<div class="block">
    				<el-slider v-model="value1" :show-tooltip="false"></el-slider>
				</div>
				<div class="showTime nowTime">00:00</div>
				<div class="showTime endTime">05:21</div>
			</div>
			<div class="right">
				<div class="r-top">
					<span class="p1">{{ songMsg[0] }}</span>
					<span class="p2">陈奕迅</span>
				</div>
				<ul class="r-mid">
					<li v-for="item in songMsg[1]" :key='item'>
						{{ item }}
					</li>
				</ul>
				<div class="r-bom">
					<div>
						<a href="#"><img src="../../../static/img/icon1/xihuan.png" /></a>
					</div>
					<div>
						<a href="#"><img src="../../../static/img/icon1/shoucang.png" /></a>
					</div> 
					<div>
						<a href="#"><img src="../../../static/img/icon1/xiaoxi.png" /></a>
					</div>
					<div>
						<a href="#"><img src="../../../static/img/icon1/fenxiang.png" /></a>
					</div>
				</div>
			</div>
		</el-container>
		
		<Comment></Comment>
	</div>
</template>

<script>
	import Comment from './Comment';
	
	var sName='不要说话';
	var sImg='http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300';
	var lyrics=['深色的海面布满白色的月光','我出神望着海 心不知飞哪去','听到她在告诉你','说她真的喜欢你','我不知该躲哪里','爱一个人是不是该有默契','我以为你懂得每当我看着你','我藏起来的秘密','在每一天清晨里'];
	export default {
		name:'Player',
	    data() {
	    	return {
		        value1: 20,
		        songMsg:[sName,lyrics,sImg]
	    	}
	    },
	    methods: {
	      formatTooltip(val) {
	        return val / 100;
	    	}
	    },
	    components: {
	    	Comment
	    }
	}
</script>

<style scoped>
	.biger{
		width: 1000px;
		margin: 20px auto;
		position: relative;
		/*background-color: rgba(245,222,179,0.6);*/
	}
	.player{
		width: 1000px;
		height: 500px;
		background-color: rgba(76,76,76,0.7);
		background-size:100%;
		margin: 20px auto;
		border-radius: 10px;
	}
	.baffle{
		width: 1000px;
		height: 500px;
		position: absolute;
		left: 0;
		top: 20px;
		z-index: -1;
	}
	.blur {	
	    filter: blur(8px);
	    width: 100%;
	    height: 100%;
	}
	.left {
		width: 400px;
		margin-left: 100px;
		/*background-color: greenyellow;*/
		text-align: center;
	}
	.logo {
		width: 240px;
		height: 240px;
		margin: 50px auto;
		border: 10px solid white;
		border-radius: 50%;
		overflow: hidden;
	}
	.logo img {
		width: 240px;
		height: 240px;
		/*border-radius: 50%;*/
	}
	.col img{
		width: 45px;
		height: 45px;
		margin: 0 8px;
	}
	.block {
		width: 240px;
		margin-left: 80px;
		margin-top: 10px;
	}
	.showTime {
		position: absolute;
		font-size: 14px;
		color: white;
		top: 430px;
	}
	.nowTime {
		left: 135px;
	}
	.endTime {
		left: 430px;
	}
	.right {
		width: 300px;
		height: 100%;
	}
	.r-top{
		text-align: center;
		margin-top: 20px;
		border-bottom: 1px solid gray;
	}
	.r-mid{
		height: 350px;
		overflow: hidden;
	}
	.p1{
		font-size: 20px;
		color: white;
	}
	.p2{
		color: white;
	}
	.r-mid li{
		list-style: none;
		text-align: center;
		margin-top: 20px;
	}
	.r-bom {
		height: 50px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.r-bom div{
		width: 24%;
		height: 100%;
		text-align: center;
		display: inline-block;
	}
</style>
<template>
	<div class="content">
		<el-container class='main1'>
			<div class='main1_left'>
				<div class="left">
					<div class="clear"></div>
					<div class="ll">
						<img src="http://p4.music.126.net/HIUy568wk914exFZai5GXA==/109951163554890901.jpg?param=200y200"  />
					</div>
					<div class="lr">
						<div class="lr-1">
							<img src="../../../static/img/icon1/gd.png" />
							<span>努力生活，想要的终会到来</span>
						</div>
						<div class="lr-2">
							<img src="http://p1.music.126.net/JVWb-Ist5KowjAAa7GpHqA==/109951163530949475.jpg?param=40y40" />
							<span>音乐天才</span>
							<span>2018-11-10创建</span>
						</div>
						<div class="lr-3">
							<el-button-group>
								<el-button size="small"><img src="../../../static/img/icon1/shoucangjia.png" /><span>(133)</span></el-button>
								<el-button size="small"><img src="../../../static/img/icon1/zhuanfa.png" /><span>(36)</span></el-button>
								<el-button size="small"><img src="../../../static/img/icon1/xiazai_1.png" /></el-button>
								<el-button size="small"><img src="../../../static/img/icon1/pinglun.png" /><span>(966)</span></el-button>
							</el-button-group>
						</div>
						
						<div class="lr-4">
							<div>标签：</div>
							<div>华语</div>
							<div>流行</div>
							<div>民谣</div>
							
						</div>
						<div class="clear"></div>
						<div class="lr-5">
							<span>介绍：那些看上去光鲜的人背后一定经历过万千烦恼，没有谁的成功都是一蹴而就的，你受的委屈，摔的伤痕，背的冷眼，别人都有过，他们身上有光，是因为扛下了黑暗。生活给了一个人多少磨难，日后必会还给他多.少幸运，为梦想颠簸的人有很多，不差你一个，但如果坚持到最后，你就是唯一 。</span>
						</div>
						
						<div class="lr-6"><a href="#">展开</a><i class="el-icon-arrow-down"></i></div>
					</div>
					<div class="clear"></div>
					
					<MusicName></MusicName>
				</div>
			</div>
			<div class='main1_right'>
				<div class="r-1">喜欢这首歌的人</div>
				<el-container class="r-2">
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
				</el-container>
				<div class="r-1">包含这首歌的歌单</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-1">相似歌曲</div>
			</div>
		</el-container>
	</div>
</template>

<script>
	import MusicName from './MusicName'
	
	export default {
		name: 'Songs',
		components:{
			MusicName
		}
    }
</script>

<style scoped>
	.clear {
		clear: both;
	}
	.content{
		width: 100%;
		margin: 0 auto;
		background-color: rgba(245,222,179,0.6);
	}  
	.main1 {
	  	width: 1000px;
	  	margin: 0 auto;
	}
	.main1_left{
	  	width: 750px;
	  	background-color: white;
	  	border-left: 1px solid darkgray;
	}
	.left{
		width: 100%;
		height: 100%;
		/*background-color: yellow;*/
	}
	.ll{
		width: 210px;
		height: 210px;
		float: left;
		border: 1px solid grey;
		margin: 10px;
	}
	.ll img {
		width: 200px;
		height: 200px;
		margin: 5px;
	}
	.lr{
		width: 510px;
		float: right;
	}
	.lr-1{
		height: 35px;
		margin-top: 15px;
		line-height: 35px;
	}
	.lr-1 img{
		display: block;
		float: left;
		margin-top: 2px;
	}
	.lr-1 span{
		font-size: 20px;
		display: block;
		float: left;
		margin-left: 15px;
	}
	.lr-2{
		height: 40px;
		margin-top: 10px;
		line-height: 40px;
	}
	.lr-2 img{
		display: block;
		float: left;
	}
	.lr-2 span{
		font-size: 14px;
		color: gray;
		display: block;
		float: left;
		margin-left: 10px;
	}
	.lr-3{
		height: 30px;
		margin-top: 10px;
	}
	.lr-3 button {
		height: 30px;
	}
	.lr-3 button img{
		display: block;
		width: 20px;
		height: 20px;
		float: left;
		margin-top: -4px;
	}
	.lr-3 button span{
		font-size: 12px;
		display: block;
		float: left;
	}
	.lr-4{
		height: 30px;
		margin-top: 10px;
		line-height: 35px;
	}
	.lr-4 div {
		font-size: 14px;
		float: left;
	}
	.lr-4 div:nth-child(n+2){
		width: 60px;
		height: 25px;
		margin-top: 2px;
		margin-left: 15px;
		border-radius: 15px;
		text-align: center;
		line-height: 25px;
		color: white;
		background-color: grey;	
	}
	.lr-5 {
		width: 480px;
		height: 80px;
		font-size: 14px;
		line-height: 25px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.lr-6 {
		width: 50px;
		height: 25px;
		margin-left: 430px;
		/*background-color: yellowgreen;*/
	}
	.main1_right{
	  	width: 250px;
	  	background-color: white;
	  	border-left: 1px solid darkgray;
	  	border-right: 1px solid darkgray;
	}
	.com-right {
		width: 300px;
/*		background-color: yellow;*/
	}
	.r-1 {
		width: 220px;
		margin: 10px auto;
		font-size: 14px;
		color: grey;
		font-weight: 600;
		border-bottom: 1px solid #FF7428;
	}
	.r-2 {
		width: 220px;
		margin: 10px auto;
	}
	.r-2 img{
		width: 40px;
		height: 40px;
		margin: 0 7px;
	}
	.r-4 {
		width: 220px;
		margin: 10px auto;
	}
	.r-4-1{
		display: inline-block;
		margin: 10px;
		width: 50px;
		height: 50px;
	}.r-4-1 img {
		width: 50px;
		height: 50px;
	}
	.r-4-2 {
		display: inline-block;
		width: 140px;
		font-size: 14px;
		color: grey;
	}
</style>
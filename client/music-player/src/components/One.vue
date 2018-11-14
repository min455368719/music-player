<template>
	<div class="content">
		<div class="swiper">
			<el-carousel :interval="2000" type="card" height="300px">
			    <el-carousel-item v-for="item in msg" :key="item">
			    	<img class="img" :src="item" />
			    </el-carousel-item>
			</el-carousel>
		</div>
		
		<el-container class='main1'>
			<div class='main1_left'>
				<div class='left_top'>
					<div class="inline circle"></div>
					<p class="inline hot">热门推荐</p>
					<ul class="inline tips">
						<li>华语</li>
						<li class="line"></li>
						<li>流行</li>
						<li class="line"></li>
						<li>摇滚</li>
						<li class="line"></li>
						<li>民谣</li>
						<li class="line"></li>
						<li>电子</li>
					</ul>
				</div>
				<div class="clear"></div>
				<div class="left_mid">
					<div class="clear"></div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
					<div class="show">
						<img src="http://p3.music.126.net/vQgO6_02XH1kb45zfyrq4w==/109951163663964021.jpg?param=200y200"/>
						<span>关于孤独 它可以有100种讲述方式</span>
					</div>
	
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div class='main1_right'>
				aside
			</div>
		</el-container>
	</div>
</template>

<script>
	var imgUrl1="http://p1.music.126.net/n8eFxmgYCKD9qFfhzoxaWg==/109951163663193173.jpg";
	var imgUrl2="http://p1.music.126.net/3zCy9aqJ-pCoxRVoDOdsIg==/109951163665485062.jpg";
	var imgUrl3="http://p1.music.126.net/fPviQobrok-q_eEmcQ4-6g==/109951163662864125.jpg";
	var imgUrl4="http://p1.music.126.net/RskCHTsAbWnwPUNYBpqysg==/109951163663185330.jpg";
	export default {
		name: 'One',
		data(){
			return {
				msg:[imgUrl1,imgUrl2,imgUrl3,imgUrl4]
			}
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
	.swiper{
		margin: 0 auto;
		width: 1000px;
		padding-top: 10px;
	}
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img {
  	width: 100%;
  	height: 100%;
  }
  
  .main1 {
  	width: 1000px;
  	margin: 20px auto;
  }
  .main1_left{
  	width: 750px;
  	background-color: white;
  	border-left: 1px solid darkgray;
  }
  .main1_right{
  	width: 250px;
  	background-color: aliceblue;
  	border-left: 1px solid darkgray;
  	border-right: 1px solid darkgray;
  }
  .left_top{
  	/*background-color: darkcyan;*/
  	width: 702px;
  	height: 30px;
  	margin-top: 20px;
  	margin-left: 24px;
  	border-bottom: 2px solid #FF7428;
  }
  .inline,li{
  	display: inline-block;
  }
  .circle {
  	width: 8px;
	height: 8px;
	border: 5px solid #FF7428;
	border-radius: 50%;
  }
  .hot {
  	font-size: 18px;
  	font-weight: 600;
  	margin-left: 5px;
  	margin-right: 20px;
  	margin-top: 0;
  	color: gray;
  }
  .line{
  	width: 1px;
  	height: 12px;
  	background-color: gray;
  }
  li{
  	color: gray;
  	font-size: 14px;
  	margin: 0 5px;
  }
  .left_mid{

  }
  .show {
  	width: 120px;
  	height: 170px;
  	text-align: left;
  	float: left;
  	margin: 10px 0 0 24px;
  }
  .show img{
  	width: 120px;
  	height: 120px;
  }
  .show span {
  	font-size: 14px;
  }
</style>
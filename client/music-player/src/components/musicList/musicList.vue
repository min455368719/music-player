<template>
	<div class="box">
		<div id="musicList">
			<div class="content">
				<!-- 标题 -->
				<div class="title">
					<div class="left">
						<h3>全部</h3>
						<button>选择分类&nbsp;&nbsp;&nbsp;<span></span></button>
					</div>
					<div class="right">
						<button class="active">热门</button>
						<button>最新</button>
					</div>
				</div>

				<!-- 歌单 -->
				<div class="list">
					<div class="list-left">
						<div class="list-box" v-for="item in list" :key="item.f_id">
							<img :src="item.f_cover" alt="加载失败">
							<router-link :to="'/Three/'+item.f_id">{{ item.f_name }}</router-link>
							<span>{{ item.f_publisher }}</span>
						</div>
					</div>
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
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>

	var imgUrl = ["https://p3.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.jpg?param=200y200"];
	var musicInfor = ['歌单信息'];
	var author = ['作者'];
	export default {
		name: 'Three',
		data() {
			return{
				list:[]
			}
		},
		mounted() {
			let _this=this;
			//发起ajax请求 Vue.prototype.$http = Axios
			_this.$http
			  .get("/musicForm")
			  .then(function(res){
			  	console.log(res);
			  	_this.list = res.data;
			  })
			  .catch(function(err){
			  	console.log(err);
			  });
		}
	}
</script>

<style scoped>
	.clear {
		clear: both;
	}
	
	.box {
		width: 100%;
		background-color: rgba(245,222,179,0.6);
	}
	
	#musicList {
		width: 1000px;
		/*height: 1744px;*/
		background-color: white;
		margin: 0px auto;
	}
	
	.content {
		width: 100%;
		margin: 0px auto;
	}
	
	.title {
		width: 100%;
		height: 50px;
		margin: 0px auto;
		/*padding-top: 50px;*/
		border-bottom: 2px solid #FF7428;
	}
	
	.title .left {
		float: left;
		margin-top: 15px;
	}
	
	.title .right {
		float: right;
		margin-top: 15px;
		margin-right: 15px;
	}
	
	.left h3 {
		display: inline;
	}
	
	.left button {
		cursor: pointer;
		position: relative;
	}
	
	.left button span {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-right: 1px solid #0080ff;
		border-bottom: 1px solid #0080ff;
		transform: rotate(45deg);
		position: absolute;
		top: 4px;
		left: 65px;
	}
	
	.right button {
		cursor: pointer;
	}
	.right .active {
		background-color: #ff0000;
		border: 0px;
		outline: none;
	}
	.list {
		width: 100%;
		margin-top: 30px;
	}
	.list-left {
		width: 750px;
		/*height: 100%;*/
		float: left;
	}
	
	.list-box {
		width: 140px;
		height: 190px;
		border: 1px solid #f0f0f0;
		float: left;
		margin-top: 10px;
		margin-right: 8px;
	}
	
	.list-box img {
		width: 140px;
		height: 140px;
	}
	.list-box a {
		text-decoration: none;
		color: #FF7428;
		display: block;
		width: 140px;
		/*line-height: 20px;*/
		margin-bottom: 5px;
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
        white-space: nowrap;
	}
	
	span{
		margin-top: 5px;
		font-size: 12px;
		color: gray;
	}
	
	.main1_right {
		float: right;
		width: 250px;
		height: 100%;
		background-color: white;
		/*border-left: 1px solid darkgray;*/
		/*border-right: 1px solid darkgray;*/
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
	
	.r-2 img {
		width: 40px;
		height: 40px;
		margin: 0 7px;
	}
	
	.r-4 {
		width: 220px;
		margin: 10px auto;
	}
	
	.r-4-1 {
		display: inline-block;
		margin: 10px;
		width: 50px;
		height: 50px;
	}
	
	.r-4-1 img {
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
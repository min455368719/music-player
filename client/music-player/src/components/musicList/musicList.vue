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
					<div class="list-box">
						<img src="https://p3.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.jpg?param=200y200
" alt="加载失败">
						<p><a href="#">歌单信息</a></p>
						<p><a href="#">作者</a></p>
					</div>
				</div>


			</div>
		</div>
	</div>
</template>

<script>
    var imgUrl=[
		"https://p3.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.jpg?param=200y200",

	]
	var musicInfor=[
		'歌单信息',

	]
	var author=[
		'作者',
	]
	export default {
		name: 'Three',
		data: {

		}
		
	}
</script>

<style scoped>
	.box {
		width: 100%;
		height: 1744px;
		background-color: #f0f0f0;
		/*margin-top: -20px;*/
		position: relative;
		left: 0px;
		top: 0px;
	}
	
	#musicList {
		width: 980px;
		height: 1744px;
		background-color: white;
		margin: 0px auto;
	}
	
	.content {
		width: 900px;
		height: 1744px;
		margin: 0px auto;
	}
	
	.title {
		width: 900px;
		height: 50px;
		margin: 0px auto;
		padding-top: 50px;
		border-bottom: 2px solid #FF7428;

	}
	.title .left{
		float: left;
        margin-top: 15px;
		/* display: flex; */
	}
	.title .right{
		float: right;
		display: flex;
		margin-top: 15px;
	}
	.left h3{
		display: inline;
	}
	.left button{
		cursor:pointer;
		position: relative;
	}
	.left button span{
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
	.right button{
		cursor:pointer;
	}
	.right .active{
		background-color: #ff0000;
		border: 0px;
		outline:none;
	} 
	.list{
		width: 900px;
		height: 1500px;
		background-color: aqua;
		margin-top: 30px;
	}
	.list-box{
		width: 140px;
		height: 190px;
		border: 1px solid #f0f0f0;
	}
	.list-box img{
        width: 140px;
		height: 140px;
	}
	a{
		text-decoration: none;
	}
	.list-box p{
		line-height: 6px;
		font-size: 14px;
		text-align: center;
	}
	.list-box p:last-child{
		
		font-size: 12px;
	}
</style>
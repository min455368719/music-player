<template>
	<div>
		<!--精品歌单部分-->
		<div class="jp">
			<div class="bg">
				<img :src="jpImg" />
			</div>
			<div class="jp-show">
				<img class="jp-show-left" :src='jpImg' />
				<div class="jp-show-right">
					<div class="right-top">
						<img src="../../../../static/img/icon/jp1.png" />
						<span>精品歌单</span>
					</div>
					<p class="p1">愿山野浓雾都有路灯 风雨漂泊都有归舟</p>
					<p class="p2">这些年,过得好吗,有时疲惫,却很快乐,有时孤独,却不迷惑</p>
				</div>
			</div>
		</div>
		
		<!--全部歌单部分-->
		<div class="recom-title">
			全部歌单<span> ></span>
		</div>
		<div class="flex-container">
			<div class="flex-item">
				<img src="http://p2.music.126.net/xg2qZxvmBHMxhQGSqcGECA==/109951162926819496.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/HFqBUprzY6wuGim2fukkfA==/109951163691214713.jpg?param=140y140" />
				<p>欧美金曲|曲懂人生</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/W2_nKm2SvDk30Ts4mXI_UQ==/109951163680562756.jpg?param=140y140" />
				<p>情话不一定要撕心裂肺</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/8EyJXw1KbF-XR3c5MURmJg==/109951163667345907.jpg?param=140y140" />
				<p>愉悦的心情，因为有愉悦的歌</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/5c38KSGwGgcrDS9qjfPhOw==/109951163526345568.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/02yE4OCM9GSHB_Ag6aMfEg==/109951163650431588.jpg?param=140y140" />
				<p>想对暗恋的人说的第一句</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/Cl0-NpZ0ESTDjJ1HmZ33KA==/109951163460576279.jpg?param=140y140" />
				<p>华语民谣，懂得才有共鸣</p>
			</div>
			<div class="flex-item">
				<img src="http://p4.music.126.net/GSIN5vC5J0qgYrdi11SiNg==/19095218440287759.jpg?param=200y200" />
				<p>我不缺朋友，我缺你</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MusicList',
		data(){
			return{
				jpImg:"http://p2.music.126.net/DNucTq_jUc-maZeD7RCJVw==/109951163594594622.jpg?param=140y140"
			}
		}
	}
</script>

<style scoped>
	/*精品歌单部分*/
	.jp{
		width: 100%;
		height: 160px;
		position: relative;
		background-color: rgba(0,0,0,0.5);
		overflow: hidden;
	}
	.jp .bg{
		width: 100%;
		height: 160px;
		filter: blur(8px);
		position: absolute;
		z-index: -1;
	}
	.jp .bg img{
		width: 100%;
		height: 100%;
	}
	.jp-show {
		width: 100%;
		height: 100%;
	}
	.jp-show-left {
		width: 140px;
		height: 140px;
		display: block;
		float: left;
		margin: 10px;
	}
	.jp-show-right {
		width: 205px;
		height: 100%;
		float: left;
		margin-left: 5px;	
	}
	.right-top {
		width: 100%;
		height: 40px;
		color: white;
		line-height: 40px;
		margin-top: 30px;
	}
	.p1{
		font-size: 14px;
		color: white;
		text-overflow: ellipsis;
		overflow: hidden;
        white-space: nowrap;
	}
	.p2 {
		font-size: 12px;
		color: grey;
		margin-top: 10px;
		max-height: 35px;
		overflow: hidden;
	}
	
	/*全部歌单部分*/
	.recom-title {
		width: 98%;
		font-size: 16px;
		font-weight: 600;
		color: #111806;
		letter-spacing: 2px;
		margin: 20px auto 10px auto;
	}
	.recom-title span{
		color: grey;
	}
	.flex-container {
		width: 100%;
		display: flex;
		justify-content:center;
		flex-wrap: wrap;
	}
	.flex-item {
		width: 180px;
		min-height: 210px;
		margin: 1px;
	}
	.flex-item img {
		width: 180px;
		height: 180px;
		display: block;
	}
	.flex-item p {
		display: block;
		color: gray;
		width: 100%;
		min-height: 30px;
		font-size: 12px;
		line-height: 30px;
	}
</style>
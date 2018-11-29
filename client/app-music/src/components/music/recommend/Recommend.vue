<template>
	<div>
		<!--轮播图部分-->
		<mt-swipe class="swiper-show" :auto="3000">
			<mt-swipe-item>
				<img src="http://p1.music.126.net/n8eFxmgYCKD9qFfhzoxaWg==/109951163663193173.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="http://p1.music.126.net/3zCy9aqJ-pCoxRVoDOdsIg==/109951163665485062.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="http://p1.music.126.net/fPviQobrok-q_eEmcQ4-6g==/109951163662864125.jpg" />
			</mt-swipe-item>
		</mt-swipe>

		<!--个性电台部分-->
		<div class="gx">
			<div class="gx-left">
				<img src="http://p1.music.126.net/UbCy7RyGusxpTbrCjpS9yg==/109951163651626738.jpg?param=140y140" />
			</div>
			<div class="gx-right">
				<div class="g-r-1">
					<div class="gr1">
						<p>新歌新碟</p>
						<p>WonderGirls宥斌复古风</p>
					</div>
					<div class="gr2">
						<img src="http://p2.music.126.net/gpakOFOGv_WPmy6F0-9i6w==/109951163057981277.jpg?param=140y140" />
					</div>
				</div>
				<div class="g-r-1 gr2-bom">
					<div class="gr1">
						<p>新歌新碟</p>
						<p>WonderGirls宥斌复古风</p>
					</div>
					<div class="gr2">
						<img src="http://p2.music.126.net/gpakOFOGv_WPmy6F0-9i6w==/109951163057981277.jpg?param=140y140" />
					</div>
				</div>
			</div>
		</div>

		<!--推荐歌单部分-->
		<div class="recom-title">
			<span>为你推荐歌单</span>
		</div>
		<div class="flex-container">
			<div class="flex-item">
				<img src="http://p2.music.126.net/xg2qZxvmBHMxhQGSqcGECA==/109951162926819496.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/HFqBUprzY6wuGim2fukkfA==/109951163691214713.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/W2_nKm2SvDk30Ts4mXI_UQ==/109951163680562756.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/8EyJXw1KbF-XR3c5MURmJg==/109951163667345907.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/5c38KSGwGgcrDS9qjfPhOw==/109951163526345568.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
			<div class="flex-item">
				<img src="http://p2.music.126.net/GSIN5vC5J0qgYrdi11SiNg==/19095218440287759.jpg?param=140y140" />
				<p>80年代的都是故事</p>
			</div>
		</div>

		<!--推荐MV部分-->
		<div class="recom-title">
			<span>推荐MV</span>
		</div>
		<div class="flex-container">
			<div class="flex-item1">
				<img src="https://y.gtimg.cn/music/photo_new/T015R640x360M1010006DeoM2yNnwB.jpg?max_age=2592000" />
				<p>RISE 登峰造极境 (2018 全球总决赛主题曲)</p>
			</div>
			<div class="flex-item1">
				<img src="https://y.gtimg.cn/music/photo_new/T015R640x360M101003XegXN0Sb0mM.jpg?max_age=2592000" />
				<p>Way Back Home</p>
			</div>
			<div class="flex-item1">
				<img src="https://y.gtimg.cn/music/photo_new/T015R640x360M000003bGeiO2RIsng.jpg?max_age=2592000" />
				<p>自弹自唱好撩人~于文文《其实其实》感动全场</p>
			</div>
			<div class="flex-item1">
				<img src="https://y.gtimg.cn/music/photo_new/T015R640x360M102002WGtPy3mYE7v.jpg?max_age=2592000" />
				<p>Venom (《毒液：致命守护者》电影插曲)</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Recommend'
	}
</script>

<style scoped>
	.swiper-show{
		height: 200px;
	}
	.swiper-show img {
		height: 100%;
		width: 100%;
	}
	
	/*个性电台部分*/
	.gx {
		width: 375px;
		height: 120px;
		margin: 10px auto 0 auto;
	}
	.gx-left {
		width: 120px;
		height: 120px;
		margin: 0 5px;
		float: left;
	}
	.gx-left img {
		width: 100%;
		height: 100%;
	}
	.gx-right{
		width: 240px;
		height: 120px;
		float: right;
		margin-right: 5px;
	}
	.g-r-1 {
		width: 100%;
		height: 50%;
	}
	.gr1 {
		width: 185px;
		height: 55px;
		background-color: #F0F0F0;
		float: left;
	}
	.gr1 p:first-child{
		margin-top: 10px;
		margin-left: 20px;
		font-size: 16px;
		color: black;
	}
	.gr1 p:last-child{
		margin-left: 20px;
		font-size: 12px;
		color: gray;
	}
	.gr2 {
		width: 55px;
		height: 5px;
		float: right;
		/*margin-right: 5px;*/
	}
	.gr2 img {
		width: 55px;
		height: 55px;
	}
	.gr2-bom {
		margin-top: 5px;
	}
	
	/*推荐歌单部分*/
	.recom-title {
		width: 98%;
		font-size: 16px;
		font-weight: 600;
		color: #111806;
		letter-spacing: 5px;
		margin: 20px auto 10px auto;
		text-align: center;
	}
	.flex-container {
		width: 100%;
		display: flex;
		justify-content:center;
		flex-wrap: wrap;
	}
	.flex-item {
		width: 120px;
		height: 150px;
		margin: 1px;
	}
	.flex-item img {
		width: 120px;
		height: 120px;
		display: block;
	}
	.flex-item p {
		display: block;
		color: gray;
		width: 100%;
		height: 30px;
		font-size: 12px;
		line-height: 30px;
		text-overflow: ellipsis;
		overflow: hidden;
        white-space: nowrap;
	}
	
	/*推荐MV部分*/
	.flex-item1 {
		width: 180px;
		height: 130px;
		margin: 1px;
	}
	.flex-item1 img {
		width: 180px;
		height: 100px;
		display: block;
	}
	.flex-item1 p {
		display: block;
		color: gray;
		width: 100%;
		height: 30px;
		font-size: 12px;
		line-height: 30px;
		text-overflow: ellipsis;
		overflow: hidden;
        white-space: nowrap;
	}
</style>
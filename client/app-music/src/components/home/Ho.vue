<template>
	<div>
		<!--导航部分-->
		<mt-navbar class="nav-show" v-model="selected" fixed> 
			<mt-tab-item id="1">推荐</mt-tab-item>
			<mt-tab-item id="2">排行榜</mt-tab-item>
			<mt-tab-item id="3">歌单</mt-tab-item>
			<mt-tab-item id="4">歌手</mt-tab-item>
		</mt-navbar>
		<!--选项卡-->
		<mt-tab-container class="show" v-model="selected">
			<mt-tab-container-item id="1">
				<!--轮播图部分-->
				<mt-swipe class="swiper-show" :auto="3000"> 
					<mt-swipe-item>
						<img src="http://p1.music.126.net/n8eFxmgYCKD9qFfhzoxaWg==/109951163663193173.jpg"  />
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="http://p1.music.126.net/3zCy9aqJ-pCoxRVoDOdsIg==/109951163665485062.jpg"  />
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="http://p1.music.126.net/fPviQobrok-q_eEmcQ4-6g==/109951163662864125.jpg"  />
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
				
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<Rank></Rank>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<mt-cell v-for="n in 6" :title="'选项 ' + n" />
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
</script>

<style>
</style>
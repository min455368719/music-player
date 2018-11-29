<template>
	<div>
		<div class="title">知了官方榜单</div>
		
		<!--飙升榜部分-->
		<div class="rank-list-1">
			<img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" />
			<div class="rank-list-right">
				<ul>
					<li>1.喜新恋旧 - Jong J</li>
					<li>2.写给黄淮 - 解忧邵帅</li>
					<li>3.My Man - Jong J</li>
				</ul>
			</div>
		</div>
		<div class="rank-list-1">
			<img src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" />
			<div class="rank-list-right">
				<ul>
					<li>1.喜新恋旧 - Jong J</li>
					<li>2.写给黄淮 - 解忧邵帅</li>
					<li>3.My Man - Jong J</li>
				</ul>
			</div>
		</div>
		<div class="rank-list-1">
			<img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" />
			<div class="rank-list-right">
				<ul>
					<li>1.喜新恋旧 - Jong J</li>
					<li>2.写给黄淮 - 解忧邵帅</li>
					<li>3.My Man - Jong J</li>
				</ul>
			</div>
		</div>
		<div class="rank-list-1">
			<img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150" />
			<div class="rank-list-right">
				<ul>
					<li>1.喜新恋旧 - Jong J</li>
					<li>2.写给黄淮 - 解忧邵帅</li>
					<li>3.My Man - Jong J</li>
				</ul>
			</div>
		</div>
		<div class="rank-list-1">
			<img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" />
			<div class="rank-list-right">
				<ul>
					<li>1.喜新恋旧 - Jong J</li>
					<li>2.写给黄淮 - 解忧邵帅</li>
					<li>3.My Man - Jong J</li>
				</ul>
			</div>
		</div>
		<div class="rank-list-1">
			<img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" />
			<div class="rank-list-right">
				<ul>
					<li>1.喜新恋旧 - Jong J</li>
					<li>2.写给黄淮 - 解忧邵帅</li>
					<li>3.My Man - Jong J</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Ranking'
	}
</script>

<style scoped>
	.title {
		height: 30px;
		line-height: 30px;
		font-weight: 600;
		margin-top: 10px;
		padding-left: 15px;
		border-bottom: 2px solid #FF7428;
	}
	.rank-list-1 {
		height: 100px;
		/*background-color: yellow;*/
		margin-top: 10px;
	}
	.rank-list-1 img {
		width: 100px;
		height: 100px;
		display: block;
		float: left;
		margin-left: 10px;
	}
	.rank-list-right{
		width: 255px;
		height: 99px;
		margin-left: 115px;
		border-bottom:  1px solid gainsboro;
	}
	.rank-list-right ul {
		list-style: none;
		margin-left: 15px;
	}
	.rank-list-right ul li{
		height: 30px;
		color: gray;
		line-height: 30px;
		font-size: 14px;
	}
</style>
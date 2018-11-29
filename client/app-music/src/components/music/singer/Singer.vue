<template>
	<div>
		<!--热门歌手部分-->
		<div class="hot-title">
			<img src="../../../../static/img/icon/jp1.png" />
			<span>热门歌手</span>
		</div>
		<div class="hot-show">
			<div class="singer" v-for="item in singers" :key="item.name">
				<img :src="item.singerImg" />
				<span>{{ item.name }}</span>
			</div>
		</div>
		
		<!--推荐歌手部分-->
		<div class="recom-title">
			<span>为你推荐歌手</span>
		</div>
		<div class="flex-container">
			<div class="flex-item" v-for="item in singers2" :key="item.name">
				<img :src="item.singerImg" />
				<p>{{ item.name }}</p>
			</div>
		</div>

	</div>
</template>

<script>
  export default {
  	name:'Singer',
  	data(){
  		return{
  			singers:[{
  				name:'G.A.M 邓紫棋',
  				singerImg:'http://p4.music.126.net/r7uMnwjWpYMuQI_3ZTg56A==/18528969953189760.jpg?param=130y130'
  			},{
  				name:'薛之谦',
  				singerImg:'http://p3.music.126.net/ULlwJ2drOfYv-f6-_7jGGQ==/3250156379592966.jpg?param=130y130'
  			},{
  				name:'陈奕迅',
  				singerImg:'http://p3.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg?param=130y130'
  			},{
  				name:'林俊杰',
  				singerImg:'http://p4.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg?param=130y130'
  			},{
  				name:'李荣浩',
  				singerImg:'http://p4.music.126.net/RQ8pNp66CqAsieGtSaj_5g==/109951163398568078.jpg?param=130y130'
  			},{
  				name:'王贰浪',
  				singerImg:'http://p3.music.126.net/daN7qav1x0nWl-TZRe41dw==/109951163303423969.jpg?param=130y130'
  			},{
  				name:'林宥嘉',
  				singerImg:'http://p4.music.126.net/DeH1T1OKwTL2bIg3l8L21A==/109951163186203713.jpg?param=130y130'
  			},{
  				name:'陈粒',
  				singerImg:'http://p3.music.126.net/Q92YwJrk2f2tsK-7B0VIhQ==/6628955605123612.jpg?param=130y130'
  			},{
  				name:'Alan Walker',
  				singerImg:'http://p4.music.126.net/AsrGD4Sf0HWJ3mK-Y__PLw==/18981968742063387.jpg?param=130y130'
  			},{
  				name:'花粥',
  				singerImg:'http://p3.music.126.net/f2R3-se6DLlcucIusS6mQQ==/109951163610593454.jpg?param=130y130'
  			}],
  			singers2:[{
  				name:'毛不易',
  				singerImg:'http://p4.music.126.net/ygk9_LT0yuzGUbIPZyLrKw==/109951163062867509.jpg?param=130y130'
  			},{
  				name:'田馥甄',
  				singerImg:'http://p3.music.126.net/2XHRjgOcjfdpSEgzP2AbgA==/3412884102389555.jpg?param=130y130'
  			},{
  				name:'金玟岐',
  				singerImg:'http://p4.music.126.net/5xovShW1vWSo4CmS3NvNhA==/109951163071307134.jpg?param=130y130'
  			},{
  				name:'Ed Sheeran ',
  				singerImg:'http://p4.music.126.net/7QK82incNi3k9Gfpot_ykg==/18636722092498224.jpg?param=130y130'
  			},{
  				name:'周柏豪',
  				singerImg:'http://p3.music.126.net/ylIXyVKI0MyS3RXpDBojFA==/18585045046057560.jpg?param=130y130'
  			},{
  				name:'Vicetone ',
  				singerImg:'http://p3.music.126.net/XDn30moMUdYI5SQCCvAs1Q==/19216164718680503.jpg?param=130y130'
  			},{
  				name:'张碧晨',
  				singerImg:'http://p3.music.126.net/z3xnuxwoJ-oyKAIAzDPMAQ==/109951163251674001.jpg?param=130y130'
  			},{
  				name:'TheFatRat ',
  				singerImg:'http://p3.music.126.net/VpsUseY47x0UHz75KKbhtA==/2535473816668478.jpg?param=130y130'
  			}]
  		}
  	}
  }
</script>

<style scoped>
/*热门歌手*/
.hot-title {
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid gainsboro;
	/*background-color: hotpink;*/
}
.hot-show {
	width: 100%;
}
.singer {
	width: 100%;
	height: 100px;
}
.singer img {
	width: 80px;
	height: 80px;
	display: block;
	float: left;
	margin: 5px;
	border-radius: 50%;
}
.singer span {
	display: block;
	height: 90px;
	width: 255px;
	color: gray;
	line-height: 90px;
	float: left;
	padding-left: 20px;
	border-bottom: 1px solid gainsboro;
}

/*推荐歌手部分*/
	.recom-title {
		width: 98%;
		font-size: 16px;
		font-weight: 600;
		color: #111806;
		letter-spacing: 5px;
		margin: 20px auto 10px auto;
	}
	.flex-container {
		background-color: wheat;
		width: 100%;
		display: flex;
		justify-content:center;
		flex-wrap: wrap;
	}
	.flex-item {
		width: 80px;
		height: 110px;
		margin: 5px;
	}
	.flex-item img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		display: block;
	}
	.flex-item p {
		display: block;
		color: gray;
		width: 100%;
		height: 30px;
		font-size: 12px;
		line-height: 30px;
		text-align: center;
	}

</style>
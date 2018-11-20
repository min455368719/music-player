
<template>
	<div class="whole">
		<!-- 左侧用户信息显示模块 -->
		<div class="left">

			<div class="tuijian">
				<div class="tuijian1">推荐</div>
				<div class="tuijian2">
					<a><img src="../../../static/img/icon2x/yinle_1.png" alt=""><span>发现音乐</span></a>
					<a><img src="../../../static/img/icon2x/fashegongshuai.png" alt=""><span>私人FM</span></a>
					<a><img src="../../../static/img/icon2x/shipin.png" alt=""><span>视频</span></a>
					<a><img src="../../../static/img/icon2x/qunzu.png" alt=""><span>朋友</span></a>
				</div>
			</div>
			<div class="wode">
				<div class="wode1">我的音乐</div>
				<div class="wode2">
					<a><img src="../../../static/img/icon2x/bendiyinleyunduanyinle24.png" alt=""><span>本地音乐</span></a>
					<a><img src="../../../static/img/icon2x/xiazai.png" alt=""><span>下载管理</span></a>
				</div>
			</div>
			<div class="gedan">
				<div class="gedan1"><span>创建的歌单</span><img src="../../../static/img/icon2x/add.png" alt=""><a href="">∨</a></div>
				<div class="gedan2">
					<a><img src="../../../static/img/icon2x/shoucang.png" alt=""><span>我喜欢的音乐</span></a>
				</div>
			</div>

		</div>
		<div class="bofangge">
			<!-- <audio src="http://music.163.com/song/media/outer/url?id=1311319058.mp3"></audio> -->
			<audio controls>
				<source src="http://music.163.com/song/media/outer/url?id=1311319058.mp3" type="audio/mpeg">
				</source>
				<source src="http://music.163.com/song/media/outer/url?id=1311319058.ogg" type="audio/ogg">
				</source>
				<source src="http://music.163.com/song/media/outer/url?id=1311319058.wav" type="audio/wav">
				</source>
				您的浏览器不支持 HTML5 audio 标签。
			</audio>
        </div>

        <div class="right">
		
		</div>
        </div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
	.whole {
		width: 100%;
		height: 870px;
		display: flex;
	}
	/* 左侧用户显示模块 */
	.left {
		width: 260px;
		height: 66%;
		font-size: 14px;
	}
	/* 推荐 */
	.tuijian {
		width: 100%;
		height: 200px;
	}
	.tuijian1 {
		margin-left: 10px;
		font-size: 16px;
		line-height: 40px
	}
	.tuijian p {
		width: 100%;
		height: 25px;
		position: relative;
		bottom: 0px
	}
	.tuijian2 {
		margin-top: -10px
	}
	.tuijian2 img {
		width: 20px;
		height: 20px;
		margin-left: 20px;
	}
	.tuijian2 span {
		margin-left: 10px;
		line-height: 5px;
		position: absolute;
		top: 7px
	}
	/* 我的音乐 */
	.wode {
		width: 100%;
		height: 240px;
		margin-top: 10px;
	}
	.wode1 {
		margin-left: 10px;
		font-size: 16px;
		line-height: 40px
	}
	.wode p {
		width: 100%;
		height: 25px;
		position: relative;
		bottom: 0px
	}
	.wode2 {
		margin-top: -10px
	}

	.wode2 img {
		width: 20px;
		height: 20px;
		margin-left: 20px;
	}
	.wode2 span {
		margin-left: 10px;
		line-height: 5px;
		position: absolute;
		top: 7px
	}
	/* 创建的歌单 */
	.gedan {
		width: 100%;
		height: 240px;
		margin-top: 10px;
	}
	.gedan1 {
		margin-left: 10px;
		font-size: 16px;
		line-height: 40px
	}
	.gedan p {
		width: 100%;
		height: 25px;
		position: relative;
		bottom: 0px
	}
	.gedan2 {
		margin-top: -10px
	}
	.gedan2 img {
		width: 20px;
		height: 20px;
		margin-left: 20px;
	}
	.gedan2 span {
		margin-left: 10px;
		line-height: 5px;
		position: absolute;
		top: 7px
	}
	.bofangge audio {
		width: 200px;
		position: absolute;
		top: 865px;
		left: 3px
	}
	
</style>
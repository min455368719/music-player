<template>
	<div>
		<el-container class="com-show">
			<div class="comImg">
				<img src="../../assets/logo.png" />
			</div>
			<div class="com-main">
				<p class="con-p">嘉州微雨:</p>
				<span>谢谢大家的支持也谢谢网易云给的自媒体让我可以和大家交流音乐</span>
				<p class="com-time">2018年10月16日</p>
			</div>
		</el-container>
		<el-container class="com-show">
			<div class="comImg">
				<img src="../../assets/logo.png" />
			</div>
			<div class="com-main">
				<p class="con-p">嘉州微雨:</p>
				<span>谢谢大也谢谢网易云给的自媒体家的支持也谢也谢谢网易云给的自媒体谢网易云给的自媒体让我可以和大家交流音乐</span>
				<p class="com-time">2018年10月16日</p>
			</div>
		</el-container>
		<el-container class="com-show">
			<div class="comImg">
				<img src="../../assets/logo.png" />
			</div>
			<div class="com-main">
				<p class="con-p">嘉州微雨:</p>
				<span>谢谢大家的支持也谢谢网易云给的自媒体让我可以也谢谢网也谢谢网易云给也谢谢网易云给的自媒体的自媒体易云给的自媒体和大家交流音乐</span>
				<p class="com-time">2018年10月16日</p>
			</div>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'ComeShow'
	}
</script>

<style scoped>
	.com-show{
		height: 130px;
		/*background-color: yellow;*/
		border-bottom: 1px dotted gray;
	}
	.comImg {
		width: 80px;
		height: 80px;
		margin: 20px;
	}
	.comImg img {
		width: 80px;
		height: 80px;
	}
	.con-p{
		font-size: 16px;
		font-weight: 500;
		line-height: 20px;
		color: cornflowerblue;
	}
	.com-main span {
		font-size: 14px;
		color: grey;
	}
	.com-time {
		font-size: 12px;
		color: grey;
	}
</style>
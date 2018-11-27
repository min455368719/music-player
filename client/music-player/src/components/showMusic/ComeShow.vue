<template>
	<div>
		<el-container class="com-show"  v-for="item in commentInfo" :key="item.c_id">
			<div class="comImg">
				<img :src="item.c_p_img " />
			</div>
			<div class="com-main">
				<p class="con-p">{{ item.c_people }}:</p>
				<span>{{ item.com }}</span>
				<p class="com-time">{{ item.c_time }}</p>
			</div>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'ComeShow',
		data(){
			return {
				commentInfo:[{}]
			}
		},
		methods: {
			getComment(){
				let _this = this;
				
				_this.$http
					.get("/getComment",{params: {id:_this.$route.params.id}})
					.then(function(res){
						console.log(res);
						_this.commentInfo = res.data;
					})
					.catch(function(err){
						console.log(err);
					})
			}
		},
		mounted(){
			this.getComment();
		}
	}
</script>

<style scoped>
	.com-show{
		min-height: 130px;
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
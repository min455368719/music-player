<template>
	<div>
		<!--头部部分-->
		<mt-header title="知了音乐" fixed>
			<img src="../assets/logo.png" slot="left" />
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<!--尾部选项卡-->
		<mt-tab-container class="show-area" v-model="selected">
			<mt-tab-container-item id="音乐">
				<MusicNav></MusicNav>
			</mt-tab-container-item>
			<mt-tab-container-item id="发现">

			</mt-tab-container-item>
			<mt-tab-container-item id="我的">

			</mt-tab-container-item>
		</mt-tab-container>
		
		<!--尾部部分-->
		<mt-tabbar class="foot" v-model="selected" fixed>
			<mt-tab-item id="音乐">
				<img slot="icon" :src="icon1"> 音乐
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" :src="icon2"> 发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" :src="icon3"> 我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import MusicNav from "@/components/music/MusicNav";
	
	export default {
		name: 'Home',
		data() {
			return{
				selected:'音乐',
				icon1:'../../static/img/icon/yinle.png',
				icon2:'../../static/img/icon/zhinanzhen1.png',
				icon3:'../../static/img/icon/ren1.png'
			}
		},
		watch:{
			selected:function(){
				let a=this.selected;
				if(a=="音乐"){
					this.icon1='../../static/img/icon/yinle.png';
					this.icon2='../../static/img/icon/zhinanzhen1.png';
					this.icon3='../../static/img/icon/ren1.png';
				}else if(a=="发现"){
					this.icon1='../../static/img/icon/yinle1.png';
					this.icon2='../../static/img/icon/zhinanzhen.png';
					this.icon3='../../static/img/icon/ren1.png';
				}else{
					this.icon1='../../static/img/icon/yinle1.png';
					this.icon2='../../static/img/icon/zhinanzhen1.png';
					this.icon3='../../static/img/icon/ren.png';
				}
			}
		},
		components:{
			MusicNav
		}
	}
</script>

<style scoped>
	header {
		height: 50px;
		background-color: #FF7428;
	}
	header img {
		width: 38px;
		height: 38px;
		border: 2px solid white;
		border-radius: 50%;
	}
	.show-area{
		margin-top: 50px;
		margin-bottom: 60px;
	}
	.mint-tabbar > .mint-tab-item.is-selected {
		color: #FF7428;
	}
</style>
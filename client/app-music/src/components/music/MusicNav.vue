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
				<Recom></Recom>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<Rank></Rank>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<MusicList></MusicList>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<Singer></Singer>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import Recom from '@/components/music/recommend/Recommend';
	import Rank from '@/components/music/ranking/Ranking';
	import MusicList from '@/components/music/musicList/MusicList';
	import Singer from '@/components/music/singer/Singer';
	
	export default {
		name: 'MusicNav',
		data(){
			return {
				selected:'1'
			}
		},
		components:{
			Recom,
			Rank,
			MusicList,
			Singer
		}
	}
</script>

<style scoped>
	.mint-navbar .mint-tab-item.is-selected {
		border: 0;
		color: #FF7428;
		height: 6px;
		background-color: white;
	}
	.nav-show{
		background-color: wheat;
		margin-top: 50px;
		height: 40px;
		color: white;
	}
	.show{
		margin-top: 40px;
	}
</style>
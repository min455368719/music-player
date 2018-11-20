<template>
	<div class="biger">
		<div class="title">
			<div>歌曲列表</div>
			<div>共20首歌曲</div>
			<div>播放：<span>1234 </span>次</div>
		</div>
		<el-table size="small" :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
			<el-table-column prop="id" label="序号" width="80"></el-table-column>
			<el-table-column prop="MusicName" label="歌曲标题" width="240"></el-table-column>
			<el-table-column prop="LongTime" label="时长"></el-table-column>
			<el-table-column prop="Singer" label="歌手"></el-table-column>
			<el-table-column prop="Albun" label="专辑"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if(rowIndex === 1) {
					return 'warning-row';
				} else if(rowIndex === 3) {
					return 'success-row';
				}
				return '';
			}
		},
		data() {
			return {
				tableData2: [{
					id: '1',
					MusicName: '不要说话',
					LongTime: '04:22',
					Singer: '陈奕迅',
					Albun: '不要说话'
				},{
					id: '1',
					MusicName: '不要说话',
					LongTime: '04:22',
					Singer: '陈奕迅',
					Albun: '不要说话'
				}, {
					id: '1',
					MusicName: '不要说话',
					LongTime: '04:22',
					Singer: '陈奕迅',
					Albun: '不要说话'
				}, {
					id: '1',
					MusicName: '不要说话',
					LongTime: '04:22',
					Singer: '陈奕迅',
					Albun: '不要说话'
				},{
					id: '1',
					MusicName: '不要说话',
					LongTime: '04:22',
					Singer: '陈奕迅',
					Albun: '不要说话'
				}]
			}
		}
	}
</script>

<style scoped>
	.biger{
		width: 720px;
		margin: 10px auto;
		/*background-color: thistle;*/
	}
	.title{
		width: 100%;
		height: 30px;
		border-bottom: 3px solid #FF7428;
		/*background-color: navajowhite;*/
	}
	.title div{
		height: 30px;
		float: left;
	}
	.title div:first-child{
		font-size: 20px;
		font-weight: 600;
		color: #FF7428;
		line-height: 30px;
	}
	.title div:nth-child(2){
		font-size: 14px;
		color: grey;
		line-height: 38px;
		margin-left: 15px;
	}
	.title div:last-child {
		font-size: 14px;
		color: grey;
		line-height: 38px;
		margin-left: 450px;
	}
	.title div span{
		font-size: 14px;
		color: #FF7428;
	}
</style>
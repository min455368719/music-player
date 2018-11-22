<template>
	<div class="biger">
		<div class="baffle">
			<img class="blur" :src="musicMsg.albumImg"/>
		</div>
		<el-container class="player">
			<div class="left">
				<div class="logo">
					<img :src="musicMsg.albumImg" />
				</div>
				<div class="col">
					<img src="../../../static/img/icon1/backward.png"  />
					<img :src="icons" @click="Play" />
					<img src="../../../static/img/icon1/forward.png"/>
				</div>
				<div class="block">
    				<el-slider v-model="value1" :show-tooltip="false" :max="value2"></el-slider>
				</div>
				<div class="showTime nowTime">{{ musicMsg.nowTime }}</div>
				<div class="showTime endTime">{{ musicMsg.allTime }}</div>
			</div>
			<div class="right">
				<div class="r-top">
					<span class="p1">{{ musicMsg.songName }}</span>
					<span class="p2">{{ musicMsg.singerName }}</span>
				</div>
				<ul class="r-mid">
					<!--<li v-for="item in musicMsg.lyrics" :key='item'>
						{{ item }}
					</li>-->
					<!--<li>{{ g }}</li>-->
					<!--<div class="tc font30 mb15">{{g}}</div>-->
				</ul>
				<div class="r-bom">
					<div>
						<a href="#"><img src="../../../static/img/icon1/xihuan.png" /></a>
					</div>
					<div>
						<a href="#"><img src="../../../static/img/icon1/shoucang.png" /></a>
					</div> 
					<div>
						<a href="#"><img src="../../../static/img/icon1/xiaoxi.png" /></a>
					</div>
					<div>
						<a href="#"><img src="../../../static/img/icon1/fenxiang.png" /></a>
					</div>
				</div>
			</div>
		</el-container>
		<audio id="audio">
			<source :src="musicMsg.s" type="audio/mpeg"></source>
		</audio>
		<Comment></Comment>
	</div>
</template>

<script>
	import Comment from './Comment';
//	var sName='不要说话';
//	var sImg='http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300';
	var lyric=['深色的海面布满白色的月光','我出神望着海 心不知飞哪去','听到她在告诉你','说她真的喜欢你','我不知该躲哪里','爱一个人是不是该有默契','我以为你懂得每当我看着你','我藏起来的秘密','在每一天清晨里'];
//	var lyric='[by:Taynochan][ti:不要说话][ar:陈奕迅][al:博儿Lrc试练][by:博儿][00:00.00] 作曲 : 小柯[00:01.00] 作词 : 小柯 　　[00:18.77]深色的海面布满白色的月光[00:24.51][00:25.11]我出神望着海 心不知飞哪去[00:31.64]听到她在告诉你[00:35.28]说她真的喜欢你[00:39.48]我不知该 躲哪里[00:47.17]爱一个人是不是应该有默契[00:54.15]我以为你懂得每当我看着你[01:00.07]我藏起来的秘密[01:03.67]在每一天清晨里[01:07.60]暖成咖啡 安静的拿给你[01:14.33]愿意 用一支黑色的铅笔[01:18.81]画一出沉默舞台剧'
	export default {
		name:'Player',
	    data() {
	    	return {
		        value1: 0,
		        value2: 0,
		        icons: '../../../static/img/icon1/bofang.png',
		        g:'',
		        lrcObj:null,
		        p:null,
		        height:'auto',
		        lrc:'[00:00.00]作曲:小柯 [00:01.00]作词:小柯  [00:18.77]深色的海面布满白色的月光  [00:25.11]我出神望着海心不知飞哪去 [00:31.64]听到她在告诉你 [00:35.28]说她真的喜欢你 [00:39.48]我不知该躲哪里 [00:47.17]爱一个人是不是应该有默契 [00:54.15]我以为你懂得每当我看着你 [01:00.07]我藏起来的秘密 [01:03.67]在每一天清晨里 [01:07.60]暖成咖安静的拿给你 [01:14.33]愿意用一支黑色的铅笔 [01:18.81]画一出沉默舞台剧 [01:22.95]灯光再亮,也抱住你 [01:28.53]愿意在角落唱沙哑的歌 [01:33.06]再大声也都是给你 [01:37.24]请用心听不要说话 [01:51.54]爱一个人是不是应该要默契 [01:58.36]我以为你懂得每当我看着你 [02:04.34]我藏起来的秘密 [02:08.22]在每一天清晨里 [02:11.47]暖成咖啡安静的拿给你 [02:18.49]愿意用一支黑色的铅笔 [02:22.92]画一出沉默舞台剧 [02:27.31]灯光再亮也抱住你 [02:33.04]愿意在角落唱沙哑的歌 [02:37.33]再大声也都是给你 [02:41.46]请用心听不要说话 [03:15.81]愿意用一支黑色的铅笔 [03:19.95]画一出沉默舞台剧 [03:24.43]灯光再亮也抱住你 [03:29.82]愿意在角落唱沙哑的歌 [03:34.19]再大声也都是给你 [03:38.48]请原谅我不会说话 [03:44.11]愿意用一支黑色的铅笔 [03:48.55]画一出沉默舞台剧 [03:52.68]灯光再亮也抱住你 [03:58.35]愿意在角落唱沙哑的歌 [04:02.84]再大声也都是给你 [04:06.97]爱是用心吗不要说话',
		        musicMsg:{
		        	songName:'不要说话',
		        	albumImg:'http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300',
		        	singerName:'陈奕迅',
		        	s:'http://music.163.com/song/media/outer/url?id=25906124.mp3',
		        	lyrics: lyric,
		        	allTime:'00:00',
		        	nowTime:'00:00',
		        	zanNum:20,
		        	collection:21,
		        	zhuanNum:22
		        }
	    	}
	    },
	    methods: {
	    	formatTooltip(val1,val2) {
	        	return val1 / val2;
	    	},
	    	Play(){
	    		var Audio=document.getElementById("audio");
	    		if(Audio.paused){
	    			Audio.play();
	    			this.icons='../../../static/img/icon1/zanting.png';
	    		}else{
	    			Audio.pause();
	    			this.icons='../../../static/img/icon1/bofang.png';
	    		}
	    	},
	    	AllTime(){
	    		var Audio=document.getElementById("audio");
	    		var time=Audio.duration;
	    		this.value2=time;
	    		var newTime=Math.round(time);
	    		this.musicMsg.allTime='0'+Math.floor(newTime/60)+':'+newTime%60;
	    	},
	    	NowTime(){
	    		var Audio=document.getElementById("audio");
	    		var time=Audio.currentTime;
	    		this.value1=time;
	    		var newTime=Math.round(time);
	    		this.musicMsg.nowTime='0'+Math.floor(newTime/60)+':'+newTime%60;
	    	},
	    	jx(){
			    var lyrics = this.lrc.split(" ");
			    console.log(lyrics);
			    var lrcObj = {};
			    for(var i=0;i<lyrics.length;i++){
			        var lyric = decodeURIComponent(lyrics[i]);
			        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
			        var timeRegExpArr = lyric.match(timeReg);
			        if(!timeRegExpArr)continue;
			        var clause = lyric.replace(timeReg,'');
			        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
			            var t = timeRegExpArr[k];
			            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
			                sec = Number(String(t.match(/\:\d*/i)).slice(1));
			            var time = min * 60 + sec;
			            lrcObj[time] = clause;
			        }
			    }
			    return lrcObj;
			},
			showLy() {
				var ul1=document.getElementsByClassName('r-mid')[0];
				setInterval(function(){
					if(ul1.children.length>=13){
						ul1.removeChild(ul1.firstElementChild);
					}
				},500)
			}
	    },
	    mounted() {
	    	var _this=this;
	    	var timer1=setTimeout(function(){
	    		_this.AllTime();
	    	},800);
	    	var timer2=setInterval(function(){
	    		_this.NowTime();
	    	},500);
		      
		    //歌词部分
		    this.p = document.querySelector("#audio");
		    
		    this.lrcObj = this.jx();
		    
		    //给当前播放时间添加事件监听函数
		    this.p.addEventListener("timeupdate",function(){
		      let obj = _this.lrcObj[Math.floor(this.currentTime)];
		      if(obj!=undefined){
		        _this.g = obj;
		      }
		    });
		    
		    //监听是否播放结束
		    this.p.addEventListener("ended",function(){
		      clearInterval(timer2);
		    });
		    
		    _this.showLy();
		    
		    this.height =window.innerHeight+'px'
		    window.onresize  = ()=>{
		      _this.height =window.innerHeight+'px'
    		}
        },
	    computed:{
	    	
	    },
	    components: {
	    	Comment
	    },
	    watch:{
	    	g:function(){
	    		var ul=document.querySelector(".r-mid");
	    		var oli=document.createElement('li');
		      	var txt=document.createTextNode(this.g);
		        oli.appendChild(txt);
		      	console.log('666666'+oli);
		      	ul.append(oli);
	    	}
	    }
	}
</script>

<style scoped>
	/*#audio{
		display: none;
	}*/
	.biger{
		width: 1000px;
		margin: 20px auto;
		position: relative;
		/*background-color: rgba(245,222,179,0.6);*/
	}
	.player{
		width: 1000px;
		height: 500px;
		background-color: rgba(76,76,76,0.7);
		background-size:100%;
		margin: 20px auto;
		border-radius: 10px;
	}
	.baffle{
		width: 1000px;
		height: 500px;
		position: absolute;
		left: 0;
		top: 20px;
		z-index: -1;
	}
	.blur {	
	    filter: blur(8px);
	    width: 100%;
	    height: 100%;
	}
	.left {
		width: 400px;
		margin-left: 100px;
		/*background-color: greenyellow;*/
		text-align: center;
	}
	.logo {
		width: 240px;
		height: 240px;
		margin: 50px auto;
		border: 10px solid white;
		border-radius: 50%;
		overflow: hidden;
	}
	.logo img {
		width: 240px;
		height: 240px;
		/*border-radius: 50%;*/
	}
	.col img{
		cursor: pointer;
		width: 45px;
		height: 45px;
		margin: 0 8px;
	}
	.block {
		width: 240px;
		margin-left: 80px;
		margin-top: 10px;
	}
	.showTime {
		position: absolute;
		font-size: 14px;
		color: white;
		top: 430px;
	}
	.nowTime {
		left: 135px;
	}
	.endTime {
		left: 430px;
	}
	.right {
		width: 300px;
		height: 100%;
	}
	.r-top{
		text-align: center;
		margin-top: 20px;
		border-bottom: 1px solid gray;
	}
	.r-mid{
		margin-top: 20px;
		height: 330px;
		overflow: hidden;
		text-align: center;
	}
	.r-mid li{
		border-bottom: 8px solid rgba(0,0,0,0);
	}
	.p1{
		font-size: 20px;
		color: white;
	}
	.p2{
		color: white;
	}
	.r-mid li{
		list-style: none;
		text-align: center;
		margin-top: 20px;
	}
	.r-bom {
		height: 50px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.r-bom div{
		width: 24%;
		height: 100%;
		text-align: center;
		display: inline-block;
	}
</style>
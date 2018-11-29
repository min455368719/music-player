<template>
	<div class="box">
		<div id="musicList">
			<div class="content">
				<!-- 标题 -->
				<div class="title">
					<div class="left">
						<h3>全部</h3>
						<!--<button>选择分类<span>e</span></button>-->
						<el-button size="mini" type="info" v-on:click="show">选择分类<i class="el-icon-arrow-down"></i></el-button>
					</div>
					<div class="right">
						<button class="active">热门</button>
						<button>最新</button>
					</div>
				</div>
				<!-- 分类 -->
				<div class="kinds" v-if="isTrue">
					<div class="all">
						<button>全部风格</button>
					</div>

          <ul class="musicStyle">
            <li>语种</li>
            <li>风格</li>
            <li>场景</li>
            <li>情感</li>
            <li>主题</li>
          </ul>

					<div class="musicStyleList">
            <ul class="language">
              <li><a href="#" class="a-f">华语</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">欧美</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">日语</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">韩语</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">粤语</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">小语种</a><span class="line">|</span></li>
            </ul>
              <ul class="stlye-kinds">
              <li><a href="#" class="a-f">流行</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">摇滚</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">民谣</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">电子</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">舞曲</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">说唱</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">古典</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">古风</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">金属</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">民族</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">爵士</a><span class="line">|</span></li>
            </ul>

            <ul class="scenario">
              <li><a href="#" class="a-f">清晨</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">夜晚</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">学习</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">工作</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">午休</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">下午茶</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">地铁</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">驾车</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">运动</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">酒吧</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">旅行</a><span class="line">|</span></li>
            </ul>

            <ul class="scenario">
              <li><a href="#" class="a-f">怀旧</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">清新</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">浪漫</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">性感</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">伤感</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">治愈</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">放松</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">孤独</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">感动</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">兴奋</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">安静</a><span class="line">|</span></li>
            </ul>

            <ul class="scenario">
              <li><a href="#" class="a-f">影视原声</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">儿童</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">游戏</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">年代</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">网络歌曲</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">榜单</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">校园</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">KTV</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">乐器</a><span class="line">|</span></li>
              <li><a href="#" class="a-f">经典</a><span class="line">|</span></li>
            </ul>

          </div>



				</div>

				<!-- 歌单 -->
				<div class="list">
					<div class="list-box" v-for="item in musicInfor" :key="item.id">
						<img :src="item.ImgUrl" alt="加载失败">
						<p><a href="#">{{item.musicDcp}}</a></p>
						<p><a href="#">{{item.author}}</a></p>
					</div>
				</div>
			</div>
			<div class='main1_right'>
				<div class="r-1">喜欢这首歌的人</div>
				<el-container class="r-2">
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
				</el-container>
				<div class="r-1">包含这首歌的歌单</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-1">相似歌曲</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Three",
  data() {
    return {
      musicInfor: [
        {
          id: 1,
          ImgUrl:
            "https://p3.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.jpg?param=200y200",
          musicDcp: "歌单信息",
          author: "作者"
        },
        {
          id: 2,
          ImgUrl:
            "https://p3.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.jpg?param=200y200",
          musicDcp: "歌单信息",
          author: "作者"
        }
      ],
    isTrue: false
    } 
  },
  methods: {
    show: function(){
      this.isTrue = !this.isTrue;
    },

  }
}

</script>

<style scoped>
li{
  list-style: none;
}
a {
  text-decoration: none;
}
.box {
  width: 100%;
  height: 1744px;
  background-color: #f0f0f0;
  /*margin-top: -20px;*/
  position: relative;
  left: 0px;
  top: 0px;
}

#musicList {
  width: 980px;
  height: 1744px;
  background-color: white;
  margin: 0px auto;
}

.content {
  width: 900px;
  height: 1744px;
  margin: 0px auto;
  position: relative;
}

.title {
  width: 900px;
  height: 50px;
  margin: 0px auto;
  padding-top: 50px;
  border-bottom: 2px solid #ff7428;
}
.title .left {
  float: left;
  margin-top: 15px;
  /* display: flex; */
}
.title .right {
  float: right;
  display: flex;
  margin-top: 15px;
}
.left h3 {
  display: inline;
}
.left button {
  cursor: pointer;
  position: relative;
  color: #0080ff;
}
.left button span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 1px solid #0080ff;
  border-bottom: 1px solid #0080ff;
  transform: rotate(45deg);
  position: absolute;
  top: 4px;
  left: 65px;
}
.right button {
  cursor: pointer;
}
.right .active {
  background-color: #ff0000;
  border: 0px;
  outline: none;
}

.kinds {
  width: 700px;
  height: 300px;
  background-color: #fcfcfc;
  position: absolute;
  top: 92px;
  left: 42px;
  box-shadow: 2px 2px 5px #888888;

}
.all {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 20px;
}
.all button {
  margin-left: 36px;
}
.musicStyle{
  width: 100px;
  height: 232px;
  border-right: 1px solid #e6e6e6;
  padding-top: 10px;
}
.musicStyle li{
  text-align: center;
  margin-bottom: 26px;
  font-weight: 600;
}
.musicStyleList{
  width: 588px;
  height: 240px;
  position: absolute;
  top: 60px;
  left: 102px;
  padding-left: 10px;
}

 .musicStyleList li{
  display: inline-block;
  margin: 10px 10px 0px 0px;
}
.a-f{
  font-size: 12px;
  color: #333;
}
.a-f:hover{
  text-decoration: underline;
}
.line{
  margin-left: 10px;
  color: #d8d8d8;
}
.stlye-kinds{
  margin-top: 20px;
  
}
.scenario{
  margin-top: 18px;
}
.list {
  width: 900px;
  height: 1500px;
  background-color: aqua;
  margin-top: 30px;
}
.list-box {
  width: 140px;
  height: 190px;
  border: 1px solid #f0f0f0;
  float: left;
  margin-right: 40px;
}
.list-box img {
  width: 140px;
  height: 140px;
}
.list-box p {
  line-height: 6px;
  font-size: 14px;
  text-align: center;
}
.list-box p:last-child {
  font-size: 12px;
}
</style>
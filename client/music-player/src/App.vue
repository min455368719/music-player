<template>
	<div id="app">
		<Head></Head>
		<RouterNav></RouterNav>
		<router-view/>
		<Footer></Footer>
	</div>
</template>

<script>
	//导入组件
	import Head from './components/HeadNav';
	import RouterNav from './components/RouterNav';
	import Footer from './components/Footer';

	export default {
		name: 'App',
		components: {
			Head,
			RouterNav,
			Footer
		}
	}
</script>

<style scoped>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0px;
		padding: 0;
	}
</style>
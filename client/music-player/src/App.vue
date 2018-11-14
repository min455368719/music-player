<template>
  <div id="app">
  	<Head></Head>
    <router-link to="/One">one</router-link>
    <router-link to="/Two">two</router-link>
    <router-link to="/Three">three</router-link>
    <router-link to="/four">four</router-link>
    <router-view/>
  </div>
</template>

<script>
//导入组件
import Head from './components/HeadNav';

export default {
  name: 'App',
  components: {
  	Head
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

<template>
  <div id="app">
    <!-- <HelloWorld/> -->

    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/socket">/socket</router-link></li>
      <li><router-link to="/fractions">/fractions</router-link></li>
    </ul>

    <router-view class="view"></router-view>
  </div>
</template>

<script>
import router from './components/router'
// import HelloWorld from './components/HelloWorld'

// import FractionsCalculator from './components/FractionsCalculator'
// import SocketList from './components/SocketList'


export default {
  name: 'App',
  router,
  components: {
    // HelloWorld,
    FractionsCalculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <router-link to="/">HelloWorld</router-link>&nbsp;
    <router-link to="/search_ip">Search IP</router-link>&nbsp;
    <router-link to="/ramens">Ramens</router-link>&nbsp;
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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

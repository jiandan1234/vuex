<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
 updated() {
    window.scroll(0, 0);
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: left;
  color: #000;
  /* border:1px solid red; */
  width: 100%;
  height: 100%;
  display: flex;
}
*{
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
    width: 100%;
    height: 100%;
    overflow: auto;
    /* border:2px solid yellow; */
  }

</style>

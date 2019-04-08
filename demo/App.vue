<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <KoFiButton title="Givese me Moneys!" color="#CCC" id="123" />
  </div>
</template>

<script>
import KoFiButton from '../src/KoFiButton'

export default {
  name: 'app',
  components: {
    KoFiButton,
  },
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

<template>
  <div class="main-body">
    <Layout/>
  </div>
</template>

<script>
import Layout from './views/Layout/index'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
.main-body {
  height: 100%;
  background-color: #9DC8C8;
}
</style>

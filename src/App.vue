<template>
  <div class="main-body">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

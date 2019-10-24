<template>
  <div class="layout-div">
    <div class="layout-header">
      <Header/>
    </div>
    <div class="layout-body">
      <div class="layout-nav">
        <Nav/>
      </div>
      <div class="layout-main"></div>
    </div>
    <div class="layout-footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Nav
  }
}
</script>

<style scoped lang='scss'>
.layout-div {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #52616a;
}
.layout-body {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 60px;
  background-color: #519D9E;
  .layout-nav {
    position: fixed;
    top: 60px;
    bottom: 60px;
    left: 0;
    width: 220px;
    background-color: #52616a;
  }
  .layout-main {
    position: fixed;
    top: 60px;
    bottom: 60px;
    left: 220px;
    right: 0;
    background-color: #fcbe32;
  }
}
.layout-footer {
  position: fixed;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c9d6de;
}
</style>

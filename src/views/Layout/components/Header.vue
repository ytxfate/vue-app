<template>
  <div>
    <div class="header-logo">Vue App Template</div>
    <div class="header-nav">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#52616a"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">菜单导航1</el-menu-item>
        <el-submenu index="2">
          <template slot="title">菜单导航2</template>
          <el-menu-item index="2-1">菜单导航2-1</el-menu-item>
          <el-menu-item index="2-2">菜单导航2-2</el-menu-item>
          <el-menu-item index="2-3">菜单导航2-3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">菜单导航2-4</template>
            <el-menu-item index="2-4-1">菜单导航2-4-1</el-menu-item>
            <el-menu-item index="2-4-2">菜单导航2-4-2</el-menu-item>
            <el-menu-item index="2-4-3">菜单导航2-4-3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">菜单导航3</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">链接导航</a>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="header-user">
      User Logo
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header-logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.header-nav {
  position: fixed;
  top: 0;
  left: 220px;
  right: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.header-user {
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>

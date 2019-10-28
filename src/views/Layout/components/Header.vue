<template>
  <div>
    <div class="header-logo">
      <router-link to="/">
        Vue App Template Logo
      </router-link>
    </div>
    <div class="header-nav">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#52616a"
        text-color="#cfccc9"
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
          <a href="/" target="_self">链接导航</a>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="header-user">
      <div class="user-logo" @click="userLogoStatus = !userLogoStatus">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </div>
    </div>
    <transition
      name="user-operate-show"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <div class="user-operate" v-if="userLogoStatus" @click="userLogoStatus = !userLogoStatus">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#e6e6e6"
          text-color="#606266"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <span slot="title" @click="logout">退出登录</span>
          </el-menu-item>
        </el-menu>
      </div>
    </transition>
  </div>
</template>

<script>
import store from '../../../store/index'
export default {
  name: 'Header',
  data () {
    return {
      circleUrl: require('../../../static/images/user-logo.png'),
      userLogoStatus: false
    }
  },
  methods: {
    async logout () {
      // 退出登录
      await store.dispatch('user/logout').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header-logo {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  a {
    text-decoration: none;
    color: #fed71a;
  }
}
.header-nav {
  position: fixed;
  top: 0;
  left: 220px;
  right: 100px;
  height: 60px;
  min-width: 500px;
  line-height: 60px;
  text-align: center;
}
.header-user {
  position: fixed;
  top: 0;
  right: 0;
  width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.user-logo {
  height: 50px;
  padding: 5px;
  cursor: pointer;
}
.user-logo:hover {
  background-color: #424e55;
}
.user-operate {
  width: 100px;
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  z-index: 100;
  background-color: #e6e6e6;
  top: 65px;
  right: 5px;
}
</style>

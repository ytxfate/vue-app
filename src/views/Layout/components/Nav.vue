<template>
  <div class="nav-div">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#52616a"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router=true
    >
      <SidebarItem
        v-for="item in routerRoutes"
        :key="item.path"
        :item="item"
        :first-depth="true"
      />
    </el-menu>
  </div>
</template>

<script>
import router from '@/router/index'
import SidebarItem from './SidebarItem.vue'
export default {
  name: 'Nav',
  computed: {
    routerRoutes: () => {
      return router.options.routes
    }
  },
  components: {
    SidebarItem
  }
}
</script>

<style scoped>
.nav-div {
  height: 100%;
  border-top: 1px #424e55 solid;
  overflow-y: scroll;
}
.nav-div::-webkit-scrollbar {
  display: none;
}
</style>

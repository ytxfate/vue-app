<template>
  <div v-if="!item.hidden">
    <!-- 判断是否有子菜单 -->
    <template v-if="item.children && item.children.length > 0">
      <el-submenu :index="item.path">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :first-depth=false
          :base-path="newBasePath(item.path)"
        />
      </el-submenu>
    </template>
    <template v-else>
      <!-- 是否是一级菜单 -->
      <template v-if="firstDepth">
        <el-menu-item
          :index="item.path"
          :route="item.path"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
      <!-- 二级及以上菜单 -->
      <template v-else>
        <el-menu-item :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    firstDepth: {
      type: Boolean,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  beforeMount () {
    // 更新path的值
    this.item.path = path.resolve(this.basePath, this.item.path)
    // 若没有 icon 则设置默认图标
    this.item.icon = this.item.icon ? this.item.icon : 'el-icon-menu'
  },
  methods: {
    newBasePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style scoped>

</style>

<!-- <el-menu-item
        v-for="(item, index) in routerRoutes"
        :key="index"
        :index="index"
        :route="item.path"
      >
        <i class="el-icon-s-home"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item> -->

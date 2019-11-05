<template>
  <div class="result-container">
    <el-table :data="results" border style="width: 100%">
      <el-table-column fixed prop="menu_id" label="菜单ID" width="160"/>
      <el-table-column prop="path" label="菜单路径" />
      <el-table-column prop="component" label="模板名称" />
      <el-table-column prop="name" label="菜单名称" />
      <el-table-column prop="meta.title" label="页面title" />
      <el-table-column prop="meta.icon" label="图标" />
      <el-table-column
        prop="hidden"
        label="隐藏菜单"
        width="50"
        :formatter="(row, column, cellValue, index) => {
          return row.hidden ? '是' : '否'
        }"/>
      <el-table-column prop="parent_id" label="父级菜单ID" width="160"/>
      <el-table-column prop="parent_name" label="父级菜单名称" />
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showDetail(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="showEdit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteMenu(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <ShowDetailInfo
      :detail-dialog-visible="detailDialogVisible"
      :row-data="rowData"
      :dialog-close="dialogClose"
    />
    <!-- <EditDataInfo
      :edit-dialog-visible="editDialogVisible"
      :menu-info="menuInfo"
      :dialog-close="dialogClose"
      :queryClick="queryClick"
      v-if="editDialogVisible"
    /> -->
  </div>
</template>

<script>
import ShowDetailInfo from './ShowDetailInfo.vue'
// import { deleteMenu } from '@/api/authority/menu_manager'

export default {
  name: 'ResultContainer',
  components: {
    ShowDetailInfo
  },
  props: ['results', 'queryClick'],
  data () {
    return {
      detailDialogVisible: false,
      editDialogVisible: false,
      rowData: {},
      menuInfo: { meta: {} }
    }
  },
  methods: {
    showDetail (row) {
      this.detailDialogVisible = true
      this.rowData = row
    },
    showEdit (row) {
      this.editDialogVisible = true
      this.menuInfo = JSON.parse(JSON.stringify(row))
    },
    dialogClose () {
      this.detailDialogVisible = false
      this.editDialogVisible = false
      this.rowData = {}
      this.menuInfo = { meta: {} }
    },
    deleteMenu (row) {
      this.$confirm(`确认删除菜单（${row.name}）？`)
        .then(() => {
        //   deleteMenu({ menu_id: row.menu_id }).then((res) => {
        //     this.$message({
        //       message: res.msg,
        //       type: 'success'
        //     })
        //     this.queryClick()
        //   })
          console.log('delete menu')
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
  .result-container {
    margin: 20px;
  }
</style>

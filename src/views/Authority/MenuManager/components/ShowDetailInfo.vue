<template>
  <div>
    <el-dialog
      title="详细信息"
      :visible.sync="detailDialogVisible"
      :before-close="dialogClose"
      width="800px"
    >
      <el-row :gutter="20" class="row-height">
        <el-col :span="4" class="align-right">菜单ID：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.menu_id }}</el-col>
        <el-col :span="4" class="align-right">菜单路径：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.path }}</el-col>
        <el-col :span="4" class="align-right">模板名称：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.component }}</el-col>
      </el-row>
      <el-row :gutter="20" class="row-height">
        <el-col :span="4" class="align-right">跳转路径：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.redirect }}</el-col>
        <el-col :span="4" class="align-right">菜单名称：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.name }}</el-col>
        <el-col :span="4" class="align-right">是否隐藏菜单：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.hidden ? '是' : '否' }}</el-col>
      </el-row>
      <el-row :gutter="20" class="row-height">
        <el-col :span="4" class="align-right">页面title：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.meta ? rowData.meta.title : '' }}</el-col>
        <el-col :span="4" class="align-right">图标：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.meta ? rowData.meta.icon : '' }}</el-col>
        <el-col :span="4" class="align-right">父级菜单ID：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.parent_id }}</el-col>
      </el-row>
      <el-row :gutter="20" class="row-height">
        <el-col :span="4" class="align-right">菜单顺序：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.order }}</el-col>
        <el-col :span="4" class="align-right">菜单级别：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.depth }}</el-col>
        <el-col :span="4" class="align-right">父级菜单名称：</el-col>
        <el-col :span="4" class="info-div">{{ rowData.parent_name }}</el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogClose">取 消</el-button>-->
        <el-button type="primary" @click="dialogClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ShowDetailInfo',
  props: ['detailDialogVisible', 'rowData', 'dialogClose']
}
</script>

<style scoped>
.row-height {
  min-height: 40px;
}
.align-right {
  text-align: right;
}
.info-div {
  min-height: 30px;
}
</style>

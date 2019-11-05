<template>
  <div class="query-container">
    <el-form ref="queryForm" :inline="true" :model="formValues" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="6" :offset="2">
          <el-form-item label="菜单路径">
            <el-input v-model="formValues.path" placeholder="菜单路径" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="模板名称">
            <el-input v-model="formValues.component" placeholder="模板名称" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="菜单名称">
            <el-input v-model="formValues.name" placeholder="菜单名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="2">
          <el-form-item label="页面标题">
            <el-input v-model="formValues.title" placeholder="页面标题" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="隐藏菜单">
            <el-select v-model="formValues.hidden" placeholder="菜单是否隐藏">
              <el-option
                v-for="item in hiddenValues"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="16">
          <el-form-item>
            <el-button type="primary" @click="queryClick(true)">查询</el-button>
            <el-button type="primary" @click="resetQueryFormValues">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'QueryContainer',
  props: ['formValues', 'queryClick', 'resetQueryFormValues'],
  data () {
    return {
      hiddenValues: [{
        value: true,
        label: '是'
      }, {
        value: false,
        label: '否'
      }]
    }
  }
}
</script>

<style scoped>
  .query-container {
    margin-top: 20px;
  }
</style>

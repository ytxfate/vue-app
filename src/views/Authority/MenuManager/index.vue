<template>
    <div>
      <div>
        <QueryContainer
          :form-values="formValues"
          :query-click="queryClick"
          :reset-query-form-values="resetQueryFormValues"
        />
      </div>
      <div>
        <ResultContainer
          :results="queryResults"
          :query-click='queryClick'
        />
      </div>
    </div>
</template>

<script>
import QueryContainer from './components/QueryContainer.vue'
import ResultContainer from './components/ResultContainer.vue'
import { getAllMenus } from '@/api/authority.js'

export default {
  name: 'MenuManager',
  data () {
    return {
      formValues: {},
      queryResults: []
    }
  },
  methods: {
    queryClick (queryFirstPageFlag) {
      // queryFirstPageFlag 判断是否为查询第一页数据
      let reqValue = {}
      for (const key in this.formValues) {
        if (this.formValues[key] !== '') {
          reqValue[key] = (this.formValues[key].constructor === String) ? this.formValues[key].trim() : this.formValues[key]
        }
      }
      getAllMenus({ start: 0, size: 10 }, reqValue).then(res => {
        const { data, total } = res.response
        this.queryResults = data
      })
    },
    resetQueryFormValues () {
      this.formValues = {}
    }
  },
  components: {
    QueryContainer,
    ResultContainer
  }
}
</script>

<style scoped>

</style>

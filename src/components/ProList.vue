<script>
export default {
  name: 'ProList',
  props: {
    pageParams: {
      type: Object,
    },
    total: {
      type: Number,
    },
    onInquire: {
      type: Function,
    },
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  watch: {
    'pageParams.pageNum': function (newVal) {
      this.$refs.pagination.internalCurrentPage = newVal
    },
  },
  methods: {
    // 分页 pageNum
    handleCurrentChange(val) {
      // eslint-disable-next-line vue/no-mutating-props
      this.pageParams.pageNum = val
      this.onInquire()
    },
    // 分页 pageSize
    handleSizeChange(val) {
      // eslint-disable-next-line vue/no-mutating-props
      this.pageParams.pageSize = val
      // eslint-disable-next-line vue/no-mutating-props
      this.pageParams.pageNum = 1
      this.onInquire()
    },
  },
}
</script>

<template>
  <div class="pro-table">
    <div class="query-conditions">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="batch-actions">
      <slot name="batchActions" />
    </div>
    <main style="margin-top: 20px">
      <slot />
    </main>
    <div flex justify-end mt-10px>
      <el-pagination
        v-if="pageParams" ref="pagination" :current-page="pageParams.pageNum"
        :page-sizes="[10, 20, 50, 100, 200]" :page-size="pageParams.pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pro-table {
  padding: 10px 10px 0 10px;

  .query-conditions {
    display: flex;
    justify-content: space-between;
    margin-top: -10px;

    .header {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: center;

      :deep(.el-input) {
        width: 220px !important;
        margin-right: 10px;
        margin-top: 10px;
      }

      // :deep(.el-select) {
      //   width: 200px;
      //   margin-right: 10px;
      // }

      :deep(.el-date-editor) {
        max-width: 300px !important;
        margin-right: 10px;
        margin-top: 10px;
      }
    }

    .actions {
      display: flex;
      margin-top: 10px;

      // margin-top: 14px;
      :deep(.el-button) {
        border-radius: 2px;
        padding: 8px 20px;
      }

      // .el-button--default {
      //   border-color: #446abd;
      //   color: #5a6477 !important;
      // }
    }
  }

  .batch-actions {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
}
</style>

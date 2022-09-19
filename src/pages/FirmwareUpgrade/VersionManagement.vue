<script lang='ts'>
export default {
  data() {
    return {
      queryParams: {},
      dataList: []
    }
  },
  methods: {
    pageToManageDetail(mode) {
      this.$router.push({
        path: '/FirmwareUpgrade/VersionManagementDetail',
        query: {
          mode
        }
      })
    }
  }
}
</script>

<template>
  <div class="version-manage">
    <div class="title">版本管理</div>
    <div class="body">
      <div class="query-container">
        <div class="query-params">
          <el-input placeholder="版本号" v-model="queryParams.version" />
          <el-select placeholder="状态" v-model="queryParams.status">
            <el-option label="生效" value="1" />
            <el-option label="未生效" value="0" />
          </el-select>
          <el-select placeholder="是否应用至固件" v-model="queryParams.isApply">
            <el-option label="是" value="1" />
            <el-option label="否" value="0" />
          </el-select>
          <el-date-picker
            type="daterange"
            start-placeholder="发布开始日期"
            end-placeholder="发布结束日期"
            value-format="yyyy-MM-dd"
            v-model="queryParams.publicDate"
          />
          <el-date-picker
            type="daterange"
            start-placeholder="创建开始日期"
            end-placeholder="创建结束日期"
            value-format="yyyy-MM-dd"
            v-model="queryParams.createDate"
          />
        </div>
        <div class="query-actions">
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </div>
      </div>
      <div class="actions-container">
        <el-button type="primary" @click="pageToManageDetail('add')">新增</el-button>
      </div>
      <el-table :data="dataList" border>
        <el-table-column label="序号" type="index" width="55" />
        <el-table-column label="版本号" prop="version" />
        <el-table-column label="创建时间" prop="createTime" />
        <el-table-column label="发布人" prop="publicer" />
        <el-table-column label="发布时间" prop="publicTime" />
        <el-table-column label="状态" prop="statusText" />
        <el-table-column label="是否应用至固件" prop="isApply" />
        <el-table-column label="操作">
          <template slot-scope="{ row }">
            <el-button type="text">查看</el-button>
            <el-button type="text" v-if="row.statusText === '失效'">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss">
.el-input {
  display: inline-block;
  width: 200px;
  margin-right: 15px;
  margin-bottom: 10px;
}
.el-select {
  margin-bottom: 3px;
  .el-input{
    margin-bottom: 0;
  }
}
.el-button {
  padding: 8px 15px;
}

.el-date-editor {
  width: 320px !important;
}
</style>

<style lang='scss' scoped>
.version-manage {
  .title {
    background-color: #fff;
    padding-left: 15px;
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
  }
  .body {
    margin: 10px;
    padding: 15px;
    background-color: #fff;
    .query-container {
      display: flex;
      .query-params {
        flex: 1
      }
    }
    .actions-container {
      margin: 20px 0
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>

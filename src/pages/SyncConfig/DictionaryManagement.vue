<script lang='ts' setup>
import { Plus } from '@element-plus/icons-vue'
const queryParams: any = reactive({})
const singleTable = ref()
const {
  tableHeight, total, pageParams, tableLoading,
} = useTable(singleTable, 69)

let followUpList = $ref<any>([
])

const onInquire = () => {
  tableLoading.value = true
  setTimeout(() => {
    tableLoading.value = false
  }, 500)
}
const resetQueryParams = () => {

}
onMounted(() => {
  onInquire()
  followUpList = [
    { name: 1 },
    { name: 1 }]
})
const multipleSelection = ref([])
const clearFun = () => {

}
</script>

<template>
  <ProLayout model="title" main-bg-color="#ffffff" margin="10">
    <template #title>
      活动核销
    </template>
    <template #main>
      <ProList class="ProList" :page-params="pageParams" :total="total" :on-inquire="onInquire">
        <template #header>
          <el-input v-model="queryParams.searchValue" placeholder="姓名/手机号" clearable />
          <el-date-picker
            v-model="queryParams.date"
            type="daterange"
            start-placeholder="申请开始日期"
            end-placeholder="申请结束日期"
          />
          <el-select v-model="queryParams.value" placeholder="Select">
            <el-option
              label="选项1"
              value="dnjkasndklaslk"
            />
            <el-option
              label="选项2"
              value="dnjkasndklasdalk"
            />
          </el-select>
        </template>
        <template #actions>
          <el-button type="primary" @click="onInquire()">
            搜索
          </el-button>
          <el-button @click="resetQueryParams">
            重置
          </el-button>
        </template>
        <template #batchActions>
          <el-button type="primary" :icon="Plus" @click="resetQueryParams">
            新增
          </el-button>
          <div v-show="multipleSelection.length" class="batchActions-alert">
            <SvgIcon name="prompt" style="width:18px;margin: 0 5px 0 5px" />
            <!-- <exclamation-circle-filled /> -->
            <!-- <SvgIcon icon-class="prompt" width="18" style="margin: 0 5px 0 5px" /> -->
            <div style="margin: 0 5px 0 5px">
              已选择 {{ multipleSelection.length }}项
            </div>
            <el-button link @click="clearFun">
              清空
            </el-button>
          </div>
        </template>
        <el-table ref="singleTable" v-loading="tableLoading" :height="tableHeight" :data="followUpList" border>
          <el-table-column label="序号" type="index" width="60">
            <template #default="scope">
              <span>{{ scope.$index + 1 + (pageParams.pageNum - 1) * pageParams.pageSize }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名" prop="name" />
          <el-table-column label="性别" prop="sexText" />
          <el-table-column label="年龄" prop="age" />
          <el-table-column label="联系电话" prop="phone" min-width="120" />
          <el-table-column label="随访病种" prop="diseaseTypeText" min-width="120" />
          <el-table-column label="随访方式" prop="followUpTypeText" />
          <el-table-column label="任务随访（截止）关闭时间" prop="nextFollowTime" width="200" />
          <el-table-column label="随访频率" prop="frequencyText" />
          <el-table-column label="随访计划起止时间" prop="followStartAndEndTime" min-width="220" />
          <el-table-column label="随访机构" prop="followupHosName" min-width="220" />
        </el-table>
      </ProList>
    </template>
  </ProLayout>
</template>

<style lang='scss' scoped>

</style>

<route lang="yaml">
meta:
  layout: home
</route>

export const useTable = (tableRef: any, bottomOffset: number) => {
  const total = ref(0)
  const tableLoading = ref(false)
  // table高度
  const tableHeight = ref()
  const pageParams: any = reactive({
    pageNum: 1,
    pageSize: 20,
  })
  onMounted(() => {
  // 设置表格初始高度为innerHeight-offsetTop-表格底部与浏览器底部距离85
    tableHeight.value = window.innerHeight - tableRef.value.$el.offsetTop - bottomOffset
    // 监听浏览器高度变化
    window.onresize = () => {
      tableHeight.value = window.innerHeight - tableRef.value.$el.offsetTop - bottomOffset
    }
  })
  onUnmounted(() => {
    window.onresize = null
  })
  return {
    pageParams,
    tableLoading,
    total,
    tableHeight,
  }
}

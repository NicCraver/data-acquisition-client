<script lang='ts' setup>
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue'
import {
  AppstoreOutlined,
  MailOutlined,
} from '@ant-design/icons-vue'
import { getClientHeight } from '~/utils'
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
let asideHeight = $ref(0)
onMounted(() => {
  asideHeight = getClientHeight() - 60
})
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
})

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  },
)

const { menuState } = storeToRefs(appStore)
const isCollapse = computed(() => {
  return menuState.value === 'menu-fold'
})
// const handleOpen = (key: string, keyPath: string[]) => {
//   // console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   // console.log(key, keyPath)
// }
const router = useRouter()
const route = useRoute()

const select = (item: any) => {
  if (item.key !== route.path)
    router.push(item.key)
}
</script>

<script lang='ts'>
export default {
  name: 'TheMeun',
}
</script>

<template>
  <el-scrollbar :height="asideHeight">
    <a-menu
      v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
      :inline-collapsed="isCollapse" @select="select"
    >
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>
          监控看板
        </template>
        <a-menu-item key="/MonitorKanban/Overview">
          概览
        </a-menu-item>
        <a-menu-item key="/MonitorKanban/ClientMonitor">
          客户端监控
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>
          固件升级
        </template>
        <a-menu-item key="/FirmwareUpgrade/VersionMonitor">
          版本监控
        </a-menu-item>
        <a-menu-item key="/FirmwareUpgrade/VersionManagement">
          版本管理
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>
          同步配置
        </template>
        <a-menu-item key="/SyncConfig/DictionaryManagement">
          字典管理
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </el-scrollbar>
</template>

<style lang='scss' scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 210px;
}

.el-menu-item.is-active {
  background: #4468BD;

}

// :deep(.el-sub-menu.is-active >.el-sub-menu__title) {
//   color: #fff !important;
// }

.el-sub-menu .el-menu-item {
  background: #113075;
}

.el-sub-menu .el-menu-item.is-active {
  background: #4468BD;
}

.el-menu-item:hover {
  background: #1C367B;
  /* opacity:0.7; */
  color: #fff;
  /* background-color: var(--el-menu-hover-bg-color); */
}

.el-scrollbar {
  overflow: hidden;
  position: relative;
  height: calc(100% - 60px);
}
</style>

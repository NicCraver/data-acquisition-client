<script lang='ts' setup>
import { SwitchButton } from '@element-plus/icons-vue'
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
// const { menuState } = storeToRefs(appStore)
const appmMenuStateChange = () => {
  appStore.menuStateChange()
}
const test = () => {
  // console.log('1111111111', 1111111111)
}
</script>

<script lang='ts'>
export default {
  name: 'TheHeader',
}
</script>

<template>
  <div class="TheHeader">
    <div class="left">
      <!-- <SvgIcon :name="menuState" w-20px h-20px cursor-pointer @click="appmMenuStateChange" /> -->
      <slot />
    </div>
    <div class="right">
      <div hover:bg-light-6 pl-2 pr-2>
        <el-dropdown size="large">
          <span class="el-dropdown-link">
            <div flex items-center h-48px>
              <SvgIcon name="莫高窟第3窟·白衣观音" w-40px h-40px b-rounded-36 cursor-pointer @click="appmMenuStateChange" />
              <div ml-3>数据管理员</div>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="test()">
                <el-icon :size="16" style="margin-top:-2px">
                  <SwitchButton />
                </el-icon>
                <div>退出登录</div>
              </el-dropdown-item>
              <!-- <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>
                Action 4
              </el-dropdown-item>
              <el-dropdown-item divided>
                Action 5
              </el-dropdown-item> -->
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.TheHeader {
  line-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right {
    display: flex;
    align-items: center;

    .test {
      line-height: 48px;
    }
  }
}
</style>

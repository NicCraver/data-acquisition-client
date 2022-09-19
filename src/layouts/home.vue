<script lang='ts' setup>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { menuState } = storeToRefs(appStore)

const collapsed = computed(() => {
  return menuState.value === 'menu-fold'
})
const appmMenuStateChange = () => {
  appStore.menuStateChange()
}
</script>

<template>
  <a-layout h-screen>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="210">
      <TheLogo />
      <TheMeun />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;height: 48px;line-height:48px;box-shadow: 0 1px 4px rgb(0 21 41 / 8%);">
        <TheHeader>
          <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="appmMenuStateChange" />
          <MenuFoldOutlined v-else class="trigger" @click="appmMenuStateChange" />
        </TheHeader>
      </a-layout-header>
      <a-layout-content :style="{ margin: '0', padding: '0', background: '#EFEFEF' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang='scss'>
.trigger {
  font-size: 18px;
  line-height: 48px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #446ABD;
}

.logo {
  // height: 32px;
  height: 36px;
  // background: rgba(255, 255, 255, 0.3);
  margin: 10px 22px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout-header {
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  z-index: 1;
}

.ant-layout-sider-children {
  background: #134796 !important;
}

.ant-menu-sub {
  background: #00317a !important;
}

.ant-pro-sider {
  background-color: #134796 !important;

}

.ant-menu.ant-menu-dark {
  background-color: #134796 !important;
}

.ant-menu-vertical .ant-menu-item:not(:last-child),
.ant-menu-vertical-left .ant-menu-item:not(:last-child),
.ant-menu-vertical-right .ant-menu-item:not(:last-child),
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin: 0 !important;
  line-height: 48px !important;
  height: 48px !important;
}

.ant-menu-submenu-selected .ant-menu-submenu-title {
  margin: 0 !important;
  line-height: 48px !important;
  height: 48px !important;
}

.ant-menu-item {
  margin: 0 !important;
  height: 48px !important;
  line-height: 48px !important;
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #446abd !important;
}

.ant-menu-item-icon {
  font-size: 20px !important;
}
.ant-menu.ant-menu-inline-collapsed>.ant-menu-item .anticon {
  margin: 0;
  font-size: 20px;
  line-height: 48px !important;
  svg{
    margin-top: -5px;
  }
}
</style>

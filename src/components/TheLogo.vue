<script lang='ts' setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { menuState } = storeToRefs(appStore)
const isCollapse = computed(() => {
  return menuState.value === 'menu-fold'
})
</script>

<template>
  <div class="logo">
    <SvgIcon name="莫高窟第3窟·白衣观音" w-36px h-36px />
    <span v-show="!isCollapse" ml-4 class="text">
      数据盒子服务端
    </span>
  </div>
</template>

<style lang='scss' scoped>
.logo {
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.text {
  animation: fadenum .18s;
  font-size: 16px;
  font-weight: bold;
}

@keyframes fadenum {
  0% {
    opacity: 0;
  }

  99% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

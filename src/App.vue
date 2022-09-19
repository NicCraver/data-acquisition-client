<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const isDark = useDark()
useToggle(isDark)
const locale = ref(zhCn)
</script>

<template>
  <el-config-provider namespace="el" :locale="locale">
    <main h-screen>
      <router-view />
      <!-- <Footer /> -->
    </main>
  </el-config-provider>
</template>

<style lang='scss' scoped>

</style>
